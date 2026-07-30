import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, QrCode, Download, Share2, Check, 
  BookOpen, Dna, Activity, ShieldCheck 
} from 'lucide-react';
import { mockPlants } from '../data';

export default function PlantProfile() {
  const { id } = useParams<{ id: string }>();
  const [copied, setCopied] = useState(false);

  // 1. DYNAMIC LOOKUP: Find the exact plant matching the URL id
  const plant = mockPlants.find((p) => String(p.id) === String(id)) || mockPlants[0];

  // Current live URL for this specific plant
  const livePlantUrl = window.location.href;

  // Generate QR Code URL pointing to this live page
  const qrCodeImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(livePlantUrl)}&color=052e16&bgcolor=ffffff`;

  const copyShareLink = () => {
    navigator.clipboard.writeText(livePlantUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadTagBadge = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 750;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Background Card
    ctx.fillStyle = '#0c0a09'; // stone-950
    ctx.fillRect(0, 0, 600, 750);

    // Green Border
    ctx.strokeStyle = '#059669'; // emerald-600
    ctx.lineWidth = 8;
    ctx.strokeRect(20, 20, 560, 710);

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
      ctx.fillText(`ID: ${plant.id}`, 300, 660);

      // Trigger Download
      const link = document.createElement('a');
      link.download = `${plant.id}_${plant.commonName.replace(/\s+/g, '_')}_QR_Tag.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    };
  };

  if (!plant) {
    return (
      <div className="py-20 text-center space-y-4">
        <p className="text-stone-400">Specimen not found in database.</p>
        <Link to="/" className="text-emerald-400 underline text-sm">Return to Catalog</Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      
      {/* Top Bar */}
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
            {plant.id}
          </span>
        </div>
      </div>

      {/* Main Specimen Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: Image + Dynamic QR Code Generator */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Plant Image Container */}
          <div className="relative group rounded-2xl overflow-hidden border border-stone-800 shadow-xl bg-stone-900">
            <img 
              src={plant.image || (plant as any).imageUrl} 
              alt={plant.commonName}
              className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
          </div>

          {/* DYNAMIC QR CODE & TAG GENERATOR */}
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
                <img 
                  src={qrCodeImageUrl} 
                  alt="QR Code" 
                  className="w-24 h-24 object-contain"
                />
              </div>

              <div className="space-y-2 text-left">
                <p className="text-xs text-stone-400 leading-relaxed">
                  Attach this QR tag to <strong className="text-stone-200">{plant.commonName}</strong> on campus.
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

        {/* RIGHT COLUMN: Clean Botanical & Phytochemical Details */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Header Metadata */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-300 font-semibold border border-emerald-800/80">
                Family: {plant.family}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {plant.commonName}
            </h1>

            <p className="text-lg italic font-serif text-emerald-400">
              {plant.scientificName}
            </p>
          </div>

          {/* Description */}
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

          {/* Phytochemical Compounds / Metabolites */}
          {plant.metabolites && plant.metabolites.length > 0 && (
            <div className="bg-stone-900/80 rounded-2xl p-5 border border-stone-800 space-y-3">
              <div className="flex items-center space-x-2 text-stone-300 font-semibold text-xs uppercase tracking-wider">
                <Dna className="h-4 w-4 text-emerald-400" />
                <span>Phytochemical Compounds ({plant.metabolites.length})</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {plant.metabolites.map((m: any, idx: number) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-stone-950 border border-emerald-900/60 text-emerald-300 text-xs font-mono font-medium"
                  >
                    {typeof m === 'string' ? m : m.name}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}