import { useState, useMemo } from 'react';
import { Search, ExternalLink, Dna, Filter } from 'lucide-react';
import { mockPlants } from '../data';
import { Link } from 'react-router-dom';

export default function Compounds() {
  const [query, setQuery] = useState('');
  const [selectedActivity, setSelectedActivity] = useState('ALL');

  // Flatten all metabolites across all 75 plants
  const allCompounds = useMemo(() => {
    return mockPlants.flatMap(p => 
      p.metabolites.map(m => ({
        ...m,
        plantName: p.scientificName,
        plantCommon: p.commonName,
        plantId: p.id
      }))
    );
  }, []);

  // Top Pharmacological Activities for Filter
  const topActivities = useMemo(() => {
    const counts: Record<string, number> = {};
    allCompounds.forEach(c => {
      c.activities.forEach(a => {
        counts[a] = (counts[a] || 0) + 1;
      });
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([act]) => act);
  }, [allCompounds]);

  const filtered = useMemo(() => {
    return allCompounds.filter(c => {
      const matchesSearch = 
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.location.toLowerCase().includes(query.toLowerCase()) ||
        c.plantName.toLowerCase().includes(query.toLowerCase());

      const matchesActivity = 
        selectedActivity === 'ALL' || 
        c.activities.some(a => a.toLowerCase() === selectedActivity.toLowerCase());

      return matchesSearch && matchesActivity;
    });
  }, [query, selectedActivity, allCompounds]);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white p-8 rounded-3xl shadow-xl">
        <h1 className="text-3xl font-extrabold flex items-center space-x-3">
          <Dna className="h-8 w-8 text-teal-300" />
          <span>Phytochemical Library</span>
        </h1>
        <p className="text-stone-300 text-sm mt-2 max-w-xl">
          Search bioactive secondary metabolites cataloged across campus species, indexed by pharmacological action and organ location.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200/80 dark:border-stone-800 shadow-sm space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search compound name (e.g., Quercetin, Rutin) or plant..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-stone-200 dark:border-stone-700 bg-slate-50 dark:bg-stone-950 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
          />
        </div>

        {/* Activity Quick Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1">
          <Filter className="h-4 w-4 text-stone-400 shrink-0" />
          <button
            onClick={() => setSelectedActivity('ALL')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              selectedActivity === 'ALL' ? 'bg-emerald-600 text-white' : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300'
            }`}
          >
            All Activities
          </button>
          {topActivities.map(act => (
            <button
              key={act}
              onClick={() => setSelectedActivity(act)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                selectedActivity === act ? 'bg-emerald-600 text-white' : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300'
              }`}
            >
              {act}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Metabolite Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.slice(0, 36).map((c, idx) => (
          <div key={`${c.id}-${idx}`} className="bg-white dark:bg-stone-900 p-5 rounded-2xl border border-stone-200/80 dark:border-stone-800 shadow-sm flex flex-col justify-between space-y-4">
            
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-stone-900 dark:text-stone-50 text-base">{c.name}</h3>
                {c.pubchemId && (
                  <a 
                    href={`https://pubchem.ncbi.nlm.nih.gov/compound/${c.pubchemId}`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-emerald-600 dark:text-emerald-400 text-xs font-semibold flex items-center hover:underline"
                  >
                    PubChem <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                )}
              </div>

              <p className="text-xs text-stone-500 dark:text-stone-400">
                Organ: <span className="font-semibold text-stone-700 dark:text-stone-300">{c.location}</span>
              </p>

              <div className="mt-3 pt-3 border-t border-stone-100 dark:border-stone-800">
                <Link to={`/plant/${c.plantId}`} className="text-xs text-emerald-700 dark:text-emerald-400 font-bold italic hover:underline">
                  Source: {c.plantName} ({c.plantCommon})
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap gap-1">
              {c.activities.map((act, aIdx) => (
                <span key={aIdx} className="text-[10px] bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 px-2 py-0.5 rounded-md border border-amber-200 dark:border-amber-800 font-semibold">
                  {act}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}