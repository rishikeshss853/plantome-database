import { useState } from 'react';
import { QrCode, Download, Search, Printer, ExternalLink, Leaf, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample interface for your plant species
interface PlantSpecies {
  id: string;
  commonName: string;
  scientificName: string;
  family: string;
  campusZone?: string;
}

// Example species list (replace or import your actual 76 species dataset here)
const MOCK_SPECIES: PlantSpecies[] = Array.from({ length: 76 }, (_, i) => ({
  id: `PLANT-${(i + 1).toString().padStart(3, '0')}`,
  commonName: i === 0 ? 'Neem Tree' : i === 1 ? 'Sacred Fig' : i === 2 ? 'Hibiscus' : `Campus Species #${i + 1}`,
  scientificName: i === 0 ? 'Azadirachta indica' : i === 1 ? 'Ficus religiosa' : i === 2 ? 'Rosa-sinensis' : `Botanical Name ${i + 1}`,
  family: i % 3 === 0 ? 'Meliaceae' : i % 3 === 1 ? 'Moraceae' : 'Malvaceae',
  campusZone: `Zone ${String.fromCharCode(65 + (i % 5))}`,
}));

export default function QRCodes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFamily, setSelectedFamily] = useState('ALL');

  // Filter species based on search query and family
  const filteredSpecies = MOCK_SPECIES.filter((plant) => {
    const matchesSearch =
      plant.commonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plant.scientificName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plant.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFamily = selectedFamily === 'ALL' || plant.family === selectedFamily;
    return matchesSearch && matchesFamily;
  });

  const families = ['ALL', ...Array.from(new Set(MOCK_SPECIES.map((p) => p.family)))];

  // Helper function to generate destination URL for each plant
  const getPlantUrl = (plantId: string) => {
    const baseUrl = window.location.origin;
    return `${baseUrl}/plant/${plantId}`;
  };

  // Helper to generate QR Image URL using free QR server API
  const getQrImageUrl = (targetUrl: string, size = 300) => {
    return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(targetUrl)}&color=052e16&bgcolor=ffffff`;
  };

  // Canvas function to download a formatted, print-ready tag badge
  const downloadTagBadge = (plant: PlantSpecies) => {
    const targetUrl = getPlantUrl(plant.id);
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    // Background Badge Card
    ctx.fillStyle = '#0c0a09'; // stone-950
    ctx.fillRect(0, 0, 600, 800);

    // Inner Green Border
    ctx.strokeStyle = '#059669'; // emerald-600
    ctx.lineWidth = 8;
    ctx.strokeRect(20, 20, 560, 760);

    // Header Title
    ctx.fillStyle = '#34d399'; // emerald-400
    ctx.font = 'bold 28px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('PLANTOME DB', 300, 80);

    ctx.fillStyle = '#a8a29e'; // stone-400
    ctx.font = '16px sans-serif';
    ctx.fillText('HITS — Dept. of Biotechnology', 300, 110);

    // Load and draw QR code image onto canvas
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = getQrImageUrl(targetUrl, 400);

    img.onload = () => {
      // Draw white background box behind QR
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(120, 140, 360, 360);

      // Draw QR image
      ctx.drawImage(img, 130, 150, 340, 340);

      // Common Name
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 32px sans-serif';
      ctx.fillText(plant.commonName, 300, 550);

      // Scientific Name (Italic)
      ctx.fillStyle = '#6ee7b7'; // emerald-300
      ctx.font = 'italic 22px sans-serif';
      ctx.fillText(plant.scientificName, 300, 590);

      // Plant Tag / ID Badge
      ctx.fillStyle = '#1c1917'; // stone-900
      ctx.fillRect(150, 630, 300, 45);
      ctx.strokeStyle = '#047857';
      ctx.lineWidth = 2;
      ctx.strokeRect(150, 630, 300, 45);

      ctx.fillStyle = '#f5f5f4';
      ctx.font = 'bold 18px monospace';
      ctx.fillText(`ID: ${plant.id}`, 300, 660);

      // Footer call to action
      ctx.fillStyle = '#78716c';
      ctx.font = '14px sans-serif';
      ctx.fillText('Scan to view full phytochemical & botanical profile', 300, 720);

      // Trigger PNG Download
      const link = document.createElement('a');
      link.download = `${plant.id}_${plant.commonName.replace(/\s+/g, '_')}_QR_Tag.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    };
  };

  return (
    <div className="w-full space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-stone-900 to-emerald-950 p-6 sm:p-8 rounded-2xl border border-emerald-800/40 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-emerald-400 font-semibold text-sm">
              <QrCode className="h-5 w-5" />
              <span>Physical Campus QR Integration</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              Campus Species QR & AR Generator
            </h1>
            <p className="text-stone-400 text-sm max-w-2xl">
              Generate, preview, and download print-ready QR codes for all 76 campus species. Attach these physical tags to trees/plants on campus—scanning them will instantly direct users to the plant's profile.
            </p>
          </div>

          <button
            onClick={() => window.print()}
            className="flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-5 py-3 rounded-xl transition shadow-lg shadow-emerald-900/30 shrink-0"
          >
            <Printer className="h-5 w-5" />
            <span>Print All QR Tags</span>
          </button>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-4 bg-stone-900 p-4 rounded-xl border border-stone-800">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
          <input
            type="text"
            placeholder="Search by plant name, scientific name, or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-stone-950 border border-stone-800 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500 text-sm"
          />
        </div>

        <select
          value={selectedFamily}
          onChange={(e) => setSelectedFamily(e.target.value)}
          className="w-full sm:w-48 px-3 py-2.5 bg-stone-950 border border-stone-800 rounded-lg text-stone-300 text-sm focus:outline-none focus:border-emerald-500"
        >
          {families.map((fam) => (
            <option key={fam} value={fam}>
              {fam === 'ALL' ? 'All Families' : fam}
            </option>
          ))}
        </select>
      </div>

      {/* Species Count Indicator */}
      <div className="flex items-center justify-between text-xs text-stone-400 px-1">
        <span>Showing {filteredSpecies.length} of {MOCK_SPECIES.length} plant species</span>
        <span>Click "Download Tag Badge" for print-ready high-res PNG</span>
      </div>

      {/* QR Code Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredSpecies.map((plant) => {
          const targetUrl = getPlantUrl(plant.id);
          const qrImageUrl = getQrImageUrl(targetUrl, 250);

          return (
            <div
              key={plant.id}
              className="bg-stone-900 rounded-2xl p-5 border border-stone-800 hover:border-emerald-700/60 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-stone-800 text-emerald-400 border border-stone-700">
                    {plant.id}
                  </span>
                  <span className="text-[10px] text-stone-400 px-2 py-0.5 rounded bg-stone-800/60">
                    {plant.family}
                  </span>
                </div>

                {/* Plant Name */}
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {plant.commonName}
                </h3>
                <p className="text-xs italic text-stone-400 mb-4">{plant.scientificName}</p>

                {/* QR Code Display Container */}
                <div className="bg-white p-3 rounded-xl flex items-center justify-center shadow-inner my-2 border border-stone-700">
                  <img
                    src={qrImageUrl}
                    alt={`QR Code for ${plant.commonName}`}
                    className="w-44 h-44 object-contain"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2 border-t border-stone-800/80">
                <button
                  onClick={() => downloadTagBadge(plant)}
                  className="w-full flex items-center justify-center space-x-2 bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-800/60 py-2 rounded-xl text-xs font-medium transition"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Print Badge Tag</span>
                </button>

                <Link
                  to={`/plant/${plant.id}`}
                  className="w-full flex items-center justify-center space-x-2 bg-stone-800 hover:bg-stone-700 text-stone-300 py-2 rounded-xl text-xs font-medium transition"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>Test Direct Plant Link</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}