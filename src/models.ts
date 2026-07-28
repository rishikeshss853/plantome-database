export interface Metabolite {
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