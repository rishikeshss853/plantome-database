import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Sparkles, Leaf, ChevronRight, Dna, Compass, ArrowUpRight } from 'lucide-react';
import { mockPlants } from '../data';
import PlantImage from '../components/PlantImage';

export default function Home() {
  const [search, setSearch] = useState('');
  const [selectedFamily, setSelectedFamily] = useState<string>('ALL');
  const [visibleCount, setVisibleCount] = useState(16);

  const topFamilies = useMemo(() => {
    const counts: Record<string, number> = {};
    mockPlants.forEach(p => {
      if (p.family) counts[p.family] = (counts[p.family] || 0) + 1;
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 7)
      .map(([family]) => family);
  }, []);

  const featuredPlant = useMemo(() => {
    return mockPlants.find(p => p.metabolites.length > 3) || mockPlants[0];
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
    <div className="space-y-10 pb-16">
      
      {/* Curved Modern Hero Header */}
      <section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-emerald-950 via-stone-900 to-teal-950 text-white p-8 sm:p-12 shadow-2xl border border-emerald-800/30">
        
        {/* Soft Ambient Background Glow Blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/20 backdrop-blur-md text-emerald-300 text-xs font-semibold">
            <Leaf className="h-3.5 w-3.5 text-emerald-400" />
            <span>HITS Department of Biotechnology</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Campus Flora <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-200 bg-clip-text text-transparent">
              Phytochemical Portal
            </span>
          </h1>

          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-light">
            An open research repository cataloging {mockPlants.length} plant species and {totalMetabolites} isolated bioactive compounds across the HITS campus.
          </p>
        </div>

        {/* Floating Curved Search Capsule */}
        <div className="relative z-10 mt-8">
          <div className="p-2 rounded-2xl bg-stone-900/80 backdrop-blur-xl border border-white/10 shadow-xl flex flex-col md:flex-row gap-2 items-center">
            
            <div className="relative w-full flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search by botanical name, family, or metabolite (e.g. Quercetin)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-transparent text-xs text-white focus:outline-none placeholder:text-stone-400"
              />
            </div>

            {/* Pill Family Filters */}
            <div className="flex items-center space-x-1 overflow-x-auto w-full md:w-auto px-2 pb-1 md:pb-0 scrollbar-none shrink-0">
              <button
                onClick={() => setSelectedFamily('ALL')}
                className={`px-3.5 py-1.5 rounded-full text-[11px] font-bold transition-all whitespace-nowrap ${
                  selectedFamily === 'ALL' ? 'bg-emerald-400 text-stone-950 shadow-lg shadow-emerald-400/20' : 'bg-white/5 text-stone-300 hover:bg-white/10'
                }`}
              >
                All
              </button>
              {topFamilies.map(fam => (
                <button
                  key={fam}
                  onClick={() => setSelectedFamily(fam)}
                  className={`px-3.5 py-1.5 rounded-full text-[11px] font-bold transition-all whitespace-nowrap ${
                    selectedFamily === fam ? 'bg-emerald-400 text-stone-950 shadow-lg shadow-emerald-400/20' : 'bg-white/5 text-stone-300 hover:bg-white/10'
                  }`}
                >
                  {fam}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Featured Specimen Spotlight Banner (Breaks Boxiness) */}
      {featuredPlant && !search && selectedFamily === 'ALL' && (
        <section className="relative overflow-hidden rounded-[2rem] bg-stone-900 text-white p-6 sm:p-8 border border-stone-800 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            
            <div className="w-full lg:w-1/2 h-64 sm:h-72 rounded-2xl overflow-hidden relative group">
              <PlantImage src={featuredPlant.image} alt={featuredPlant.commonName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute top-3 left-3 px-3 py-1 bg-amber-400 text-stone-950 text-[10px] font-black uppercase rounded-full tracking-wider flex items-center space-x-1">
                <Sparkles className="h-3 w-3 inline mr-1" />
                Featured Specimen
              </span>
            </div>

            <div className="w-full lg:w-1/2 space-y-4">
              <div>
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">{featuredPlant.family}</span>
                <h2 className="text-2xl sm:text-3xl font-serif italic text-white mt-1">
                  {featuredPlant.scientificName}
                </h2>
                <p className="text-stone-400 text-xs font-medium mt-1">{featuredPlant.commonName}</p>
              </div>

              <p className="text-stone-300 text-xs leading-relaxed line-clamp-3">
                {featuredPlant.description}
              </p>

              <div className="flex items-center space-x-3 pt-2">
                <div className="px-3 py-1.5 rounded-xl bg-stone-800 border border-stone-700 text-xs font-bold text-amber-300 flex items-center space-x-1.5">
                  <Dna className="h-4 w-4 text-amber-400" />
                  <span>{featuredPlant.metabolites.length} Metabolites Logged</span>
                </div>

                <Link
                  to={`/plant/${featuredPlant.id}`}
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-xs transition-all flex items-center space-x-1 shadow-lg shadow-emerald-500/20"
                >
                  <span>Explore Specimen</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* Modern Specimen Collection Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center space-x-2">
            <Compass className="h-5 w-5 text-emerald-500" />
            <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">
              Database Catalog ({filteredPlants.length} Species)
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPlants.slice(0, visibleCount).map(plant => (
            <div 
              key={plant.id} 
              className="group bg-white dark:bg-stone-900 rounded-[1.75rem] shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col border border-stone-200/80 dark:border-stone-800/80"
            >
              {/* Curved Top Image Container */}
              <div className="relative h-52 w-full overflow-hidden">
                <PlantImage src={plant.image} alt={plant.commonName} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                
                {/* Floating Glassmorphic Pill Badges */}
                <span className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-md text-emerald-300 text-[10px] font-bold rounded-full border border-emerald-500/20">
                  {plant.family}
                </span>

                <span className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/70 backdrop-blur-md text-amber-300 text-[10px] font-black rounded-full flex items-center border border-amber-400/20">
                  <Dna className="h-3 w-3 mr-1" />
                  {plant.metabolites.length}
                </span>
              </div>

              {/* Smooth Card Details */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="italic text-base font-bold text-stone-900 dark:text-stone-100 group-hover:text-emerald-500 transition-colors line-clamp-1">
                    {plant.scientificName}
                  </h3>
                  <p className="text-stone-500 dark:text-stone-400 text-xs font-medium mt-0.5 line-clamp-1">
                    {plant.commonName}
                  </p>
                </div>

                <Link 
                  to={`/plant/${plant.id}`}
                  className="w-full flex items-center justify-between bg-stone-100 dark:bg-stone-800 hover:bg-emerald-500 hover:text-stone-950 text-stone-700 dark:text-stone-200 px-4 py-2.5 rounded-xl text-xs font-bold transition-all"
                >
                  <span>View Details</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredPlants.length && (
          <div className="text-center pt-8">
            <button 
              onClick={() => setVisibleCount(prev => prev + 16)}
              className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-xs rounded-full transition-all shadow-xl shadow-emerald-500/20"
            >
              Load More Species ({filteredPlants.length - visibleCount} Remaining)
            </button>
          </div>
        )}
      </section>

    </div>
  );
}