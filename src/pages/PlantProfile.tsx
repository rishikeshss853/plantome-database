import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, QrCode, Download, Share2, Check, 
  Leaf, Dna, MapPin, Activity, BookOpen, ShieldCheck 
} from 'lucide-react';

// Sample specimen interface (replace/integrate with your actual database/props)
interface PlantSpecimen {
  id: string;
  commonName: string;
  scientificName: string;
  tamilName?: string;
  family: string;
  habit: string;
  campusZone: string;
  description: string;
  imageUrl: string;
  compounds: string[];
  medicinalUses: string[];
}

// Example data fallback (for previewing layout)
const SAMPLE_PLANT: PlantSpecimen = {
  id: 'PLANT-001',
  commonName: 'Neem Tree',
  scientificName: 'Azadirachta indica',
  tamilName: 'வேம்பு (Vembu)',
  family: 'Meliaceae',
  habit: 'Evergreen Tree',
  campusZone: 'Main Lawn - Zone A',
  description: 'Azadirachta indica, commonly known as neem, nimtree or Indian lilac, is a tree in the mahogany family Meliaceae. It is native to the Indian subcontinent and has extensive medicinal and agricultural applications.',
  imageUrl: 'https://images.unsplash.com/photo-1628189033321-f11656515c9d?auto=format&fit=crop&w=800&q=80',
  compounds: ['Nimbin', 'Azadirachtin', 'Nimbidin', 'Quercetin', 'Gedunin'],
  medicinalUses: ['Antibacterial', 'Antifungal', 'Immune Booster', 'Skin Disorders Treatment', 'Natural Insecticide']
};

