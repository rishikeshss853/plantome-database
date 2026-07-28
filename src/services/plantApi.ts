import type { Plant, Metabolite } from '../types';
import { mockPlants } from '../data';

// In-memory cache to hold plants fetched live from APIs
const plantCache = new Map<string, Plant>();

/**
 * Look up a plant by ID from either campus data or live API cache
 */
export function getPlantById(id: string): Plant | undefined {
  const local = mockPlants.find(p => p.id === id);
  if (local) return local;
  return plantCache.get(id);
}

export async function searchLivePlantAPI(query: string): Promise<Plant[]> {
  if (!query || query.trim().length < 3) return [];

  try {
    const wikiRes = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`
    );

    if (!wikiRes.ok) return [];
    const wikiData = await wikiRes.json();

    const pubchemRes = await fetch(
      `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${encodeURIComponent(query)}/property/Title,IUPACName,CanonicalSMILES/JSON`
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

    const plantId = `api-${wikiData.pageid || encodeURIComponent(query)}`;

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

    // Store in cache so PlantProfile page can load it!
    plantCache.set(plantId, livePlant);

    return [livePlant];
  } catch (error) {
    console.error("Error fetching live scientific data:", error);
    return [];
  }
}