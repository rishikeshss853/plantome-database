import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Layers } from 'lucide-react';
import { PlantomeAPI } from '../services/api';
import type { Plant } from '../models';

interface FamilyTaxonomy {
  family: string;
  commonName: string;
  description: string;
  keyMetabolites: string[];
}

const MAJOR_FAMILIES: FamilyTaxonomy[] = [
  {
    family: "Lamiaceae",
    commonName: "Mint / Sage Family",
    description: "Rich in aromatic essential oils, volatile monoterpenes, and rosmarinic acid derivatives with antimicrobial and sedative activities.",
    keyMetabolites: ["Eugenol", "Thymol", "Rosmarinic Acid", "Menthol"]
  },
  {
    family: "Meliaceae",
    commonName: "Mahogany Family",
    description: "Characterized by complex highly-oxygenated triterpenoids known as limonoids, widely studied for bio-pesticidal and anti-inflammatory properties.",
    keyMetabolites: ["Azadirachtin", "Nimbin", "Salannin"]
  },
  {
    family: "Zingiberaceae",
    commonName: "Ginger Family",
    description: "Rhizomatous aromatic perennials yielding powerful phenolic diarylheptanoids and gingerols with chemopreventive and antioxidant profiles.",
    keyMetabolites: ["Curcumin", "Gingerol", "Zingerone", "Zerumbone"]
  },
  {
    family: "Apocynaceae",
    commonName: "Dogbane Family",
    description: "Renowned for producing complex cytotoxic indole alkaloids utilized globally in modern oncological formulations.",
    keyMetabolites: ["Vinblastine", "Vincristine", "Reserpine"]
  },
  {
    family: "Solanaceae",
    commonName: "Nightshade Family",
    description: "Produces bioactive steroidal lactones (withanolides) and tropane alkaloids with adaptogenic and central nervous system activity.",
    keyMetabolites: ["Withaferin A", "Atropine", "Solasodine"]
  },
  {
    family: "Poaceae",
    commonName: "Grass Family",
    description: "Contains essential aromatic grasses producing linear aldehyde monoterpenes used in biotechnology and essential oil extraction.",
    keyMetabolites: ["Citral", "Geraniol", "Cymbopogonol"]
  },
  {
    family: "Asphodelaceae",
    commonName: "Aloe / Asphodel Family",
    description: "Succulent species rich in anthraquinone glycosides and acetylated glucomannans researched for tissue regeneration.",
    keyMetabolites: ["Aloin", "Aloe-emodin", "Acemannan"]
  },
  {
    family: "Burseraceae",
    commonName: "Torchwood / Frankincense Family",
    description: "Produces fragrant oleo-gum resins containing pentacyclic triterpene acids that inhibit leukotriene synthesis.",
    keyMetabolites: ["Boswellic Acid", "Incensole Acetate"]
  },
  {
    family: "Rutaceae",
    commonName: "Citrus Family",
    description: "Abundant in furocoumarins, flavonoids, and volatile limonene essential oils with cardiovascular protective effects.",
    keyMetabolites: ["Limonene", "Hesperidin", "Naringin"]
  },
  {
    family: "Asteraceae",
    commonName: "Daisy / Sunflower Family",
    description: "Large plant family rich in sesquiterpene lactones and polyacetylenes studied for immunomodulatory actions.",
    keyMetabolites: ["Artemisinin", "Inulin", "Chamaemeloside"]
  },
  {
    family: "Fabaceae",
    commonName: "Legume / Bean Family",
    description: "High concentration of polyphenolic isoflavones, prenylated stilbenoids, and nitrogen-fixing secondary metabolites.",
    keyMetabolites: ["Genistein", "Daidzein", "Rotenone"]
  },
  {
    family: "Piperaceae",
    commonName: "Pepper Family",
    description: "Produces alkamide piperine derivatives that dramatically enhance intestinal bioavailability of co-administered phytochemicals.",
    keyMetabolites: ["Piperine", "Chavicine", "Piperlongumine"]
  }
];

