import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Leaf, Dna, ArrowUpRight, Sparkles, SlidersHorizontal, Eye } from 'lucide-react';
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
      .slice(0, 10)
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

  return (
    <div className="w-full space-y-10 pb-20">
      
      {/* Full-Width Curved Hero Header */}
      <section className="relative w-full overflow-hidden rounded-[2.5rem] bg-stone-900/90 text-stone-100 p-6 sm:p-12 border border-emerald-900/30 shadow-2xl">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 text-xs font-semibold">
            <Leaf className="h-4 w-4 text-emerald-400" />
            <span>HITS Department of Biotechnology</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Campus Flora <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-200 to-amber-200 bg-clip-text text-transparent italic font-serif">
              Phytochemical Archive
            </span>
          </h1>
        </div>

        {/* Search & Filters */}
        <div className="relative z-10 mt-8">
          <div className="p-2 sm:p-3 rounded-full bg-stone-950/90 border border-stone-800 shadow-2xl flex flex-col md:flex-row gap-3 items-center">
            <div className="relative w-full flex-grow pl-4">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-stone-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search species, family, or phytochemical compound..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-8 pr-4 py-3 bg-transparent text-xs sm:text-sm text-white focus:outline-none placeholder:text-stone-400"
              />
            </div>

            <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto px-2 shrink-0">
              <button
                onClick={() => setSelectedFamily('ALL')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  selectedFamily === 'ALL' ? 'bg-emerald-400 text-stone-950' : 'bg-white/5 text-stone-300 hover:bg-white/10'
                }`}
              >
                All Species
              </button>
              {topFamilies.map(fam => (
                <button
                  key={fam}
                  onClick={() => setSelectedFamily(fam)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                    selectedFamily === fam ? 'bg-emerald-400 text-stone-950' : 'bg-white/5 text-stone-300 hover:bg-white/10'
                  }`}
                >
                  {fam}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Grid with Proportional Cards */}
      <section className="space-y-6">
        <div className="flex items-center space-x-2 px-2">
          <SlidersHorizontal className="h-4 w-4 text-emerald-500" />
          <h2 className="text-base font-bold text-stone-200 tracking-tight">
            Catalog Collection ({filteredPlants.length} Species)
          </h2>
        </div>

        {/* Responsive, non-squished card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredPlants.slice(0, visibleCount).map(plant => (
            <div 
              key={plant.id} 
              className="group bg-stone-900 rounded-[2rem] p-3.5 border border-stone-800/80 hover:border-emerald-500/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Natural Aspect Image Container */}
              <div className="relative h-48 w-full rounded-[1.5rem] overflow-hidden bg-stone-950">
                <PlantImage src={plant.image} alt={plant.commonName} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                
                <span className="absolute top-3 left-3 px-3 py-1 bg-stone-950/80 backdrop-blur-md text-emerald-400 text-[10px] font-bold rounded-full border border-emerald-500/20">
                  {plant.family}
                </span>

                <span className="absolute bottom-3 right-3 px-2.5 py-1 bg-stone-950/80 backdrop-blur-md text-amber-300 text-[10px] font-extrabold rounded-full flex items-center border border-amber-400/20">
                  <Dna className="h-3 w-3 mr-1 text-amber-400" />
                  {plant.metabolites.length}
                </span>
              </div>

              {/* Text content with clean spacing */}
              <div className="pt-4 pb-1 px-1 space-y-3 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif italic text-base font-bold text-stone-100 group-hover:text-emerald-400 transition-colors">
                    {plant.scientificName}
                  </h3>
                  <p className="text-stone-400 text-xs font-medium mt-1">
                    {plant.commonName}
                  </p>
                </div>

                <Link 
                  to={`/plant/${plant.id}`}
                  className="w-full flex items-center justify-between bg-stone-800/80 hover:bg-emerald-400 hover:text-stone-950 text-stone-200 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all mt-2"
                >
                  <span>Explore Specimen</span>
                  <Eye className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < filteredPlants.length && (
          <div className="text-center pt-8">
            <button 
              onClick={() => setVisibleCount(prev => prev + 20)}
              className="px-8 py-3.5 bg-emerald-400 hover:bg-emerald-300 text-stone-950 font-bold text-xs rounded-full transition-all shadow-xl shadow-emerald-400/20"
            >
              Load More Species ({filteredPlants.length - visibleCount} Remaining)
            </button>
          </div>
        )}
      </section>

    </div>
  );
}