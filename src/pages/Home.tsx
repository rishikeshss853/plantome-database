import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Leaf, ChevronRight, Dna, Database } from 'lucide-react';
import { mockPlants } from '../data';
import PlantImage from '../components/PlantImage';

export default function Home() {
  const [search, setSearch] = useState('');
  const [selectedFamily, setSelectedFamily] = useState<string>('ALL');
  const [visibleCount, setVisibleCount] = useState(20);

  const topFamilies = useMemo(() => {
    const counts: Record<string, number> = {};
    mockPlants.forEach(p => {
      if (p.family) counts[p.family] = (counts[p.family] || 0) + 1;
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([family]) => family);
  }, []);

  const filteredPlants = useMemo(() => {
    return mockPlants.filter(p => {
      const matchesSearch = 
        p.commonName.toLowerCase().includes(search.toLowerCase()) ||
        p.scientificName.toLowerCase().includes(search.toLowerCase()) ||
        p.family.toLowerCase().includes(search.toLowerCase()) ||
        p.metabolites.some(m => m.name.toLowerCase().includes(search.toLowerCase()));

      const matchesFamily = selectedFamily === 'ALL' || p.family === selectedFamily;

      return matchesSearch && matchesFamily;
    });
  }, [search, selectedFamily]);

  const totalMetabolites = useMemo(() => {
    return mockPlants.reduce((acc, p) => acc + p.metabolites.length, 0);
  }, []);

  return (
    <div className="space-y-6">
      
      {/* Premium Dark Hero Header */}
      <section className="bg-gradient-to-r from-emerald-950 via-teal-950 to-stone-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-800/40 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
              <Leaf className="h-3.5 w-3.5" />
              <span>HITS Department of Biotechnology</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Campus Flora Phytochemical Portal
            </h1>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              Explore {mockPlants.length} cataloged campus plant species along with {totalMetabolites} bioactive secondary metabolites, SMILES structure keys, and PubChem IDs.
            </p>
          </div>

          {/* Quick Metrics Badge */}
          <div className="flex items-center space-x-4 bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center shrink-0">
            <div>
              <p className="text-2xl font-black text-emerald-400">{mockPlants.length}</p>
              <p className="text-[10px] text-stone-300 uppercase font-bold">Species</p>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div>
              <p className="text-2xl font-black text-amber-300">{totalMetabolites}</p>
              <p className="text-[10px] text-stone-300 uppercase font-bold">Metabolites</p>
            </div>
          </div>

        </div>

        {/* Integrated Search & Filter Row */}
        <div className="mt-6 pt-5 border-t border-emerald-800/50 flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search plant name, family, or compound (e.g., Quercetin)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-stone-900/90 border border-emerald-700/50 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 placeholder:text-stone-400"
            />
          </div>

          {/* Quick Family Filter Buttons */}
          <div className="flex items-center space-x-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none text-xs">
            <Filter className="h-3.5 w-3.5 text-stone-400 shrink-0 hidden sm:block" />
            <button
              onClick={() => setSelectedFamily('ALL')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                selectedFamily === 'ALL' ? 'bg-emerald-500 text-stone-950 shadow-sm' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
            >
              All
            </button>
            {topFamilies.map(fam => (
              <button
                key={fam}
                onClick={() => setSelectedFamily(fam)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  selectedFamily === fam ? 'bg-emerald-500 text-stone-950 shadow-sm' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                {fam}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid of Specimen Cards */}
      <section>
        <div className="flex items-center justify-between mb-4 px-1">
          <h2 className="text-sm font-bold text-stone-800 dark:text-stone-200 flex items-center space-x-1.5">
            <Database className="h-4 w-4 text-emerald-600" />
            <span>Specimen Catalog ({filteredPlants.length} Species)</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredPlants.slice(0, visibleCount).map(plant => (
            <div 
              key={plant.id} 
              className="group bg-white dark:bg-stone-900 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col border border-stone-200/80 dark:border-stone-800 relative"
            >
              {/* Plant Image Container */}
              <div className="relative h-44 w-full">
                <PlantImage src={plant.image} alt={plant.commonName} className="h-full w-full" />
                <span className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/80 backdrop-blur-md text-emerald-300 text-[10px] font-bold rounded-md border border-emerald-500/30">
                  {plant.family}
                </span>
                <span className="absolute top-2 right-2 px-2 py-0.5 bg-black/70 backdrop-blur-md text-amber-300 text-[10px] font-extrabold rounded-full flex items-center">
                  <Dna className="h-3 w-3 inline mr-1" />
                  {plant.metabolites.length}
                </span>
              </div>

              {/* Card Details */}
              <div className="p-4 flex-grow flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="italic text-sm font-bold text-stone-900 dark:text-stone-100 group-hover:text-emerald-600 transition-colors leading-tight line-clamp-1">
                    {plant.scientificName}
                  </h3>
                  <p className="text-stone-500 dark:text-stone-400 text-[11px] font-medium mt-0.5 line-clamp-1">
                    {plant.commonName}
                  </p>
                </div>

                <Link 
                  to={`/plant/${plant.id}`}
                  className="w-full flex items-center justify-center space-x-1.5 bg-slate-100 dark:bg-stone-800 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 text-stone-700 dark:text-stone-200 py-2 rounded-xl text-xs font-bold transition-all shadow-xs"
                >
                  <span>Explore Specimen</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredPlants.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-stone-900 rounded-2xl border border-dashed border-stone-300 dark:border-stone-800">
            <Leaf className="h-10 w-10 text-stone-300 mx-auto mb-2" />
            <p className="text-stone-500 text-xs font-semibold">No species found matching your query.</p>
          </div>
        )}

        {visibleCount < filteredPlants.length && (
          <div className="text-center mt-8">
            <button 
              onClick={() => setVisibleCount(prev => prev + 20)}
              className="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl transition-all font-bold text-xs shadow-md shadow-emerald-700/20"
            >
              Load More Species ({filteredPlants.length - visibleCount} Remaining)
            </button>
          </div>
        )}
      </section>

    </div>
  );
}