export default function Families() {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [familyFilter, setFamilyFilter] = useState('');

  useEffect(() => {
    PlantomeAPI.getAllPlants().then(setPlants);
  }, []);

  // Map campus plants by family
  const campusMap = plants.reduce((acc, plant) => {
    if (!acc[plant.family]) acc[plant.family] = [];
    acc[plant.family].push(plant);
    return acc;
  }, {} as Record<string, Plant[]>);

  // Filter major family list
  const filteredFamilies = MAJOR_FAMILIES.filter(f => 
    f.family.toLowerCase().includes(familyFilter.toLowerCase()) ||
    f.commonName.toLowerCase().includes(familyFilter.toLowerCase()) ||
    f.description.toLowerCase().includes(familyFilter.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-emerald-800 text-white rounded-xl p-5 shadow-sm border border-emerald-900/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight">Botanical Taxonomy & Family Explorer</h2>
          <p className="text-xs text-emerald-100 mt-1 max-w-xl">
            Systematic classification of major plant families, signature phytochemical classes, and indexed campus flora records.
          </p>
        </div>

        {/* Filter input */}
        <div className="w-full md:w-64 relative text-stone-800">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 w-3.5 h-3.5" />
          <input
            type="text"
            placeholder="Filter botanical families..."
            className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-400 bg-white"
            value={familyFilter}
            onChange={(e) => setFamilyFilter(e.target.value)}
          />
        </div>
      </div>

      {/* Main Grid of Families */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredFamilies.map((fam) => {
          const campusPlantsInFam = campusMap[fam.family] || [];

          return (
            <div key={fam.family} className="bg-white rounded-xl border border-emerald-100 p-4 shadow-sm hover:border-emerald-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start border-b border-emerald-100 pb-2 mb-2.5">
                  <div>
                    <h3 className="text-sm font-bold text-emerald-900 flex items-center gap-1.5">
                      <Layers className="w-4 h-4 text-emerald-700" />
                      {fam.family}
                    </h3>
                    <p className="text-[11px] text-stone-500 font-medium">{fam.commonName}</p>
                  </div>

                  {campusPlantsInFam.length > 0 ? (
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-200">
                      {campusPlantsInFam.length} Campus Species
                    </span>
                  ) : (
                    <span className="bg-stone-100 text-stone-500 text-[10px] font-medium px-2 py-0.5 rounded border border-stone-200">
                      Taxonomic Reference
                    </span>
                  )}
                </div>

                <p className="text-xs text-stone-600 leading-relaxed mb-3">
                  {fam.description}
                </p>

                {/* Key Metabolites */}
                <div className="mb-3">
                  <span className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider block mb-1">
                    Signature Metabolite Classes:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {fam.keyMetabolites.map((met, i) => (
                      <span key={i} className="bg-amber-50 text-amber-800 text-[10px] px-2 py-0.5 rounded border border-amber-200/60 font-medium">
                        {met}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Indexed Campus Plant Cards */}
              {campusPlantsInFam.length > 0 && (
                <div className="pt-2 border-t border-stone-100 space-y-1.5">
                  <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
                    Indexed Campus Flora:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {campusPlantsInFam.map(p => (
                      <Link key={p.id} to={`/plant/${p.id}`} className="group">
                        <div className="bg-stone-50 hover:bg-emerald-50 p-2 rounded border border-stone-200 hover:border-emerald-300 transition-colors flex items-center gap-2">
                          <img src={p.image} alt={p.commonName} className="w-8 h-8 rounded object-cover flex-shrink-0" />
                          <div className="overflow-hidden">
                            <p className="text-xs font-bold text-stone-900 group-hover:text-emerald-800 truncate">{p.commonName}</p>
                            <p className="text-[10px] italic text-stone-500 truncate">{p.scientificName}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}