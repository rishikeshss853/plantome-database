import fs from 'fs';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const XLSX = require('xlsx');

// Check if PLANTS.xlsx exists
if (!fs.existsSync('PLANTS.xlsx')) {
  console.error('❌ Error: PLANTS.xlsx not found in this folder!');
  process.exit(1);
}

// Wikipedia API Image Fetcher
async function fetchWikiImage(scientificName) {
  try {
    // Take genus and species (e.g., "Azadirachta indica")
    const parts = scientificName.trim().split(/\s+/);
    const queryName = parts.slice(0, 2).join(' ');
    
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(queryName)}`;
    const response = await fetch(url, {
      headers: { 'User-Agent': 'PlantomeDatabase/2.0 (hits-biotech-dept)' }
    });

    if (response.ok) {
      const data = await response.json();
      if (data.thumbnail && data.thumbnail.source) {
        // Get high-res version of Wikipedia image
        return data.thumbnail.source.replace(/\/\d+px-/, '/600px-');
      }
    }
  } catch (err) {
    // Silently fall back if Wikipedia API times out
  }
  return null;
}

const workbook = XLSX.readFile('PLANTS.xlsx');
const sheetName = workbook.SheetNames[0];
const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { defval: null });

const defaultFallbackImage = 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800';

async function processData() {
  console.log('🌿 Processing Excel rows and fetching species photos from Wikipedia API...');
  
  let currentPlant = null;
  const plants = [];
  let pId = 1;

  for (let index = 0; index < data.length; index++) {
    const row = data[index];

    if (row['BOTANICAL NAME']) {
      if (currentPlant) plants.push(currentPlant);
      
      const botName = String(row['BOTANICAL NAME']).trim();
      console.log(`[${pId}/75] Fetching photo for: ${botName}...`);
      
      const wikiImage = await fetchWikiImage(botName);
      
      currentPlant = {
        id: `p${pId++}`,
        commonName: row['COMMON NAME'] ? String(row['COMMON NAME']).trim() : 'Unknown',
        scientificName: botName,
        family: row['FAMILY'] ? String(row['FAMILY']).trim() : 'Unknown',
        image: wikiImage || defaultFallbackImage,
        description: `Cataloged campus species (${botName}) registered in HITS Department of Biotechnology flora database.`,
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
  console.log(`\n✅ Successfully updated src/data.ts with ${plants.length} species & real photos!`);
}

processData();