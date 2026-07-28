import { useState } from 'react';
import { ExternalLink, Copy, Check } from 'lucide-react';
import type { Metabolite } from '../models';

export default function MetaboliteCard({ metabolite }: { metabolite: Metabolite }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(metabolite.smiles);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="bg-white rounded-lg border border-emerald-100 shadow-sm hover:border-emerald-300 transition-colors p-3.5 text-xs flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start gap-2 mb-2">
          <div>
            <h4 className="font-bold text-stone-900 text-sm">{metabolite.name}</h4>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="bg-emerald-50 text-emerald-800 font-medium px-2 py-0.5 rounded text-[11px] border border-emerald-100">
                {metabolite.category}
              </span>
              <span className="text-stone-500 text-[11px]">• {metabolite.location}</span>
            </div>
          </div>
          <a 
            href={`https://pubchem.ncbi.nlm.nih.gov/compound/${metabolite.pubchemId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 hover:text-emerald-900 bg-emerald-50/80 hover:bg-emerald-100/80 border border-emerald-200/60 px-2 py-1 rounded text-[11px] font-medium inline-flex items-center gap-1 flex-shrink-0 transition-colors"
          >
            PubChem #{metabolite.pubchemId}
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <div className="mb-3">
          <p className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider mb-1">Biological Activities</p>
          <div className="flex flex-wrap gap-1">
            {metabolite.activities.map((act, idx) => (
              <span key={idx} className="bg-amber-50 text-amber-800 border border-amber-200/60 px-1.5 py-0.5 rounded text-[10px]">
                {act}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-stone-50 border border-stone-200 rounded p-2 flex items-center justify-between gap-2 mt-1">
        <div className="overflow-hidden">
          <p className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider">SMILES Notation</p>
          <code className="text-[11px] text-stone-700 break-all font-mono leading-tight block truncate max-w-[280px]">
            {metabolite.smiles}
          </code>
        </div>
        <button 
          onClick={handleCopy}
          className="p-1 text-stone-500 hover:text-emerald-700 hover:bg-emerald-50 rounded transition-colors flex-shrink-0"
          title="Copy SMILES string"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}