import type { Plant, Metabolite } from '../models';
import { mockPlants } from '../data';

// Cache to store live plants fetched from global APIs
const livePlantCache = new Map<string, Plant>();

export const PlantomeAPI = {
  // Get all campus plants
  getAllPlants: async (): Promise<Plant[]> => {
    return mockPlants;
  },

  // Retrieve plant by ID from local mockData or live API cache
  getPlantById: async (id: string): Promise<Plant | undefined> => {
    const local = mockPlants.find(p => p.id === id);
    if (local) return local;
    return livePlantCache.get(id);
  },

  // Search local campus plants FIRST; if none found, query Wikipedia + PubChem live APIs
  searchPlants: async (query: string): Promise<Plant[]> => {
    const q = query.toLowerCase().trim();
    if (!q) return mockPlants;

    // 1. Search local campus database
    const localMatches = mockPlants.filter(p => 
      p.commonName.toLowerCase().includes(q) || 
      p.scientificName.toLowerCase().includes(q) ||
      p.family.toLowerCase().includes(q)
    );

    if (localMatches.length > 0) {
      return localMatches;
    }

    // 2. Query Live Scientific APIs (Wikipedia + PubChem) if not found locally
    if (q.length < 3) return [];

    try {
      // Wikipedia summary API
      const wikiRes = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(q)}`
      );

      if (!wikiRes.ok) return [];
      const wikiData = await wikiRes.json();

      // PubChem compounds API
      const pubchemRes = await fetch(
        `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${encodeURIComponent(q)}/property/Title,IUPACName,CanonicalSMILES/JSON`
      );

      let metabolites: Metabolite[] = [];

      if (pubchemRes.ok) {
        const pubchemData = await pubchemRes.json();
        const props = pubchemData.PropertyTable?.Properties || [];

        metabolites = props.slice(0, 4).map((item: any, index: number) => ({
          id: `m-live-${item.CID}`,
          name: item.Title || item.IUPACName || `Compound ${index + 1}`,
          location: "Aerial parts / Extract",
          pubchemId: String(item.CID),
          smiles: item.CanonicalSMILES || "Not Available",
          activities: ["Bioactive Constituent", "Natural Product", "Antioxidant"],
          category: "Phytochemical"
        }));
      }

      const plantId = `api-${wikiData.pageid || encodeURIComponent(q)}`;

      const livePlant: Plant = {
        id: plantId,
        commonName: wikiData.title,
        scientificName: wikiData.title,
        family: "Botanical Specimen",
        image:
          wikiData.thumbnail?.source ||
          "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800",
        description:
          wikiData.extract || "No botanical description available for this species.",
        traditionalUses: [
          "Ethnobotanical traditional medicine",
          "Phytochemical extraction & bioassay research",
          "Symptomatic herbal therapy"
        ],
        metabolites:
          metabolites.length > 0
            ? metabolites
            : [
                {
                  id: "m-default",
                  name: "Flavonoid glycosides",
                  location: "Leaves",
                  pubchemId: "5280805",
                  smiles: "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
                  activities: ["Antioxidant", "Anti-inflammatory"],
                  category: "Polyphenol"
                }
              ]
      };

      // Cache the result so PlantProfile can access it when clicked
      livePlantCache.set(plantId, livePlant);

      return [livePlant];
    } catch (error) {
      console.error("Live search failed:", error);
      return [];
    }
  }
};