import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Copy, ExternalLink, Download, CheckCircle2, FlaskConical, Dna, Check } from 'lucide-react';
import { useState } from 'react';
import { mockPlants } from '../data';

export default function PlantProfile() {
  const { id } = useParams();
  const plant = mockPlants.find(p => p.id === id);
  const [copiedSmiles, setCopiedSmiles] = useState<string | null>(null);

  if (!plant) {
    return (
      <div className="text-center py-20 space-y-4">
        <p className="text-xl font-bold">Plant species not found!</p>
        <Link to="/" className="text-emerald-600 underline">Return to discovery view</Link>
      </div>
    );
  }

  const exportToCSV = () => {
    const headers = ["Plant Scientific Name", "Common Name", "Family", "Compound Name", "Location", "PubChem ID", "SMILES", "Activities"];
    const rows = plant.metabolites.map(m => [
      `"${plant.scientificName}"`,
      `"${plant.commonName}"`,
      `"${plant.family}"`,
      `"${m.name}"`,
      `"${m.location}"`,
      `"${m.pubchemId}"`,
      `"${m.smiles}"`,
      `"${m.activities.join('; ')}"`
    ]);
    const csvContent = [headers, ...rows].map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${plant.scientificName.replace(/\s+/g, '_')}_profile.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyToClipboard = (smiles: string, metaId: string) => {
    navigator.clipboard.writeText(smiles);
    setCopiedSmiles(metaId);
    setTimeout(() => setCopiedSmiles(null), 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Back Link */}
      <Link to="/" className="inline-flex items-center text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline">
        <ArrowLeft className="h-4 w-4 mr-1.5" /> Back to Discovery Index
      </Link>

      {/* Hero Header Card */}
      <div className="bg-white dark:bg-stone-900 rounded-3xl shadow-xl overflow-hidden border border-stone-200/80 dark:border-stone-800 flex flex-col md:flex-row">
        <div className="md:w-5/12 h-72 md:h-auto relative bg-emerald-950">
          <img src={plant.image} alt={plant.commonName} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
        </div>

        <div className="p-8 md:w-7/12 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold rounded-full border border-emerald-200 dark:border-emerald-700">
                Family: {plant.family}
              </span>
              <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 text-xs font-bold rounded-full border border-amber-200 dark:border-amber-700">
                {plant.metabolites.length} Phytochemicals Identified
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold italic text-stone-900 dark:text-stone-50 tracking-tight">
              {plant.scientificName}
            </h1>
            <h2 className="text-lg font-semibold text-stone-500 dark:text-stone-400 mt-1">
              Common Name: <span className="text-stone-700 dark:text-stone-200">{plant.commonName}</span>
            </h2>
          </div>

          <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed border-t border-stone-100 dark:border-stone-800 pt-4">
            {plant.description}
          </p>

          <div className="flex items-center space-x-3 pt-2">
            <button 
              onClick={exportToCSV}
              className="flex items-center space-x-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-emerald-600/20"
            >
              <Download className="h-4 w-4" />
              <span>Export Full CSV Profile</span>
            </button>
          </div>
        </div>
      </div>

      {/* Traditional Uses Section */}
      <div className="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200/80 dark:border-stone-800 shadow-sm">
        <h3 className="text-lg font-bold text-stone-800 dark:text-stone-100 mb-4 flex items-center space-x-2 border-b border-stone-100 dark:border-stone-800 pb-3">
          <FlaskConical className="h-5 w-5 text-emerald-600" />
          <span>Documented Traditional & Ethnobotanical Uses</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {plant.traditionalUses.map((use, idx) => (
            <div key={idx} className="flex items-start space-x-3 bg-slate-50 dark:bg-stone-950 p-3.5 rounded-xl border border-stone-200/60 dark:border-stone-800">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed font-medium">{use}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Phytochemical Grid with 2D Visualizer */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-stone-900 dark:text-stone-50 flex items-center space-x-2">
            <Dna className="h-5 w-5 text-emerald-600" />
            <span>Phytochemical & Metabolite Spectrum ({plant.metabolites.length})</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {plant.metabolites.map(meta => (
            <div key={meta.id} className="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200/80 dark:border-stone-800 shadow-sm flex flex-col justify-between space-y-4 hover:border-emerald-500/40 transition-colors">
              
              <div>
                <div className="flex justify-between items-start gap-2 mb-2">
                  <div>
                    <h4 className="text-lg font-bold text-stone-900 dark:text-stone-50">{meta.name}</h4>
                    <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                      Plant Tissue: <span className="font-semibold text-emerald-700 dark:text-emerald-400">{meta.location}</span>
                    </p>
                  </div>
                  {meta.pubchemId && (
                    <a 
                      href={`https://pubchem.ncbi.nlm.nih.gov/compound/${meta.pubchemId}`} 
                      target="_blank" 
                      rel="noreferrer"
                      className="px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-[11px] font-bold rounded-lg hover:bg-emerald-100 flex items-center space-x-1"
                    >
                      <span>PubChem: {meta.pubchemId}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>

                {/* 2D Chemical Structure Preview from PubChem */}
                {meta.pubchemId && (
                  <div className="my-4 p-3 bg-white rounded-xl border border-stone-200 flex items-center justify-center max-w-[200px] mx-auto shadow-inner">
                    <img 
                      src={`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${meta.pubchemId}/PNG`} 
                      alt={`${meta.name} structure`}
                      className="h-32 object-contain" 
                      onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                    />
                  </div>
                )}

                {/* Pharmacological Tags */}
                {meta.activities.length > 0 && (
                  <div className="mt-3">
                    <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1.5">Pharmacological Activities</p>
                    <div className="flex flex-wrap gap-1.5">
                      {meta.activities.map((act, idx) => (
                        <span key={idx} className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-[11px] font-semibold px-2.5 py-0.5 rounded-md">
                          {act}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* SMILES Box */}
              {meta.smiles && meta.smiles !== 'N/A' && (
                <div className="pt-3 border-t border-stone-100 dark:border-stone-800">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">SMILES Notation</span>
                  </div>
                  <div className="flex items-center bg-slate-100 dark:bg-stone-950 rounded-xl p-2 border border-stone-200/80 dark:border-stone-800">
                    <code className="text-xs text-stone-700 dark:text-stone-300 font-mono truncate flex-grow mr-2">
                      {meta.smiles}
                    </code>
                    <button 
                      onClick={() => copyToClipboard(meta.smiles, meta.id)}
                      className="p-1.5 bg-white dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700 hover:bg-emerald-50 text-stone-600 dark:text-stone-300 transition-colors shrink-0"
                      title="Copy SMILES to Clipboard"
                    >
                      {copiedSmiles === meta.id ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}