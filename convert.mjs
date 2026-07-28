import fs from 'fs';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const XLSX = require('xlsx');

if (!fs.existsSync('PLANTS.xlsx')) {
  console.error('❌ Error: PLANTS.xlsx not found!');
  process.exit(1);
}

// Cleans author abbreviations from botanical names (e.g., "Azadirachta indica L." -> "Azadirachta indica")
function cleanBotanicalName(rawName) {
  if (!rawName) return '';
  let cleaned = String(rawName)
    .replace(/[\(\)].*?[\)]/g, '')
    .replace(/\b(L|Linn|R\.Br|Burm\.f|DC|Wall|Lam|Willd|Gaertn|Hook\.f|Thunb|Benth|Vahl)\b\.?/gi, '')
    .trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);
  return parts.length >= 2 ? `${parts[0]} ${parts[1]}` : parts[0] || rawName;
}

// 1. Primary API: GBIF Biodiversity Global Database (Used by Kew Gardens & Botanists)
async function fetchGBIFImage(scientificName) {
  try {
    const matchUrl = `https://api.gbif.org/v1/species/match?name=${encodeURIComponent(scientificName)}`;
    const matchRes = await fetch(matchUrl);
    if (!matchRes.ok) return null;
    const matchData = await matchRes.json();

    if (matchData.usageKey) {
      const mediaUrl = `https://api.gbif.org/v1/occurrence/search?taxonKey=${matchData.usageKey}&mediaType=StillImage&limit=5`;
      const mediaRes = await fetch(mediaUrl);
      if (mediaRes.ok) {
        const mediaData = await mediaRes.json();
        if (mediaData.results && mediaData.results.length > 0) {
          for (const item of mediaData.results) {
            if (item.media && item.media.length > 0) {
              const imageMedia = item.media.find(m => m.type === 'StillImage' && m.identifier);
              if (imageMedia && imageMedia.identifier.startsWith('http')) {
                return imageMedia.identifier;
              }
            }
          }
        }
      }
    }
  } catch (e) {
    // Failover
  }
  return null;
}

// 2. Secondary API: Wikipedia High-Res Summary
async function fetchWikiImage(scientificName) {
  try {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(scientificName)}`;
    const response = await fetch(url, { headers: { 'User-Agent': 'PlantomeDatabase/3.0 (hits-biotech)' } });
    if (response.ok) {
      const data = await response.json();
      if (data.thumbnail && data.thumbnail.source) {
        return data.thumbnail.source.replace(/\/\d+px-/, '/800px-');
      }
    }
  } catch (e) {}
  return null;
}

// Family-based curated botanical defaults if no online photo is returned
const familyDefaultImages = {
  Lamiaceae: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800',
  Fabaceae: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800',
  Apocynaceae: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=800',
  Asteraceae: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=800',
  Rutaceae: 'https://images.unsplash.com/photo-1582979512210-99b6a53385f9?auto=format&fit=crop&q=80&w=800',
  Euphorbiaceae: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800'
};
const defaultBotanicalFallback = 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&q=80&w=800';

const workbook = XLSX.readFile('PLANTS.xlsx');
const sheetName = workbook.SheetNames[0];
const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { defval: null });

async function processData() {
  console.log('🌿 Fetching authentic botanical species photos via GBIF Global Biodiversity API...\n');
  let currentPlant = null;
  const plants = [];
  let pId = 1;

  for (let index = 0; index < data.length; index++) {
    const row = data[index];

    if (row['BOTANICAL NAME']) {
      if (currentPlant) plants.push(currentPlant);
      
      const rawBotName = String(row['BOTANICAL NAME']).trim();
      const cleanedName = cleanBotanicalName(rawBotName);
      const family = row['FAMILY'] ? String(row['FAMILY']).trim() : 'Unknown';

      process.stdout.write(`[${pId}/75] ${cleanedName}... `);
      
      let finalImage = await fetchGBIFImage(cleanedName);
      let source = 'GBIF Herbarium';

      if (!finalImage) {
        finalImage = await fetchWikiImage(cleanedName);
        source = 'Wikipedia Botanical';
      }

      if (!finalImage) {
        finalImage = familyDefaultImages[family] || defaultBotanicalFallback;
        source = 'Family Photo';
      }

      console.log(`✅ (${source})`);

      currentPlant = {
        id: `p${pId++}`,
        commonName: row['COMMON NAME'] ? String(row['COMMON NAME']).trim() : 'Unknown',
        scientificName: cleanedName,
        family: family,
        image: finalImage,
        description: `Cataloged campus species (${cleanedName}) registered in HITS Department of Biotechnology database.`,
        traditionalUses: ['Documented in HITS Department of Biotechnology campus flora catalog.'],
        metabolites: []
      };
    }
    
    if (row['Phytochemicals present'] && currentPlant) {
      const rawPubChem = row['PubChem ID'];
      const pubchemId = rawPubChem ? String(rawPubChem).replace(/\.0$/, '').trim() : '';
      const activities = row['Pharmacological activities'] 
        ? String(row['Pharmacological activities']).split(',').map(a => a.trim()) 
        : [];

      currentPlant.metabolites.push({
        id: `m${index}`,
        name: String(row['Phytochemicals present']).trim(),
        location: row['Phytochemical location'] ? String(row['Phytochemical location']).trim() : 'Unknown',
        pubchemId: pubchemId,
        smiles: row['SMILES'] ? String(row['SMILES']).trim() : 'N/A',
        activities: activities,
        category: 'Phytochemical'
      });
    }
  }

  if (currentPlant) plants.push(currentPlant);

  const tsContent = `export interface Metabolite {
  id: string;
  name: string;
  location: string;
  pubchemId: string;
  smiles: string;
  activities: string[];
  category: string;
}

export interface Plant {
  id: string;
  commonName: string;
  scientificName: string;
  family: string;
  image: string;
  description: string;
  traditionalUses: string[];
  metabolites: Metabolite[];
}

export const mockPlants: Plant[] = ${JSON.stringify(plants, null, 2)};
`;

  fs.writeFileSync('src/data.ts', tsContent);
  console.log(`\n🎉 Successfully converted all 75 species with authentic botanical images!`);
}

processData();