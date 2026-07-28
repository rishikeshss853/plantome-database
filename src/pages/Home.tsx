import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Leaf, Dna, ArrowUpRight, Sparkles, SlidersHorizontal, Eye } from 'lucide-react';
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
      .slice(0, 8)
      .map(([family]) => family);
  }, []);

  const featuredPlant = useMemo(() => {
    return mockPlants.find(p => p.metabolites.length >= 3) || mockPlants[0];
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
    <div className="space-y-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6">
      
      {/* Organic Curved Hero Header with Ambient Radial Glows */}
      <section className="relative overflow-hidden rounded-[3rem] bg-stone-900 text-stone-100 p-8 sm:p-14 shadow-2xl border border-emerald-900/40">
        
        {/* Soft Background Radial Light Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-600/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/20 backdrop-blur-md text-emerald-300 text-xs font-semibold tracking-wide">
            <Leaf className="h-4 w-4 text-emerald-400" />
            <span>HITS Department of Biotechnology</span>
          </div>

          <h1 className="text-3xl sm:text-6xl font-black tracking-tight leading-[1.15]">
            Campus Flora <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-200 to-amber-200 bg-clip-text text-transparent italic font-serif">
              Phytochemical Archive
            </span>
          </h1>

          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-normal max-w-2xl">
            Explore <span className="text-emerald-300 font-bold">{mockPlants.length} cataloged campus species</span> along with <span className="text-amber-300 font-bold">{totalMetabolites} bioactive compounds</span>, molecular SMILES keys, and PubChem cross-references.
          </p>
        </div>

        {/* Floating Capsule Search Bar */}
        <div className="relative z-10 mt-10">
          <div className="p-2.5 rounded-full bg-stone-950/80 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col md:flex-row gap-2 items-center">
            
            <div className="relative w-full flex-grow pl-4">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-stone-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search species, family, or phytochemical (e.g., Quercetin)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-8 pr-4 py-3 bg-transparent text-xs sm:text-sm text-white focus:outline-none placeholder:text-stone-400"
              />
            </div>

            {/* Pill Filters */}
            <div className="flex items-center space-x-1.5 overflow-x-auto w-full md:w-auto px-2 pb-1 md:pb-0 scrollbar-none shrink-0">
              <button
                onClick={() => setSelectedFamily('ALL')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  selectedFamily === 'ALL' ? 'bg-emerald-400 text-stone-950 shadow-lg shadow-emerald-400/25 scale-105' : 'bg-white/5 text-stone-300 hover:bg-white/10'
                }`}
              >
                All Species
              </button>
              {topFamilies.map(fam => (
                <button
                  key={fam}
                  onClick={() => setSelectedFamily(fam)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                    selectedFamily === fam ? 'bg-emerald-400 text-stone-950 shadow-lg shadow-emerald-400/25 scale-105' : 'bg-white/5 text-stone-300 hover:bg-white/10'
                  }`}
                >
                  {fam}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Featured Botanical Specimen Banner */}
      {featuredPlant && !search && selectedFamily === 'ALL' && (
        <section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-stone-900 to-stone-950 text-white p-6 sm:p-10 border border-stone-800/80 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            
            {/* Arched Oval Framing */}
            <div className="w-full lg:w-1/2 h-72 sm:h-80 rounded-[2.5rem] overflow-hidden relative group shrink-0 border border-emerald-500/20 shadow-xl">
              <PlantImage src={featuredPlant.image} alt={featuredPlant.commonName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 px-3.5 py-1.5 bg-amber-400 text-stone-950 text-[10px] font-black uppercase rounded-full tracking-wider flex items-center shadow-lg">
                <Sparkles className="h-3 w-3 inline mr-1" />
                Featured Specimen
              </span>
            </div>

            <div className="w-full lg:w-1/2 space-y-4">
              <div>
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">{featuredPlant.family}</span>
                <h2 className="text-3xl sm:text-4xl font-serif italic text-white mt-1">
                  {featuredPlant.scientificName}
                </h2>
                <p className="text-stone-400 text-sm font-medium mt-1">{featuredPlant.commonName}</p>
              </div>

              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed line-clamp-3 font-light">
                {featuredPlant.description}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="px-4 py-2 rounded-2xl bg-stone-800/90 border border-stone-700/60 text-xs font-bold text-amber-300 flex items-center space-x-2">
                  <Dna className="h-4 w-4 text-amber-400" />
                  <span>{featuredPlant.metabolites.length} Bioactive Metabolites</span>
                </div>

                <Link
                  to={`/plant/${featuredPlant.id}`}
                  className="px-6 py-2.5 rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-stone-950 font-bold text-xs transition-all flex items-center space-x-1.5 shadow-xl shadow-emerald-400/20"
                >
                  <span>Analyze Specimen</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* Specimen Catalog (Arched Organic Cards) */}
      <section className="space-y-6">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center space-x-2">
            <SlidersHorizontal className="h-4 w-4 text-emerald-500" />
            <h2 className="text-base font-bold text-stone-800 dark:text-stone-200 tracking-tight">
              Catalog Collection ({filteredPlants.length} Species)
            </h2>
          </div>
        </div>

        {/* Soft Organic Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPlants.slice(0, visibleCount).map(plant => (
            <div 
              key={plant.id} 
              className="group bg-white dark:bg-stone-900 rounded-[2.25rem] p-3 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-stone-100 dark:border-stone-800/80 flex flex-col justify-between"
            >
              {/* Soft Curved Top Frame */}
              <div className="relative h-56 w-full rounded-[1.75rem] overflow-hidden">
                <PlantImage src={plant.image} alt={plant.commonName} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                
                {/* Floating Glass Badges */}
                <span className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-md text-emerald-300 text-[10px] font-bold rounded-full border border-emerald-500/20">
                  {plant.family}
                </span>

                <span className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/70 backdrop-blur-md text-amber-300 text-[10px] font-extrabold rounded-full flex items-center border border-amber-400/20">
                  <Dna className="h-3 w-3 mr-1" />
                  {plant.metabolites.length}
                </span>
              </div>

              {/* Plant Info */}
              <div className="p-4 space-y-3 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif italic text-base font-bold text-stone-900 dark:text-stone-100 group-hover:text-emerald-500 transition-colors line-clamp-1">
                    {plant.scientificName}
                  </h3>
                  <p className="text-stone-500 dark:text-stone-400 text-xs font-medium mt-0.5 line-clamp-1">
                    {plant.commonName}
                  </p>
                </div>

                <Link 
                  to={`/plant/${plant.id}`}
                  className="w-full flex items-center justify-between bg-stone-100 dark:bg-stone-800/80 hover:bg-emerald-400 hover:text-stone-950 text-stone-700 dark:text-stone-200 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all"
                >
                  <span>Explore Specimen</span>
                  <Eye className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredPlants.length && (
          <div className="text-center pt-10">
            <button 
              onClick={() => setVisibleCount(prev => prev + 16)}
              className="px-8 py-3.5 bg-emerald-400 hover:bg-emerald-300 text-stone-950 font-bold text-xs rounded-full transition-all shadow-2xl shadow-emerald-400/25 scale-105"
            >
              Load More Species ({filteredPlants.length - visibleCount} Remaining)
            </button>
          </div>
        )}
      </section>

    </div>
  );
}