export default function PlantDetail() {
  const { id } = useParams();
  const [copied, setCopied] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);

  // Use route params ID or fallback to sample plant
  const plant = SAMPLE_PLANT; 

  // Current live URL of this exact plant page
  const livePlantUrl = window.location.href;

  // QR Code Image API URL
  const qrCodeImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(livePlantUrl)}&color=052e16&bgcolor=ffffff`;

  // Copy URL to clipboard
  const copyShareLink = () => {
    navigator.clipboard.writeText(livePlantUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // High-Res Canvas Badge Download Function
  const downloadTagBadge = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Background Card
    ctx.fillStyle = '#0c0a09'; // stone-950
    ctx.fillRect(0, 0, 600, 800);

    // Green Border
    ctx.strokeStyle = '#059669'; // emerald-600
    ctx.lineWidth = 8;
    ctx.strokeRect(20, 20, 560, 760);

    // Title Header
    ctx.fillStyle = '#34d399';
    ctx.font = 'bold 28px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('PLANTOME DB', 300, 80);

    ctx.fillStyle = '#a8a29e';
    ctx.font = '16px sans-serif';
    ctx.fillText('HITS — Dept. of Biotechnology', 300, 110);

    // Load QR Image onto Canvas
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = qrCodeImageUrl;

    img.onload = () => {
      // Draw white background box
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(120, 140, 360, 360);
      ctx.drawImage(img, 130, 150, 340, 340);

      // Common Name
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 32px sans-serif';
      ctx.fillText(plant.commonName, 300, 550);

      // Scientific Name
      ctx.fillStyle = '#6ee7b7';
      ctx.font = 'italic 22px sans-serif';
      ctx.fillText(plant.scientificName, 300, 590);

      // Specimen ID Badge
      ctx.fillStyle = '#1c1917';
      ctx.fillRect(150, 630, 300, 45);
      ctx.strokeStyle = '#047857';
      ctx.lineWidth = 2;
      ctx.strokeRect(150, 630, 300, 45);

      ctx.fillStyle = '#f5f5f4';
      ctx.font = 'bold 18px monospace';
      ctx.fillText(`ID: ${id || plant.id}`, 300, 660);

      // Call to action
      ctx.fillStyle = '#78716c';
      ctx.font = '14px sans-serif';
      ctx.fillText('Scan tag to view full phytochemical profile', 300, 720);

      // Trigger Download
      const link = document.createElement('a');
      link.download = `${plant.id}_${plant.commonName.replace(/\s+/g, '_')}_QR_Tag.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    };
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      
      {/* Top Bar: Back Link + Actions */}
      <div className="flex items-center justify-between pb-2 border-b border-stone-800">
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-stone-400 hover:text-emerald-400 text-sm font-medium transition"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Species Catalog</span>
        </Link>

        <div className="flex items-center space-x-2">
          <button
            onClick={copyShareLink}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 hover:border-stone-700 text-xs font-medium text-stone-300 transition"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Share2 className="h-3.5 w-3.5" />}
            <span>{copied ? 'Link Copied!' : 'Share Link'}</span>
          </button>

          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800/60">
            {id || plant.id}
          </span>
        </div>
      </div>

      {/* Main Specimen Grid (Fixed 2-Column Desktop Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: Fixed-Height Image + QR Code Card (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Plant Image Container (Restrained & Tight) */}
          <div className="relative group rounded-2xl overflow-hidden border border-stone-800 shadow-xl bg-stone-900">
            <img 
              src={plant.imageUrl} 
              alt={plant.commonName}
              className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-stone-900/90 text-stone-200 backdrop-blur-md border border-stone-700">
                {plant.habit}
              </span>
              {plant.tamilName && (
                <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-emerald-950/90 text-emerald-300 backdrop-blur-md border border-emerald-800">
                  {plant.tamilName}
                </span>
              )}
            </div>
          </div>

          {/* INLINE QR CODE & TAG GENERATOR WIDGET */}
          <div className="bg-stone-900/90 rounded-2xl p-5 border border-stone-800 space-y-4 shadow-lg">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div className="flex items-center space-x-2 text-emerald-400">
                <QrCode className="h-4 w-4" />
                <h3 className="text-sm font-bold text-white">Campus Tag QR Code</h3>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                Live URL
              </span>
            </div>

            <div className="flex items-center gap-4">
              {/* QR Image Box */}
              <div className="bg-white p-2 rounded-xl shrink-0 shadow-md">
                <img 
                  src={qrCodeImageUrl} 
                  alt="QR Code" 
                  className="w-24 h-24 object-contain"
                />
              </div>

              {/* Instructions & Actions */}
              <div className="space-y-2 text-left">
                <p className="text-xs text-stone-400 leading-relaxed">
                  Attach this QR code to the physical specimen on campus. Scanning directs phone camera straight to this page.
                </p>

                <button
                  onClick={downloadTagBadge}
                  className="w-full flex items-center justify-center space-x-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2 px-3 rounded-lg text-xs transition shadow-md shadow-emerald-900/30"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download Tag Badge (PNG)</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Compact Botanical & Phytochemical Details (7 cols) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Header Metadata */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-300 font-semibold border border-emerald-800/80">
                Family: {plant.family}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-stone-800 text-stone-300 font-medium border border-stone-700 flex items-center space-x-1">
                <MapPin className="h-3 w-3 text-emerald-400 inline" />
                <span>{plant.campusZone}</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {plant.commonName}
            </h1>

            <p className="text-lg italic font-serif text-emerald-400">
              {plant.scientificName}
            </p>
          </div>

          {/* Description Card */}
          <div className="bg-stone-900/80 rounded-2xl p-5 border border-stone-800 space-y-2">
            <div className="flex items-center space-x-2 text-stone-300 font-semibold text-xs uppercase tracking-wider">
              <BookOpen className="h-4 w-4 text-emerald-400" />
              <span>Botanical Description</span>
            </div>
            <p className="text-stone-300 text-sm leading-relaxed">
              {plant.description}
            </p>
          </div>

          {/* Key Phytochemical Compounds Card */}
          <div className="bg-stone-900/80 rounded-2xl p-5 border border-stone-800 space-y-3">
            <div className="flex items-center space-x-2 text-stone-300 font-semibold text-xs uppercase tracking-wider">
              <Dna className="h-4 w-4 text-emerald-400" />
              <span>Key Phytochemical Compounds</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {plant.compounds.map((compound, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-stone-950 border border-emerald-900/60 text-emerald-300 text-xs font-mono font-medium"
                >
                  {compound}
                </span>
              ))}
            </div>
          </div>

          {/* Bioactive & Medicinal Uses Card */}
          <div className="bg-stone-900/80 rounded-2xl p-5 border border-stone-800 space-y-3">
            <div className="flex items-center space-x-2 text-stone-300 font-semibold text-xs uppercase tracking-wider">
              <Activity className="h-4 w-4 text-emerald-400" />
              <span>Medicinal & Bioactive Properties</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {plant.medicinalUses.map((use, idx) => (
                <div key={idx} className="flex items-center space-x-2 bg-stone-950/60 p-2 rounded-lg border border-stone-800 text-xs text-stone-300">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>{use}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}