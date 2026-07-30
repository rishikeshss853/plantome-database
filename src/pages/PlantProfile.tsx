import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, QrCode, Download, Share2, Check, 
  BookOpen, ExternalLink, Copy
} from 'lucide-react';
import { mockPlants } from '../data';

export default function PlantProfile() {
  const { id } = useParams<{ id: string }>();
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedSmilesIndex, setCopiedSmilesIndex] = useState<number | null>(null);

  // Dynamic Lookup across all 76+ species
  const plant = mockPlants.find((p) => String(p.id) === String(id)) || mockPlants[0];

  if (!plant) {
    return (
      <div className="py-20 text-center space-y-4">
        <p className="text-stone-400">Specimen not found.</p>
        <Link to="/" className="text-emerald-400 underline text-sm">Return to Catalog</Link>
      </div>
    );
  }

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

  // Standardize plant image source
  const plantImg = plant.image || plant.imageUrl || 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80';

  // Extract phytochemical array safely regardless of Excel column naming
  const phytochemicalsList: any[] = plant.phytochemicals || plant.metabolites || [];

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
        
        {/* LEFT: Plant Photo + QR Code Generator */}
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

          {/* Botanical Overview */}
          {plant.description && (
            <div className="bg-stone-900/80 rounded-2xl p-5 border border-stone-800 space-y-2">
              <div className="flex items-center space-x-2 text-stone-300 font-semibold text-xs uppercase tracking-wider">
                <BookOpen className="h-4 w-4 text-emerald-400" />
                <span>Botanical Overview</span>
              </div>
              <p className="text-stone-300 text-sm leading-relaxed">
                {plant.description}
              </p>
            </div>
          )}
        </div>

      </div>

      {/* TRADITIONAL USES (Renders only if present in Excel) */}
      {plant.traditionalUses && plant.traditionalUses.length > 0 && (
        <div className="bg-stone-900/80 rounded-2xl p-6 border border-stone-800 text-left space-y-4">
          <h2 className="text-lg font-bold text-white tracking-wide">Traditional Uses</h2>
          <ul className="space-y-2.5 text-stone-300 text-sm">
            {plant.traditionalUses.map((use: string, idx: number) => (
              <li key={idx} className="flex items-start space-x-3">
                <span className="h-2 w-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <span>{use}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* PHYTOCHEMICAL DATA CARDS */}
      {phytochemicalsList.length > 0 && (
        <div className="space-y-4 text-left">
          <div>
            <h2 className="text-xl font-bold text-white">Phytochemical Data</h2>
            <p className="text-xs text-stone-400">
              Major metabolites and bioactive compounds identified in {plant.commonName}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {phytochemicalsList.map((phyto: any, idx: number) => {
              const name = typeof phyto === 'string' ? phyto : (phyto.name || 'Compound');
              const type = phyto.type || 'metabolite';
              const location = phyto.location || 'Whole plant';
              const pubChemId = phyto.pubChemId;
              const smiles = phyto.smiles;
              const activities = phyto.activities || [];

              return (
                <div 
                  key={idx} 
                  className="bg-stone-900/90 rounded-2xl p-5 border border-stone-800 space-y-4 flex flex-col justify-between shadow-lg"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-white text-base">{name}</h3>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                        {type}
                      </span>
                    </div>

                    <div className="text-xs text-stone-400 space-x-1">
                      <span>Location:</span>
                      <span className="text-stone-200 font-medium">{location}</span>
                    </div>

                    {pubChemId && (
                      <div className="flex items-center justify-between text-xs text-stone-400">
                        <span>PubChem ID:</span>
                        <a
                          href={`https://pubchem.ncbi.nlm.nih.gov/compound/${pubChemId}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center space-x-1 text-stone-200 hover:text-emerald-400 font-mono transition"
                        >
                          <span>{pubChemId}</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    )}

                    {smiles && (
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-[11px] text-stone-400">
                          <span>SMILES:</span>
                          <button 
                            onClick={() => copySmiles(smiles, idx)}
                            className="text-stone-400 hover:text-emerald-400 transition"
                          >
                            {copiedSmilesIndex === idx ? (
                              <Check className="h-3.5 w-3.5 text-emerald-400" />
                            ) : (
                              <Copy className="h-3.5 w-3.5" />
                            )}
                          </button>
                        </div>
                        <div className="p-2.5 rounded-xl bg-stone-950 border border-stone-800 font-mono text-[11px] text-stone-300 break-all leading-tight select-all">
                          {smiles}
                        </div>
                      </div>
                    )}
                  </div>

                  {activities.length > 0 && (
                    <div className="pt-2 border-t border-stone-800 space-y-1.5">
                      <span className="text-[11px] text-stone-400 block">Activities:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {activities.map((act: string, aIdx: number) => (
                          <span 
                            key={aIdx} 
                            className="text-[11px] px-2.5 py-1 rounded-lg bg-stone-950 border border-stone-800 text-stone-300 font-medium"
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