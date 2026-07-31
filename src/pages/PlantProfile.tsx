import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, QrCode, Download, Share2, Check, 
  BookOpen, ExternalLink, Copy, Loader2
} from 'lucide-react';
import { mockPlants } from '../data';

export default function PlantProfile() {
  const { id } = useParams<{ id: string }>();
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedSmilesIndex, setCopiedSmilesIndex] = useState<number | null>(null);

  // Live web overview & traditional uses state
  const [wikiOverview, setWikiOverview] = useState<string>('');
  const [wikiUses, setWikiUses] = useState<string[]>([]);
  const [loadingWiki, setLoadingWiki] = useState<boolean>(false);

  // Dynamic Lookup across all species in data.ts
  const plant = mockPlants.find((p) => String(p.id) === String(id)) || mockPlants[0];

  // Helper to extract and clean sections from raw Wikipedia text
const parseWikiData = (fullText: string) => {
  // Overview: Intro paragraph before the first section heading
  const introText = fullText.split(/\n={2,5}/)[0].trim();
  const cleanOverview = introText.replace(/\[\d+\]/g, '').trim();

  // Expanded Regex covering more ethnobotanical, agricultural & folk headings
  const usesRegex = /(?:={2,5})\s*(Traditional medicine|Medicinal uses|Medicinal|Uses|Ethnobotany|Medical uses|Traditional uses|Ayurvedic uses|Herbal medicine|Folk medicine|Culinary|Culinary uses|Food|In folk medicine|Ethnomedicine|Pharmacology|Toxicity|Properties)\s*(?:={2,5})([\s\S]*?)(?=\n={2,5}\s*[^=]|$)/i;
  const usesMatch = fullText.match(usesRegex);

  let parsedUses: string[] = [];

  if (usesMatch && usesMatch[2]) {
    parsedUses = usesMatch[2]
      .split(/(?:\n+|\.\s+)/)
      .map((line) => line.replace(/^[*=-]\s*/, '').replace(/\[\d+\]/g, '').trim())
      .filter((line) => line.length > 25 && !line.startsWith('='))
      .slice(0, 5);
  }

  // Expanded fallback keywords (covers poultice, decoction, antimicrobial, fever, skin, etc.)
  if (parsedUses.length === 0) {
    const sentences = fullText.replace(/\[\d+\]/g, '').split(/(?<=[.!?])\s+/);
    parsedUses = sentences
      .filter((s) => 
        /traditional|medicinal|ayurveda|siddha|remedy|treatment|herb|disease|fever|skin|cough|wound|ulcer|antioxidant|tonic|decoction|poultice|infusion|ethno|antimicrobial|analgesic|edible|indigenous|folk/i.test(s) &&
        s.length > 25 &&
        !s.startsWith('=')
      )
      .slice(0, 4);
  }

  return { cleanOverview, parsedUses };
};

  // Fetch Wikipedia data with automatic redirects & title fallback
  useEffect(() => {
    if (!plant?.scientificName && !plant?.commonName) return;

    setLoadingWiki(true);

    const cleanScientific = plant.scientificName 
      ? plant.scientificName.split(' ')[0] + ' ' + (plant.scientificName.split(' ')[1] || '')
      : '';

    const fetchWikiPage = async (title: string) => {
      const url = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&explaintext=true&format=json&origin=*&redirects=1&titles=${encodeURIComponent(title)}`;
      const res = await fetch(url);
      const data = await res.json();
      const pages = data?.query?.pages;

      if (!pages) return null;
      const pageKey = Object.keys(pages)[0];
      if (pageKey === '-1') return null;

      return pages[pageKey]?.extract || null;
    };

    const loadData = async () => {
      try {
        let rawText = cleanScientific ? await fetchWikiPage(cleanScientific) : null;

        if (!rawText && plant.commonName) {
          rawText = await fetchWikiPage(plant.commonName);
        }

        if (rawText) {
          const { cleanOverview, parsedUses } = parseWikiData(rawText);
          if (cleanOverview) setWikiOverview(cleanOverview);
          if (parsedUses.length > 0) setWikiUses(parsedUses);
        } else {
          setWikiOverview(`${plant.commonName} (${plant.scientificName}) is a cataloged botanical specimen in the HITS Department of Biotechnology campus database.`);
        }
      } catch (err) {
        setWikiOverview(`${plant.commonName} (${plant.scientificName}) is a cataloged botanical specimen in the HITS Department of Biotechnology campus database.`);
      } finally {
        setLoadingWiki(false);
      }
    };

    loadData();
  }, [plant?.scientificName, plant?.commonName]);

  if (!plant) {
    return (
      <div className="py-20 text-center space-y-4">
        <p className="text-stone-400">Specimen not found.</p>
        <Link to="/" className="text-emerald-400 underline text-sm">Return to Catalog</Link>
      </div>
    );
  }

  // Smart selection logic for Traditional Uses
  const isPlaceholder = (text: string) => 
    /documented in hits|department of biotechnology|campus flora catalog/i.test(text);

  const cleanMockUses = (plant.traditionalUses || []).filter((use) => !isPlaceholder(use));
  
  // Prefer Wikipedia fetched uses over mock data, discarding placeholders
  const displayUses = wikiUses.length > 0 ? wikiUses : cleanMockUses;

  const livePlantUrl = window.location.href;
  const qrCodeImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(livePlantUrl)}&color=052e16&bgcolor=ffffff`;

  const copyShareLink = () => {
    navigator.clipboard.writeText(livePlantUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const copySmiles = (smiles: string, index: number) => {
    navigator.clipboard.writeText(smiles);
    setCopiedSmilesIndex(index);
    setTimeout(() => setCopiedSmilesIndex(null), 2000);
  };

  const downloadTagBadge = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 750;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#0c0a09';
    ctx.fillRect(0, 0, 600, 750);
    ctx.strokeStyle = '#059669';
    ctx.lineWidth = 8;
    ctx.strokeRect(20, 20, 560, 710);

    ctx.fillStyle = '#34d399';
    ctx.font = 'bold 28px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('PLANTOME DB', 300, 80);

    ctx.fillStyle = '#a8a29e';
    ctx.font = '16px sans-serif';
    ctx.fillText('HITS — Dept. of Biotechnology', 300, 110);

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = qrCodeImageUrl;

    img.onload = () => {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(120, 140, 360, 360);
      ctx.drawImage(img, 130, 150, 340, 340);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 32px sans-serif';
      ctx.fillText(plant.commonName || 'Plant Specimen', 300, 550);

      ctx.fillStyle = '#6ee7b7';
      ctx.font = 'italic 22px sans-serif';
      ctx.fillText(plant.scientificName || '', 300, 590);

      ctx.fillStyle = '#1c1917';
      ctx.fillRect(150, 630, 300, 45);
      ctx.strokeStyle = '#047857';
      ctx.lineWidth = 2;
      ctx.strokeRect(150, 630, 300, 45);

      ctx.fillStyle = '#f5f5f4';
      ctx.font = 'bold 18px monospace';
      ctx.fillText(`ID: ${plant.id}`, 300, 660);

      const link = document.createElement('a');
      link.download = `${plant.id}_QR_Tag.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    };
  };

  const plantImg = plant.image || plant.imageUrl || 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80';
  const phytochemicalsList: any[] = plant.phytochemicals || plant.metabolites || [];

  const overviewDisplay = (plant.description && !plant.description.includes('Cataloged campus species')) 
    ? plant.description 
    : wikiOverview;

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      
      {/* Top Header Controls */}
      <div className="flex items-center justify-between pb-3 border-b border-stone-800">
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-stone-400 hover:text-emerald-400 text-sm font-medium transition"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Catalog</span>
        </Link>

        <div className="flex items-center space-x-2">
          <button
            onClick={copyShareLink}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 hover:border-stone-700 text-xs font-medium text-stone-300 transition"
          >
            {copiedLink ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Share2 className="h-3.5 w-3.5" />}
            <span>{copiedLink ? 'Link Copied!' : 'Share Link'}</span>
          </button>

          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800/60">
            {plant.id}
          </span>
        </div>
      </div>

      {/* Main Specimen Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT: Photo & QR Tag */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative group rounded-2xl overflow-hidden border border-stone-800 shadow-xl bg-stone-900">
            <img 
              src={plantImg} 
              alt={plant.commonName}
              className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="bg-stone-900/90 rounded-2xl p-5 border border-stone-800 space-y-4 shadow-lg">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div className="flex items-center space-x-2 text-emerald-400">
                <QrCode className="h-4 w-4" />
                <h3 className="text-sm font-bold text-white">Campus Tag QR Code</h3>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                {plant.id}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white p-2 rounded-xl shrink-0 shadow-md">
                <img src={qrCodeImageUrl} alt="QR Code" className="w-24 h-24 object-contain" />
              </div>

              <div className="space-y-2 text-left">
                <p className="text-xs text-stone-400 leading-relaxed">
                  Attach this QR tag to <strong className="text-stone-200">{plant.commonName}</strong> on campus.
                </p>
                <button
                  onClick={downloadTagBadge}
                  className="w-full flex items-center justify-center space-x-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2 px-3 rounded-lg text-xs transition shadow-md"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download Tag Badge</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Botanical Overview */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="space-y-2">
            {plant.family && (
              <span className="px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-300 text-xs font-semibold border border-emerald-800/80">
                Family: {plant.family}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {plant.commonName}
            </h1>
            <p className="text-lg italic font-serif text-emerald-400">
              {plant.scientificName}
            </p>
          </div>

          <div className="bg-stone-900/80 rounded-2xl p-5 border border-stone-800 space-y-2">
            <div className="flex items-center space-x-2 text-stone-300 font-semibold text-xs uppercase tracking-wider">
              <BookOpen className="h-4 w-4 text-emerald-400" />
              <span>Botanical Overview</span>
            </div>

            {loadingWiki ? (
              <div className="flex items-center space-x-2 text-stone-400 text-sm py-2">
                <Loader2 className="h-4 w-4 animate-spin text-emerald-400" />
                <span>Fetching botanical data from repository...</span>
              </div>
            ) : (
              <p className="text-stone-300 text-sm leading-relaxed">
                {overviewDisplay}
              </p>
            )}
          </div>
        </div>

      </div>

{/* 2. Traditional Uses UI with Explicit Empty State */}
<div className="bg-stone-900/80 rounded-2xl p-6 border border-stone-800 text-left space-y-4">
  <h2 className="text-lg font-bold text-white tracking-wide">Traditional Uses</h2>
  
  {loadingWiki ? (
    <div className="flex items-center space-x-2 text-stone-400 text-sm py-2">
      <Loader2 className="h-4 w-4 animate-spin text-emerald-400" />
      <span>Searching botanical archives for traditional uses...</span>
    </div>
  ) : displayUses.length > 0 ? (
    <ul className="space-y-2.5 text-stone-300 text-sm">
      {displayUses.map((use: string, idx: number) => (
        <li key={idx} className="flex items-start space-x-3">
          <span className="h-2 w-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
          <span>{use}</span>
        </li>
      ))}
    </ul>
  ) : (
    <p className="text-stone-400 text-sm italic">
      No specific traditional or ethnobotanical uses documented in this specimen's public record.
    </p>
  )}
</div>

      {/* PHYTOCHEMICAL DATA CARDS */}
      {phytochemicalsList.length > 0 && (
        <div className="space-y-4 text-left">
          <div>
            <h2 className="text-xl font-bold text-stone-900 dark:text-white">Phytochemical Data</h2>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Major metabolites and bioactive compounds identified in {plant.commonName}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {phytochemicalsList.map((phyto: any, idx: number) => {
              const name = typeof phyto === 'string' ? phyto : (phyto.name || phyto.Name || 'Compound');
              const type = phyto.type || phyto.Type || 'Metabolite';
              const location = phyto.location || phyto.Location || phyto.plantPart || 'Whole plant';

              const rawPubChem = 
                phyto.pubChemId || 
                phyto.pubchemId || 
                phyto.pubChemID || 
                phyto.pubchem || 
                phyto.cid || 
                phyto['PubChem ID'] || 
                phyto['pubchem_id'];

              const rawSmiles = 
                phyto.smiles || 
                phyto.SMILES || 
                phyto.canonicalSmiles || 
                phyto['Canonical SMILES'];

              const hasValidPubChem = 
                rawPubChem && 
                String(rawPubChem).trim() !== '' && 
                String(rawPubChem).toUpperCase() !== 'N/A';

              const hasValidSmiles = 
                rawSmiles && 
                String(rawSmiles).trim() !== '' && 
                String(rawSmiles).toUpperCase() !== 'N/A';

              const activities = phyto.activities || phyto.Activities || [];

              return (
                <div 
                  key={idx} 
                  className="bg-white dark:bg-stone-900/90 rounded-2xl p-5 border border-stone-200 dark:border-stone-800 space-y-4 flex flex-col justify-between shadow-sm dark:shadow-lg transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-bold text-stone-900 dark:text-white text-base truncate">{name}</h3>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 shrink-0">
                        {type}
                      </span>
                    </div>

                    <div className="text-xs text-stone-500 dark:text-stone-400 space-x-1">
                      <span>Location:</span>
                      <span className="text-stone-800 dark:text-stone-200 font-medium">{location}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
                      <span>PubChem ID:</span>
                      {hasValidPubChem ? (
                        <a
                          href={`https://pubchem.ncbi.nlm.nih.gov/compound/${rawPubChem}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center space-x-1 text-emerald-700 dark:text-stone-200 hover:text-emerald-500 font-mono transition"
                        >
                          <span>{rawPubChem}</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ) : (
                        <a
                          href={`https://pubchem.ncbi.nlm.nih.gov/#query=${encodeURIComponent(name)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center space-x-1 text-emerald-600 dark:text-emerald-400 hover:underline text-[11px] font-medium transition"
                          title="Search this compound on PubChem"
                        >
                          <span>Search PubChem</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>

                    {hasValidSmiles ? (
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-[11px] text-stone-500 dark:text-stone-400">
                          <span>SMILES:</span>
                          <button 
                            onClick={() => copySmiles(rawSmiles, idx)}
                            className="text-stone-400 hover:text-emerald-500 transition"
                            title="Copy SMILES string"
                          >
                            {copiedSmilesIndex === idx ? (
                              <Check className="h-3.5 w-3.5 text-emerald-500" />
                            ) : (
                              <Copy className="h-3.5 w-3.5" />
                            )}
                          </button>
                        </div>
                        <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 font-mono text-[11px] text-stone-800 dark:text-stone-300 break-all leading-tight select-all">
                          {rawSmiles}
                        </div>
                      </div>
                    ) : (
                      <div className="text-[11px] text-stone-400 dark:text-stone-500 italic">
                        SMILES structure not recorded
                      </div>
                    )}
                  </div>

                  {activities.length > 0 && (
                    <div className="pt-2 border-t border-stone-200 dark:border-stone-800 space-y-1.5">
                      <span className="text-[11px] text-stone-500 dark:text-stone-400 block">Activities:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {activities.map((act: string, aIdx: number) => (
                          <span 
                            key={aIdx} 
                            className="text-[11px] px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 font-medium"
                          >
                            {act}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
}