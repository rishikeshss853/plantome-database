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
  id: string | number;
  commonName: string;
  scientificName: string;
  family: string;
  image?: string;
  imageUrl?: string;
  description?: string;
  traditionalUses?: string[];
  phytochemicals?: Phytochemical[];
  [key: string]: any; // Allows any extra Excel columns without throwing TypeScript errors
}
export interface Phytochemical {
  name: string;
  type?: string;        // e.g. "phenolic", "glycoside"
  location?: string;    // e.g. "leaves", "bark"
  pubChemId?: string;
  smiles?: string;
  activities?: string[];
}

export const mockPlants: Plant[] = [
  {
    "id": "p1",
    "commonName": "Indian Copperleaf",
    "scientificName": "Acalypha indica",
    "family": "Euphorbiaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/605048662/original.jpg",
    "description": "Cataloged campus species (Acalypha indica) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m0",
        "name": "Quercetin",
        "location": "Leaves",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Anticancer"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m1",
        "name": "Acalyphin",
        "location": "Leaves, Roots",
        "pubchemId": "49787014",
        "smiles": "CN1[C@H]([C@](C(=CC1=O)OC)(C#N)O[C@H]2[C@@H]([C@H]([C@@H]([C@H](O2)CO)O)O)O)O",
        "activities": [
          "Anthelmintic",
          "Expectorant",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m2",
        "name": "Tannins",
        "location": "Leaves, Stem",
        "pubchemId": "16129778",
        "smiles": "C1=C(C=C(C(=C1O)O)O)C(=O)OC2=CC(=CC(=C2O)O)C(=O)OC[C@@H]3[C@H]([C@@H]([C@H]([C@@H](O3)OC(=O)C4=CC(=C(C(=C4)OC(=O)C5=CC(=C(C(=C5)O)O)O)O)O)OC(=O)C6=CC(=C(C(=C6)OC(=O)C7=CC(=C(C(=C7)O)O)O)O)O)OC(=O)C8=CC(=C(C(=C8)OC(=O)C9=CC(=C(C(=C9)O)O)O)O)O)OC(=O)C1=CC(=C(C(=C1)OC(=O)C1=CC(=C(C(=C1)O)O)O)O)O",
        "activities": [
          "Astringent",
          "Antidiarrheal",
          "Antibacterial"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p2",
    "commonName": "Smooth Agave",
    "scientificName": "Agave demeesteriana",
    "family": "Asparagaceae",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQw6DCDAMxJ2R45i8CFcUNgTMO1-_FzDxADAwZgWHbXH6sGaEHymZPW5_J&s=10",
    "description": "Cataloged campus species (Agave demeesteriana) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m3",
        "name": "Hecogenin",
        "location": "Leaves",
        "pubchemId": "91453",
        "smiles": "C[C@@H]1CC[C@@]2([C@H]([C@H]3[C@@H](O2)C[C@@H]4[C@@]3(C(=O)C[C@H]5[C@H]4CC[C@@H]6[C@@]5(CC[C@@H](C6)O)C)C)C)OC1",
        "activities": [
          "anti-inflammatory",
          "antifungal",
          "and gastroprotective effects"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m4",
        "name": "Sarsasapogenin",
        "location": "Rhizome, Leaves",
        "pubchemId": "92095",
        "smiles": "C[C@H]1CC[C@@]2([C@H]([C@H]3[C@@H](O2)C[C@@H]4[C@@]3(CC[C@H]5[C@H]4CC[C@H]6[C@@]5(CC[C@@H](C6)O)C)C)C)OC1",
        "activities": [
          "Antidiabetic",
          "Neuroprotective",
          "Anticancer"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m5",
        "name": "Rutin",
        "location": "Leaves",
        "pubchemId": "5280805",
        "smiles": "C[C@H]1[C@@H]([C@H]([C@H]([C@@H](O1)OC[C@@H]2[C@H]([C@@H]([C@H]([C@@H](O2)OC3=C(OC4=CC(=CC(=C4C3=O)O)O)C5=CC(=C(C=C5)O)O)O)O)O)O)O)O",
        "activities": [
          "antioxidant",
          "anti-inflammatory",
          "anti-diabetic",
          "and neuroprotective effect"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p3",
    "commonName": "Chinese evergreen",
    "scientificName": "Aglaonema commutatum",
    "family": "Araceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/609503106/original.jpg",
    "description": "Cataloged campus species (Aglaonema commutatum) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m6",
        "name": "Quercetin",
        "location": "Leaves",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Anticancer"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m7",
        "name": "Apigenin",
        "location": "Leaves, Stem",
        "pubchemId": "5280443",
        "smiles": "C1=CC(=CC=C1C2=CC(=O)C3=C(C=C(C=C3O2)O)O)O",
        "activities": [
          "Antioxidant",
          "Neuroprotective",
          "Anticancer"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m8",
        "name": "Caffeic acid",
        "location": "Leaves, Roots",
        "pubchemId": "689043",
        "smiles": "C1=CC(=C(C=C1/C=C/C(=O)O)O)O",
        "activities": [
          "Antioxidant",
          "Antimicrobial",
          "Hepatoprotective"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p4",
    "commonName": "Siris tree / Woman’s tongue tree",
    "scientificName": "Albizia lebbeck",
    "family": "Fabaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/605139142/original.jpg",
    "description": "Cataloged campus species (Albizia lebbeck) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m9",
        "name": "Quercetin",
        "location": "Leaves, Bark",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Anticancer"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m10",
        "name": "Catechin",
        "location": "Bark, Pods",
        "pubchemId": "9064",
        "smiles": "C1[C@@H]([C@H](OC2=CC(=CC(=C21)O)O)C3=CC(=C(C=C3)O)O)O",
        "activities": [
          "Antioxidant",
          "Antimicrobial",
          "Cardioprotective"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m11",
        "name": "β-Sitosterol",
        "location": "Seeds, Bark",
        "pubchemId": "222284",
        "smiles": "CC[C@H](CC[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Anti-inflammatory",
          "Antidiabetic",
          "Immunomodulatory"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p5",
    "commonName": "Golden Trumpet",
    "scientificName": "Allamanda cathartica",
    "family": "Apocynaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/605425946/original.jpg",
    "description": "Cataloged campus species (Allamanda cathartica) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m12",
        "name": "Allamandin",
        "location": "Leaves, Bark",
        "pubchemId": "5281540",
        "smiles": "C/C=C/1\\[C@H]2[C@@]3(C=C[C@H]4[C@@H]3[C@@H](O2)O[C@@H]([C@H]4C(=O)OC)O)OC1=O",
        "activities": [
          "Anticancer",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m13",
        "name": "Plumericin",
        "location": "Leaves, Roots",
        "pubchemId": "5281545",
        "smiles": "C/C=C/1\\[C@H]2[C@@]3(C=C[C@H]4[C@@H]3[C@@H](O2)OC=C4C(=O)OC)OC1=O",
        "activities": [
          "Anti-inflammatory",
          "Antioxidant"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m14",
        "name": "Iridoids",
        "location": "Leaves, Flowers",
        "pubchemId": "",
        "smiles": "N/A",
        "activities": [
          "Antioxidant",
          "Hepatoprotective"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p6",
    "commonName": "Brazilian Joyweed",
    "scientificName": "Alternanthera brasiliana",
    "family": "Amaranthaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/605199716/original.jpg",
    "description": "Cataloged campus species (Alternanthera brasiliana) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m15",
        "name": "Quercetin",
        "location": "Leaves, Stem",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Anticancer"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m16",
        "name": "Kaempferol",
        "location": "Leaves, Stem",
        "pubchemId": "5280863",
        "smiles": "C1=CC(=CC=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Anticancer"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m17",
        "name": "Saponins",
        "location": "Leaves",
        "pubchemId": "6540709",
        "smiles": "C/C=C(/C)\\C(=O)O[C@H]1[C@@H]([C@@]2([C@@H](C[C@@]3(C(=CCC4[C@]3(CCC5[C@@]4(CC[C@@H]([C@]5(C)CO)O[C@H]6[C@@H]([C@H]([C@@H]([C@H](O6)C(=O)O)O[C@H]7[C@@H]([C@H]([C@@H]([C@H](O7)CO)O)O)O)O)O[C@H]8[C@@H]([C@H]([C@@H]([C@H](O8)CO)O)O)O)C)C)C2CC1(C)C)C)O)CO)OC(=O)C",
        "activities": [
          "Immunomodulatory",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p7",
    "commonName": "Madeira Vine",
    "scientificName": "Anredera cordifolia",
    "family": "Basellaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/605319102/original.jpg",
    "description": "Cataloged campus species (Anredera cordifolia) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m18",
        "name": "Quercetin",
        "location": "Leaves, Stem",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m19",
        "name": "Rutin",
        "location": "Leaves, Stem",
        "pubchemId": "5280805",
        "smiles": "C[C@H]1[C@@H]([C@H]([C@H]([C@@H](O1)OC[C@@H]2[C@H]([C@@H]([C@H]([C@@H](O2)OC3=C(OC4=CC(=CC(=C4C3=O)O)O)C5=CC(=C(C=C5)O)O)O)O)O)O)O)O",
        "activities": [
          "Anticancer",
          "Wound Healing"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m20",
        "name": "Saponins",
        "location": "Leaves",
        "pubchemId": "6540709",
        "smiles": "C/C=C(/C)\\C(=O)O[C@H]1[C@@H]([C@@]2([C@@H](C[C@@]3(C(=CCC4[C@]3(CCC5[C@@]4(CC[C@@H]([C@]5(C)CO)O[C@H]6[C@@H]([C@H]([C@@H]([C@H](O6)C(=O)O)O[C@H]7[C@@H]([C@H]([C@@H]([C@H](O7)CO)O)O)O)O)O[C@H]8[C@@H]([C@H]([C@@H]([C@H](O8)CO)O)O)O)C)C)C2CC1(C)C)C)O)CO)OC(=O)C",
        "activities": [
          "Immunomodulatory",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p8",
    "commonName": "Carpet Grass",
    "scientificName": "Axonopus compressus",
    "family": "Poaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/605582923/original.jpg",
    "description": "Cataloged campus species (Axonopus compressus) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m21",
        "name": "Apigenin",
        "location": "Leaves, stems",
        "pubchemId": "5280443",
        "smiles": "C1=CC(=CC=C1C2=CC(=O)C3=C(C=C(C=C3O2)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Antimicrobial",
          "Wound healing"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m22",
        "name": "Tannic Acid",
        "location": "Leaves, stems",
        "pubchemId": "16129778",
        "smiles": "C1=C(C=C(C(=C1O)O)O)C(=O)OC2=CC(=CC(=C2O)O)C(=O)OC[C@@H]3[C@H]([C@@H]([C@H]([C@@H](O3)OC(=O)C4=CC(=C(C(=C4)OC(=O)C5=CC(=C(C(=C5)O)O)O)O)O)OC(=O)C6=CC(=C(C(=C6)OC(=O)C7=CC(=C(C(=C7)O)O)O)O)O)OC(=O)C8=CC(=C(C(=C8)OC(=O)C9=CC(=C(C(=C9)O)O)O)O)O)OC(=O)C1=CC(=C(C(=C1)OC(=O)C1=CC(=C(C(=C1)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Antimicrobial",
          "Wound healing"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m23",
        "name": "β-Sitosterol",
        "location": "Leaves, stems",
        "pubchemId": "222284",
        "smiles": "CC[C@H](CC[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Antimicrobial",
          "Wound healing"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p9",
    "commonName": "Neem",
    "scientificName": "Azadirachta indica",
    "family": "Meliaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/605684464/original.jpg",
    "description": "Cataloged campus species (Azadirachta indica) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m24",
        "name": "Azadirachtin",
        "location": "Seeds",
        "pubchemId": "5281303",
        "smiles": "C/C=C(\\C)/C(=O)O[C@H]1C[C@H]([C@]2(CO[C@@H]3[C@@H]2[C@]14CO[C@@]([C@H]4[C@]([C@@H]3O)(C)[C@@]56[C@@H]7C[C@H]([C@@]5(O6)C)[C@]8(C=CO[C@H]8O7)O)(C(=O)OC)O)C(=O)OC)OC(=O)C",
        "activities": [
          "Antimicrobial",
          "Antifungal",
          "Anticancer",
          "Anti-inflammatory",
          "Immunomodulatory",
          "Antimalarial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m25",
        "name": "Nimbin",
        "location": "Bark & Leaves",
        "pubchemId": "108058",
        "smiles": "CC1=C2[C@@H](C[C@H]1C3=COC=C3)O[C@H]4[C@@]2([C@@H]([C@@]5([C@@H]([C@H]4OC(=O)C)[C@](C=CC5=O)(C)C(=O)OC)C)CC(=O)OC)C",
        "activities": [
          "Antimicrobial",
          "Antifungal",
          "Anticancer",
          "Anti-inflammatory",
          "Immunomodulatory",
          "Antimalarial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m26",
        "name": "Nimbolide",
        "location": "Bark & Leaves",
        "pubchemId": "12313376",
        "smiles": "CC1=C2[C@@H](C[C@H]1C3=COC=C3)O[C@H]4[C@@]2([C@@H]([C@@]5([C@H]6[C@H]4OC(=O)[C@@]6(C=CC5=O)C)C)CC(=O)OC)C",
        "activities": [
          "Antimicrobial",
          "Antifungal",
          "Anticancer",
          "Anti-inflammatory",
          "Immunomodulatory",
          "Antimalarial"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p10",
    "commonName": "Bamboo",
    "scientificName": "Bambusa tuldoides",
    "family": "Poaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/620613577/original.jpg",
    "description": "Cataloged campus species (Bambusa tuldoides) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m27",
        "name": "β-Sitosterol",
        "location": "Leaves, Shoots, Culms",
        "pubchemId": "222284",
        "smiles": "CC[C@H](CC[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Anti-inflammatory",
          "Anticancer",
          "Antidiabetic",
          "Cholesterol-lowering",
          "Immunomodulatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m28",
        "name": "Stigmasterol",
        "location": "Leaves, Shoots, Culms",
        "pubchemId": "5280794",
        "smiles": "CC[C@H](/C=C/[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Hypocholesterolemic",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m29",
        "name": "Lupeol",
        "location": "Leaves, Shoots, Culms",
        "pubchemId": "259846",
        "smiles": "CC(=C)[C@@H]1CC[C@]2([C@H]1[C@H]3CC[C@@H]4[C@]5(CC[C@@H](C([C@@H]5CC[C@]4([C@@]3(CC2)C)C)(C)C)O)C)C",
        "activities": [
          "Anticancer",
          "Hepatoprotective",
          "Anti-arthritic",
          "Antimicrobial",
          "Antioxidant"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p11",
    "commonName": "Purple Orchid Tree",
    "scientificName": "Bauhinia purpurea",
    "family": "Fabaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/605039589/original.jpg",
    "description": "Cataloged campus species (Bauhinia purpurea) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m30",
        "name": "Quercetin",
        "location": "Leaves, Bark, Flowers",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anticancer",
          "Anti-inflammatory",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m31",
        "name": "Kaempferol",
        "location": "Flowers, Leaves",
        "pubchemId": "5280863",
        "smiles": "C1=CC(=CC=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Antidiabetic",
          "Hepatoprotective"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m32",
        "name": "β-Sitosterol",
        "location": "Seeds, Bark",
        "pubchemId": "222284",
        "smiles": "CC[C@H](CC[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Anticancer",
          "Anti-inflammatory",
          "Cholesterol-lowering",
          "Immunomodulatory"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p12",
    "commonName": "Palmyra Palm / Ice Apple",
    "scientificName": "Borassus flabellifer",
    "family": "Arecaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/604458345/original.jpg",
    "description": "Cataloged campus species (Borassus flabellifer) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m33",
        "name": "β-Sitosterol",
        "location": "Seeds, Bark",
        "pubchemId": "222284",
        "smiles": "CC[C@H](CC[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Anticancer",
          "Anti-inflammatory",
          "Cholesterol-lowering",
          "Immunomodulatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m34",
        "name": "Gallic Acid",
        "location": "Fruits, Roots",
        "pubchemId": "370",
        "smiles": "C1=C(C=C(C(=C1O)O)O)C(=O)O",
        "activities": [
          "Antioxidant",
          "Antimicrobial",
          "Hepatoprotective",
          "Antidiabetic"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m35",
        "name": "Quercetin",
        "location": "Leaves, Bark, Flowers",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anticancer",
          "Anti-inflammatory",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p13",
    "commonName": "Bougainvillea",
    "scientificName": "Bougainvillea glabra",
    "family": "Nyctaginaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/610263561/original.jpg",
    "description": "Cataloged campus species (Bougainvillea glabra) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m36",
        "name": "Betaxanthin",
        "location": "Bracts, Flowers",
        "pubchemId": "135926572",
        "smiles": "COC1=C(C=CC(=C1)CCN=C/C=C/2\\C[C@H](NC(=C2)C(=O)[O-])C(=O)[O-])O",
        "activities": [
          "Antioxidant",
          "Anticancer",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m37",
        "name": "Quercetin",
        "location": "Leaves, Bark, Flowers",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anticancer",
          "Anti-inflammatory",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m38",
        "name": "β-Sitosterol",
        "location": "Seeds, Bark",
        "pubchemId": "222284",
        "smiles": "CC[C@H](CC[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Anticancer",
          "Anti-inflammatory",
          "Cholesterol-lowering",
          "Immunomodulatory"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p14",
    "commonName": "Giant Milkweed",
    "scientificName": "Calotropis gigantea",
    "family": "Apocynaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/604458485/original.jpg",
    "description": "Cataloged campus species (Calotropis gigantea) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m39",
        "name": "Calotropin",
        "location": "Latex, Leaves",
        "pubchemId": "16142",
        "smiles": "C[C@@H]1C[C@@H]([C@]2([C@@H](O1)O[C@@H]3C[C@@H]4CC[C@@H]5[C@@H]([C@]4(C[C@H]3O2)C=O)CC[C@]6([C@@]5(CC[C@@H]6C7=CC(=O)OC7)O)C)O)O",
        "activities": [
          "Cardiotonic",
          "Anticancer",
          "Antimicrobial",
          "Cytotoxic"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m40",
        "name": "Uscharin",
        "location": "Latex, Roots",
        "pubchemId": "11261800",
        "smiles": "C[C@@H]1C[C@]2([C@]3([C@@H](O1)O[C@@H]4C[C@@H]5CC[C@@H]6[C@@H]([C@]5(C[C@H]4O3)C=O)CC[C@]7([C@@]6(CC[C@@H]7C8=CC(=O)OC8)O)C)O)N=CCS2",
        "activities": [
          "Anticancer",
          "Antifertility",
          "Cytotoxic"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m41",
        "name": "Quercetin",
        "location": "Leaves, Flowers",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Antimicrobial",
          "Anticancer"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p15",
    "commonName": "Achira",
    "scientificName": "Canna indica",
    "family": "Cannaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/604974389/original.jpg",
    "description": "Cataloged campus species (Canna indica) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m42",
        "name": "Quercetin",
        "location": "Leaves, Flowers",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Anticancer",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m43",
        "name": "amylose",
        "location": "Rhizomes",
        "pubchemId": "46936858",
        "smiles": "C([C@@H]1[C@@H]2[C@@H]([C@H]([C@@H](O1)O[C@@H]3[C@@H](O[C@@H]([C@@H]([C@H]3O)O)O[C@@H]4[C@@H](O[C@H]([C@@H]([C@H]4O)O)O[C@@H]5[C@@H](O[C@H]([C@@H]([C@H]5O)O)O[C@@H]6[C@@H](O[C@H]([C@@H]([C@H]6O)O)O[C@@H]7[C@@H](O[C@H]([C@@H]([C@H]7O)O)O[C@@H]8[C@@H](O[C@@H](O2)[C@@H]([C@H]8O)O)CO)CO)CO)CO)CO)CO)O)O)O",
        "activities": [
          "Antidiabetic (slow glucose release)",
          "Prebiotic",
          "Energy source"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m44",
        "name": "Anthocyanins",
        "location": "Flowers",
        "pubchemId": "145858",
        "smiles": "C1=CC=C(C=C1)C2=[O+]C3=CC=CC=C3C=C2",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Hepatoprotective"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p16",
    "commonName": "Hybrid Canna Lily",
    "scientificName": "Canna ×",
    "family": "Cannaceae",
    "image": "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&q=80&w=800",
    "description": "Cataloged campus species (Canna ×) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m45",
        "name": "Quercetin",
        "location": "Leaves, Flowers",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Anticancer",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m46",
        "name": "amylopectin",
        "location": "Rhizomes",
        "pubchemId": "439207",
        "smiles": "C([C@@H]1[C@H]([C@@H]([C@H]([C@H](O1)O[C@@H]2[C@H](O[C@@H]([C@@H]([C@H]2O)O)OC[C@@H]3[C@H]([C@@H]([C@H]([C@H](O3)O[C@@H]4[C@H](O[C@@H]([C@@H]([C@H]4O)O)O)CO)O)O)O[C@@H]5[C@@H]([C@H]([C@@H]([C@H](O5)CO)O)O)O)CO)O)O)O)O",
        "activities": [
          "Antidiabetic (slow glucose release)",
          "Prebiotic",
          "Energy source"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m47",
        "name": "Anthocyanins",
        "location": "Flowers",
        "pubchemId": "145858",
        "smiles": "C1=CC=C(C=C1)C2=[O+]C3=CC=CC=C3C=C2",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Hepatoprotective"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p17",
    "commonName": "Golden Shower Tree",
    "scientificName": "Cassia fistula",
    "family": "Fabaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/605019640/original.jpg",
    "description": "Cataloged campus species (Cassia fistula) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m48",
        "name": "Rhein",
        "location": "Pods, Fruit pulp",
        "pubchemId": "10168",
        "smiles": "C1=CC2=C(C(=C1)O)C(=O)C3=C(C2=O)C=C(C=C3O)C(=O)O",
        "activities": [
          "Laxative",
          "Antimicrobial",
          "Anticancer",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m49",
        "name": "Kaempferol",
        "location": "Leaves, Flowers",
        "pubchemId": "5280863",
        "smiles": "C1=CC(=CC=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Antidiabetic",
          "Anti-inflammatory",
          "Cardioprotective"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m50",
        "name": "β-Sitosterol",
        "location": "Seeds, Stem bark",
        "pubchemId": "222284",
        "smiles": "CC[C@H](CC[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Antidiabetic",
          "Anti-inflammatory",
          "Hypocholesterolemic",
          "Immunomodulatory"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p18",
    "commonName": "Australian Pine / Beefwood",
    "scientificName": "Casuarina equisetifolia",
    "family": "Casuarinaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/605746071/original.jpg",
    "description": "Cataloged campus species (Casuarina equisetifolia) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m51",
        "name": "Quercetin",
        "location": "Leaves, Bark",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Anticancer",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m52",
        "name": "Gallic acid",
        "location": "Bark, Wood, Leaves",
        "pubchemId": "370",
        "smiles": "C1=C(C=C(C(=C1O)O)O)C(=O)O",
        "activities": [
          "Antioxidant",
          "Hepatoprotective",
          "Antimicrobial",
          "Antidiabetic"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m53",
        "name": "β-Sitosterol",
        "location": "Bark, Stem",
        "pubchemId": "222284",
        "smiles": "CC[C@H](CC[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Anti-inflammatory",
          "Hypocholesterolemic",
          "Immunomodulatory",
          "Antidiabetic"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p19",
    "commonName": "Swollen Fingergrass / Purpletop Chloris",
    "scientificName": "Chloris barbata",
    "family": "Poaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/604566625/original.jpg",
    "description": "Cataloged campus species (Chloris barbata) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m54",
        "name": "β-Sitosterol",
        "location": "Leaves, Stems",
        "pubchemId": "222284",
        "smiles": "CC[C@H](CC[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Anti-inflammatory",
          "Hypocholesterolemic",
          "Antidiabetic",
          "Immunomodulatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m55",
        "name": "Quercetin",
        "location": "Leaves",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Anticancer",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m56",
        "name": "Kaempferol",
        "location": "Leaves, Aerial parts",
        "pubchemId": "5280863",
        "smiles": "C1=CC(=CC=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Antidiabetic",
          "Anti-inflammatory",
          "Cardioprotective"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p20",
    "commonName": "Asian Spiderflower / Tickweed",
    "scientificName": "Cleome viscosa",
    "family": "Cleomaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/605624580/original.jpg",
    "description": "Cataloged campus species (Cleome viscosa) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m57",
        "name": "Kaempferol",
        "location": "Leaves, Seeds",
        "pubchemId": "5280863",
        "smiles": "C1=CC(=CC=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Antimicrobial",
          "Anticancer"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m58",
        "name": "β-Sitosterol",
        "location": "Seeds, Stem bark",
        "pubchemId": "222284",
        "smiles": "CC[C@H](CC[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Antidiabetic",
          "Hypocholesterolemic",
          "Anti-inflammatory",
          "Immunomodulatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m59",
        "name": "Stigmasterol",
        "location": "Seeds, Aerial parts",
        "pubchemId": "5280794",
        "smiles": "CC[C@H](/C=C/[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Anti-inflammatory",
          "Antioxidant",
          "Anticancer",
          "Antidiabetic"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p21",
    "commonName": "Coconut",
    "scientificName": "Cocos nucifera",
    "family": "Arecaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/604686414/original.jpg",
    "description": "Cataloged campus species (Cocos nucifera) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m60",
        "name": "Lauric acid",
        "location": "Endosperm",
        "pubchemId": "3893",
        "smiles": "CCCCCCCCCCCC(=O)O",
        "activities": [
          "Antimicrobial",
          "Antiviral",
          "Antifungal",
          "Immunomodulatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m61",
        "name": "Catechin",
        "location": "Tender coconut water, Husk",
        "pubchemId": "9064",
        "smiles": "C1[C@@H]([C@H](OC2=CC(=CC(=C21)O)O)C3=CC(=C(C=C3)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Cardioprotective",
          "Hepatoprotective"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m62",
        "name": "β-Sitosterol",
        "location": "Endosperm, Husk fiber",
        "pubchemId": "222284",
        "smiles": "CC[C@H](CC[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Antidiabetic",
          "Hypocholesterolemic",
          "Anti-inflammatory",
          "Anticancer"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p22",
    "commonName": "Madaraspatana Cucumber / Wild Cucumber",
    "scientificName": "Cucumis maderaspatanus",
    "family": "Cucurbitaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/605550110/original.jpg",
    "description": "Cataloged campus species (Cucumis maderaspatanus) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m63",
        "name": "Cucurbitacin B",
        "location": "Fruits",
        "pubchemId": "5281316",
        "smiles": "CC(=O)OC(C)(C)/C=C/C(=O)[C@@](C)([C@H]1[C@@H](C[C@@]2([C@@]1(CC(=O)[C@@]3([C@H]2CC=C4[C@H]3C[C@@H](C(=O)C4(C)C)O)C)C)C)O)O",
        "activities": [
          "Anticancer",
          "Anti-inflammatory",
          "Hepatoprotective",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m64",
        "name": "Quercetin",
        "location": "Leaves, Fruits",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Antidiabetic",
          "Anti-inflammatory",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m65",
        "name": "β-Sitosterol",
        "location": "Roots, Seeds",
        "pubchemId": "222284",
        "smiles": "CC[C@H](CC[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Antidiabetic",
          "Hypocholesterolemic",
          "Anti-inflammatory",
          "Immunomodulatory"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p23",
    "commonName": "Muskmelon / Cantaloupe",
    "scientificName": "Cucumis melo",
    "family": "Cucurbitaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/604841907/original.jpg",
    "description": "Cataloged campus species (Cucumis melo) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m66",
        "name": "Cucurbitacin B",
        "location": "Seeds, Fruit rind",
        "pubchemId": "5281316",
        "smiles": "CC(=O)OC(C)(C)/C=C/C(=O)[C@@](C)([C@H]1[C@@H](C[C@@]2([C@@]1(CC(=O)[C@@]3([C@H]2CC=C4[C@H]3C[C@@H](C(=O)C4(C)C)O)C)C)C)O)O",
        "activities": [
          "Anticancer",
          "Anti-inflammatory",
          "Hepatoprotective",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m67",
        "name": "Luteolin",
        "location": "Leaves, Fruit pulp",
        "pubchemId": "5280445",
        "smiles": "C1=CC(=C(C=C1C2=CC(=O)C3=C(C=C(C=C3O2)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Antidiabetic",
          "Neuroprotective"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m68",
        "name": "β-Sitosterol",
        "location": "Seeds, Roots",
        "pubchemId": "222284",
        "smiles": "CC[C@H](CC[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Hypocholesterolemic",
          "Antidiabetic",
          "Anti-inflammatory",
          "Immunomodulatory"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p24",
    "commonName": "Little Ironweed / Purple Fleabane",
    "scientificName": "Cyanthillium cinereum",
    "family": "Asteraceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/605620009/original.jpg",
    "description": "Cataloged campus species (Cyanthillium cinereum) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m69",
        "name": "Luteolin",
        "location": "Leaves, Flowers",
        "pubchemId": "5280445",
        "smiles": "C1=CC(=C(C=C1C2=CC(=O)C3=C(C=C(C=C3O2)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Anticancer",
          "Antidiabetic"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m70",
        "name": "Apigenin",
        "location": "Leaves, Stems",
        "pubchemId": "5280443",
        "smiles": "C1=CC(=CC=C1C2=CC(=O)C3=C(C=C(C=C3O2)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Antimicrobial",
          "Anticancer"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m71",
        "name": "β-Sitosterol",
        "location": "Whole plant, Roots",
        "pubchemId": "222284",
        "smiles": "CC[C@H](CC[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Antidiabetic",
          "Hypocholesterolemic",
          "Immunomodulatory",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p25",
    "commonName": "Sago Palm / King Sago",
    "scientificName": "Cycas revoluta",
    "family": "Cycadaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/607291348/original.jpg",
    "description": "Cataloged campus species (Cycas revoluta) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m72",
        "name": "Cycasin",
        "location": "Seeds",
        "pubchemId": "5459896",
        "smiles": "C/[N+](=N/CO[C@H]1[C@@H]([C@H]([C@@H]([C@H](O1)CO)O)O)O)/[O-]",
        "activities": [
          "Cytotoxic",
          "Neurotoxic",
          "Potential anticancer activity (but toxic in high amounts)"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m73",
        "name": "β-Sitosterol",
        "location": "Leaves, Seeds",
        "pubchemId": "222284",
        "smiles": "CC[C@H](CC[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Anti-inflammatory",
          "Antidiabetic",
          "Hypocholesterolemic",
          "Immunomodulatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m74",
        "name": "Kaempferol",
        "location": "Leaves",
        "pubchemId": "5280863",
        "smiles": "C1=CC(=CC=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Antimicrobial",
          "Cardioprotective"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p26",
    "commonName": "Indian Rosewood",
    "scientificName": "Dalbergia latifolia",
    "family": "Fabaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/622017605/original.jpg",
    "description": "Cataloged campus species (Dalbergia latifolia) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m75",
        "name": "Dalbergin",
        "location": "Heartwood",
        "pubchemId": "442768",
        "smiles": "COC1=C(C=C2C(=CC(=O)OC2=C1)C3=CC=CC=C3)O",
        "activities": [
          "Antioxidant",
          "Antimicrobial",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m76",
        "name": "Biochanin A",
        "location": "Heartwood, Bark",
        "pubchemId": "5280373",
        "smiles": "COC1=CC=C(C=C1)C2=COC3=CC(=CC(=C3C2=O)O)O",
        "activities": [
          "Anticancer",
          "Antioxidant",
          "Estrogenic activity",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m77",
        "name": "β-Sitosterol",
        "location": "Bark, Seeds",
        "pubchemId": "222284",
        "smiles": "CC[C@H](CC[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Antidiabetic",
          "Hypocholesterolemic",
          "Immunomodulatory",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p27",
    "commonName": "Moonflower / Downy Thorn-apple",
    "scientificName": "Datura innoxia",
    "family": "Solanaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/605621241/original.jpg",
    "description": "Cataloged campus species (Datura innoxia) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m78",
        "name": "Scopolamine",
        "location": "Leaves, Seeds",
        "pubchemId": "638340",
        "smiles": "CN1[C@@H]2CC(C[C@H]1[C@@H]3[C@H]2O3)OC(=O)[C@@H](CO)C4=CC=CC=C4",
        "activities": [
          "Anticholinergic",
          "Antispasmodic",
          "Sedative",
          "Motion sickness treatment"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m79",
        "name": "Hyoscyamine",
        "location": "Leaves, Seeds",
        "pubchemId": "64692",
        "smiles": "CN1C2CCC1CC(C2)OC(=O)[C@H](CO)C3=CC=CC=C3",
        "activities": [
          "Anticholinergic",
          "Antispasmodic",
          "Analgesic",
          "Bronchodilator"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m80",
        "name": "Atropine",
        "location": "Leaves, Roots, Seeds",
        "pubchemId": "9589359",
        "smiles": "CC(C1=CC=CC(=C1)C2CC3CCC(C2)N3C)C(=O)OO.CC(C1=CC=CC(=C1)C2CC3CCC(C2)N3C)C(=O)OO.C[N+]1=CC=CC(=C1)/C=N/O.COP(=O)(C(C(Cl)(Cl)Cl)O)OC.OS(=O)(=O)O.[I-]",
        "activities": [
          "Anticholinergic",
          "Mydriatic",
          "Antidote for organophosphate poisoning"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p28",
    "commonName": "Flame Tree / Gulmohar",
    "scientificName": "Delonix regia",
    "family": "Fabaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/604849459/original.jpg",
    "description": "Cataloged campus species (Delonix regia) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m81",
        "name": "Quercetin",
        "location": "Leaves, Flowers",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Anticancer",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m82",
        "name": "β-Sitosterol",
        "location": "Seeds, Bark",
        "pubchemId": "222284",
        "smiles": "CC[C@H](CC[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Antidiabetic",
          "Hypocholesterolemic",
          "Immunomodulatory",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m83",
        "name": "Lupeol",
        "location": "Stem bark, Leaves",
        "pubchemId": "259846",
        "smiles": "CC(=C)[C@@H]1CC[C@]2([C@H]1[C@H]3CC[C@@H]4[C@]5(CC[C@@H](C([C@@H]5CC[C@]4([C@@]3(CC2)C)C)(C)C)O)C)C",
        "activities": [
          "Anticancer",
          "Anti-inflammatory",
          "Hepatoprotective",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p29",
    "commonName": "Golden Dewdrop / Skyflower",
    "scientificName": "Duranta erecta",
    "family": "Verbenaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/605193086/original.jpg",
    "description": "Cataloged campus species (Duranta erecta) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m84",
        "name": "Quercetin",
        "location": "Leaves, Flowers",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m85",
        "name": "Saponins",
        "location": "Leaves, Stems",
        "pubchemId": "6540709",
        "smiles": "C/C=C(/C)\\C(=O)O[C@H]1[C@@H]([C@@]2([C@@H](C[C@@]3(C(=CCC4[C@]3(CCC5[C@@]4(CC[C@@H]([C@]5(C)CO)O[C@H]6[C@@H]([C@H]([C@@H]([C@H](O6)C(=O)O)O[C@H]7[C@@H]([C@H]([C@@H]([C@H](O7)CO)O)O)O)O)O[C@H]8[C@@H]([C@H]([C@@H]([C@H](O8)CO)O)O)O)C)C)C2CC1(C)C)C)O)CO)OC(=O)C",
        "activities": [
          "Antimicrobial",
          "Anti-inflammatory",
          "Hepatoprotective"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m86",
        "name": "Lupeol",
        "location": "Leaves, Fruits",
        "pubchemId": "259846",
        "smiles": "CC(=C)[C@@H]1CC[C@]2([C@H]1[C@H]3CC[C@@H]4[C@]5(CC[C@@H](C([C@@H]5CC[C@]4([C@@]3(CC2)C)C)(C)C)O)C)C",
        "activities": [
          "Anticancer",
          "Anti-inflammatory",
          "Hepatoprotective"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p30",
    "commonName": "Oil Palm",
    "scientificName": "Elaeis guineensis",
    "family": "Arecaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/609303951/original.jpg",
    "description": "Cataloged campus species (Elaeis guineensis) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m87",
        "name": "Tocotrienols",
        "location": "Fruit pulp, Oil",
        "pubchemId": "9929901",
        "smiles": "CC(=CCC/C(=C/CC/C(=C/CCC1(CCC2=C(O1)C=CC(=C2)O)C)/C)/C)C",
        "activities": [
          "Antioxidant",
          "Neuroprotective",
          "Cardioprotective"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m88",
        "name": "β-carotene",
        "location": "Fruit pulp, Oil",
        "pubchemId": "5280489",
        "smiles": "CC1=C(C(CCC1)(C)C)/C=C/C(=C/C=C/C(=C/C=C/C=C(/C=C/C=C(/C=C/C2=C(CCCC2(C)C)C)\\C)\\C)/C)/C",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Vision health"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m89",
        "name": "β-Sitosterol",
        "location": "Fruit, Oil",
        "pubchemId": "222284",
        "smiles": "CC[C@H](CC[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Cholesterol-lowering",
          "Anti-inflammatory",
          "Anticancer"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p31",
    "commonName": "Lovegrass",
    "scientificName": "Eragrostis tenella",
    "family": "Poaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/605009670/original.jpg",
    "description": "Cataloged campus species (Eragrostis tenella) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m90",
        "name": "Quercetin",
        "location": "Leaves, Whole Plant",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m91",
        "name": "Gallic acid",
        "location": "Leaves, Seeds",
        "pubchemId": "370",
        "smiles": "C1=C(C=C(C(=C1O)O)O)C(=O)O",
        "activities": [
          "Antioxidant",
          "Antimicrobial",
          "Hepatoprotective"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m92",
        "name": "Alkaloids",
        "location": "Whole Plant",
        "pubchemId": "265028",
        "smiles": "CN1C2CCC1CC(C2)OC(=O)C3CCC(C4=CC=CC=C34)(C5=CC=CC=C5)C(=O)OC6CC7CCC(C6)N7C",
        "activities": [
          "Antimicrobial",
          "Anti-inflammatory",
          "Analgesic"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p32",
    "commonName": "River Red Gum",
    "scientificName": "Eucalyptus camaldulensis",
    "family": "Myrtaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/605033759/original.jpg",
    "description": "Cataloged campus species (Eucalyptus camaldulensis) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m93",
        "name": "Eucalyptol",
        "location": "Leaves, Oil",
        "pubchemId": "2758",
        "smiles": "CC1(C2CCC(O1)(CC2)C)C",
        "activities": [
          "Antimicrobial",
          "Expectorant",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m94",
        "name": "Quercetin",
        "location": "Leaves, Bark",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Anticancer"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m95",
        "name": "Tannins",
        "location": "Bark, Leaves",
        "pubchemId": "44144428",
        "smiles": "C1[C@H](C(C(CC1(C(=O)O)O)OC(=O)C2=CC(=C(C(=C2)O)O)O)OC(=O)C3=CC(=C(C(=C3)OC(=O)C4=CC(=C(C(=C4)OC(=O)C5=CC(=C(C(=C5)O)O)O)O)O)O)O)OC(=O)C6=CC(=C(C(=C6)O)O)O",
        "activities": [
          "Antimicrobial",
          "Astringent",
          "Antioxidant"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p33",
    "commonName": "Wild Poinsettia",
    "scientificName": "Euphorbia heterophylla",
    "family": "Euphorbiaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/605444082/original.jpg",
    "description": "Cataloged campus species (Euphorbia heterophylla) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m96",
        "name": "Quercetin",
        "location": "Leaves, Whole Plant",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m97",
        "name": "Diterpenes",
        "location": "Latex, Whole Plant",
        "pubchemId": "139583204",
        "smiles": "C[C@]1(CCC2C(=CC[C@@H]3[C@@]2(CC[C@@H](C3(C)C)O)C)C1)C=C",
        "activities": [
          "Anticancer",
          "Antimicrobial",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m98",
        "name": "Alkaloids",
        "location": "Whole Plant",
        "pubchemId": "265028",
        "smiles": "CN1C2CCC1CC(C2)OC(=O)C3CCC(C4=CC=CC=C34)(C5=CC=CC=C5)C(=O)OC6CC7CCC(C6)N7C",
        "activities": [
          "Antimicrobial",
          "Analgesic",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p34",
    "commonName": "Asthma Plant / Patra",
    "scientificName": "Euphorbia hirta",
    "family": "Euphorbiaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/604603174/original.jpg",
    "description": "Cataloged campus species (Euphorbia hirta) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m99",
        "name": "Quercetin",
        "location": "Leaves, Whole Plant",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m100",
        "name": "Diterpenes",
        "location": "Latex, Whole Plant",
        "pubchemId": "139583204",
        "smiles": "C[C@]1(CCC2C(=CC[C@@H]3[C@@]2(CC[C@@H](C3(C)C)O)C)C1)C=C",
        "activities": [
          "Anticancer",
          "Antimicrobial",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m101",
        "name": "Alkaloids",
        "location": "Whole Plant",
        "pubchemId": "265028",
        "smiles": "CN1C2CCC1CC(C2)OC(=O)C3CCC(C4=CC=CC=C34)(C5=CC=CC=C5)C(=O)OC6CC7CCC(C6)N7C",
        "activities": [
          "Antimicrobial",
          "Analgesic",
          "Antispasmodic"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p35",
    "commonName": "Crown of Thorns",
    "scientificName": "Euphorbia milii",
    "family": "Euphorbiaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/604505601/original.jpg",
    "description": "Cataloged campus species (Euphorbia milii) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m102",
        "name": "Quercetin",
        "location": "Leaves, Stems",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m103",
        "name": "Diterpenes",
        "location": "Latex, Whole Plant",
        "pubchemId": "139583204",
        "smiles": "C[C@]1(CCC2C(=CC[C@@H]3[C@@]2(CC[C@@H](C3(C)C)O)C)C1)C=C",
        "activities": [
          "Anticancer",
          "Antimicrobial",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m104",
        "name": "β-Sitosterol",
        "location": "Leaves, Stems",
        "pubchemId": "222284",
        "smiles": "CC[C@H](CC[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Anti-inflammatory",
          "Immunomodulatory",
          "Anticancer"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p36",
    "commonName": "Devil’s Backbone",
    "scientificName": "Euphorbia tithymaloides",
    "family": "Euphorbiaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/609147910/original.jpg",
    "description": "Cataloged campus species (Euphorbia tithymaloides) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m105",
        "name": "Quercetin",
        "location": "Leaves, Whole Plant",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m106",
        "name": "Diterpenes",
        "location": "Latex, Whole Plant",
        "pubchemId": "139583204",
        "smiles": "C[C@]1(CCC2C(=CC[C@@H]3[C@@]2(CC[C@@H](C3(C)C)O)C)C1)C=C",
        "activities": [
          "Anticancer",
          "Antimicrobial",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m107",
        "name": "Alkaloids",
        "location": "Whole Plant",
        "pubchemId": "265028",
        "smiles": "CN1C2CCC1CC(C2)OC(=O)C3CCC(C4=CC=CC=C34)(C5=CC=CC=C5)C(=O)OC6CC7CCC(C6)N7C",
        "activities": [
          "Antimicrobial",
          "Analgesic",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p37",
    "commonName": "Cluster Fig / Indian Fig Tree",
    "scientificName": "Ficus racemosa",
    "family": "Moraceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/604660871/original.jpg",
    "description": "Cataloged campus species (Ficus racemosa) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m108",
        "name": "Quercetin",
        "location": "Leaves, Bark",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m109",
        "name": "Lupeol",
        "location": "Bark, Fruit",
        "pubchemId": "259846",
        "smiles": "CC(=C)[C@@H]1CC[C@]2([C@H]1[C@H]3CC[C@@H]4[C@]5(CC[C@@H](C([C@@H]5CC[C@]4([C@@]3(CC2)C)C)(C)C)O)C)C",
        "activities": [
          "Anticancer",
          "Anti-inflammatory",
          "Hepatoprotective"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m110",
        "name": "β-Sitosterol",
        "location": "Bark, Leaves",
        "pubchemId": "222284",
        "smiles": "CC[C@H](CC[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Anti-inflammatory",
          "Hypoglycemic",
          "Immunomodulatory"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p38",
    "commonName": "Peepal Tree / Sacred Fig",
    "scientificName": "Ficus religiosa",
    "family": "Moraceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/605617828/original.jpg",
    "description": "Cataloged campus species (Ficus religiosa) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m111",
        "name": "Quercetin",
        "location": "Leaves, Bark",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m112",
        "name": "Lupeol",
        "location": "Bark, Leaves",
        "pubchemId": "259846",
        "smiles": "CC(=C)[C@@H]1CC[C@]2([C@H]1[C@H]3CC[C@@H]4[C@]5(CC[C@@H](C([C@@H]5CC[C@]4([C@@]3(CC2)C)C)(C)C)O)C)C",
        "activities": [
          "Anticancer",
          "Anti-inflammatory",
          "Hepatoprotective"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m113",
        "name": "Gallic acid",
        "location": "Leaves, Fruit",
        "pubchemId": "370",
        "smiles": "C1=C(C=C(C(=C1O)O)O)C(=O)O",
        "activities": [
          "Antioxidant",
          "Antimicrobial",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p39",
    "commonName": "Banyan Fig / Ginseng Fig",
    "scientificName": "Ficus retusa",
    "family": "Moraceae",
    "image": "https://bs.plantnet.org/image/o/9b01126c48ab2816f81340dd080e1d6053dac543",
    "description": "Cataloged campus species (Ficus retusa) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m114",
        "name": "Quercetin",
        "location": "Leaves, Bark",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m115",
        "name": "Lupeol",
        "location": "Bark, Leaves",
        "pubchemId": "259846",
        "smiles": "CC(=C)[C@@H]1CC[C@]2([C@H]1[C@H]3CC[C@@H]4[C@]5(CC[C@@H](C([C@@H]5CC[C@]4([C@@]3(CC2)C)C)(C)C)O)C)C",
        "activities": [
          "Anticancer",
          "Anti-inflammatory",
          "Hepatoprotective"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m116",
        "name": "β-Sitosterol",
        "location": "Leaves, Bark",
        "pubchemId": "222284",
        "smiles": "CC[C@H](CC[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Anti-inflammatory",
          "Immunomodulatory",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p40",
    "commonName": "Fern Tree",
    "scientificName": "Filicium decipiens",
    "family": "Sapindaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/604681008/original.jpg",
    "description": "Cataloged campus species (Filicium decipiens) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m117",
        "name": "Quercetin",
        "location": "Leaves, Bark",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m118",
        "name": "Lupeol",
        "location": "Leaves, Bark",
        "pubchemId": "259846",
        "smiles": "CC(=C)[C@@H]1CC[C@]2([C@H]1[C@H]3CC[C@@H]4[C@]5(CC[C@@H](C([C@@H]5CC[C@]4([C@@]3(CC2)C)C)(C)C)O)C)C",
        "activities": [
          "Anticancer",
          "Anti-inflammatory",
          "Hepatoprotective"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m119",
        "name": "Phenolic compounds",
        "location": "Leaves, Bark",
        "pubchemId": "10477042",
        "smiles": "C1=CC(=CC=C1N(CCI)CCI)O",
        "activities": [
          "Antioxidant",
          "Antimicrobial",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p41",
    "commonName": "Indian Cherry / Paniala",
    "scientificName": "Flacourtia jangomas",
    "family": "Salicaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/647847686/original.jpg",
    "description": "Cataloged campus species (Flacourtia jangomas) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m120",
        "name": "Quercetin",
        "location": "Leaves, Fruit",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m121",
        "name": "Gallic acid",
        "location": "Leaves, Fruit",
        "pubchemId": "370",
        "smiles": "C1=C(C=C(C(=C1O)O)O)C(=O)O",
        "activities": [
          "Antioxidant",
          "Antimicrobial",
          "Hepatoprotective"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m122",
        "name": "Lupeol",
        "location": "Bark, Fruit",
        "pubchemId": "259846",
        "smiles": "CC(=C)[C@@H]1CC[C@]2([C@H]1[C@H]3CC[C@@H]4[C@]5(CC[C@@H](C([C@@H]5CC[C@]4([C@@]3(CC2)C)C)(C)C)O)C)C",
        "activities": [
          "Anticancer",
          "Anti-inflammatory",
          "Hepatoprotective"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p42",
    "commonName": "Globe Amaranth",
    "scientificName": "Gomphrena celosioides",
    "family": "Amaranthaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/604722981/original.jpg",
    "description": "Cataloged campus species (Gomphrena celosioides) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m123",
        "name": "Quercetin",
        "location": "Leaves, Whole Plant",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m124",
        "name": "Saponins",
        "location": "Leaves, Whole Plant",
        "pubchemId": "6540709",
        "smiles": "C/C=C(/C)\\C(=O)O[C@H]1[C@@H]([C@@]2([C@@H](C[C@@]3(C(=CCC4[C@]3(CCC5[C@@]4(CC[C@@H]([C@]5(C)CO)O[C@H]6[C@@H]([C@H]([C@@H]([C@H](O6)C(=O)O)O[C@H]7[C@@H]([C@H]([C@@H]([C@H](O7)CO)O)O)O)O)O[C@H]8[C@@H]([C@H]([C@@H]([C@H](O8)CO)O)O)O)C)C)C2CC1(C)C)C)O)CO)OC(=O)C",
        "activities": [
          "Antimicrobial",
          "Anti-inflammatory",
          "Immunomodulatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m125",
        "name": "Alkaloids",
        "location": "Whole Plant",
        "pubchemId": "265028",
        "smiles": "CN1C2CCC1CC(C2)OC(=O)C3CCC(C4=CC=CC=C34)(C5=CC=CC=C5)C(=O)OC6CC7CCC(C6)N7C",
        "activities": [
          "Antimicrobial",
          "Analgesic",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p43",
    "commonName": "Firebush / Scarlet Bush",
    "scientificName": "Hamelia patens",
    "family": "Rubiaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/604635889/original.jpg",
    "description": "Cataloged campus species (Hamelia patens) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m126",
        "name": "Quercetin",
        "location": "Leaves, Flowers",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m127",
        "name": "Alkaloids",
        "location": "Leaves, Whole Plant",
        "pubchemId": "265028",
        "smiles": "CN1C2CCC1CC(C2)OC(=O)C3CCC(C4=CC=CC=C34)(C5=CC=CC=C5)C(=O)OC6CC7CCC(C6)N7C",
        "activities": [
          "Antimicrobial",
          "Analgesic",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m128",
        "name": "Diterpenes",
        "location": "Leaves, Stems",
        "pubchemId": "139583204",
        "smiles": "C[C@]1(CCC2C(=CC[C@@H]3[C@@]2(CC[C@@H](C3(C)C)O)C)C1)C=C",
        "activities": [
          "Anticancer",
          "Anti-inflammatory",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p44",
    "commonName": "Umbrella Tree",
    "scientificName": "Heptapleurum actinophyllum",
    "family": "Araliaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/604869355/original.jpg",
    "description": "Cataloged campus species (Heptapleurum actinophyllum) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m129",
        "name": "Quercetin",
        "location": "Leaves, Stems",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m130",
        "name": "Saponins",
        "location": "Leaves, Roots",
        "pubchemId": "6540709",
        "smiles": "C/C=C(/C)\\C(=O)O[C@H]1[C@@H]([C@@]2([C@@H](C[C@@]3(C(=CCC4[C@]3(CCC5[C@@]4(CC[C@@H]([C@]5(C)CO)O[C@H]6[C@@H]([C@H]([C@@H]([C@H](O6)C(=O)O)O[C@H]7[C@@H]([C@H]([C@@H]([C@H](O7)CO)O)O)O)O)O[C@H]8[C@@H]([C@H]([C@@H]([C@H](O8)CO)O)O)O)C)C)C2CC1(C)C)C)O)CO)OC(=O)C",
        "activities": [
          "Antimicrobial",
          "Anti-inflammatory",
          "Immunomodulatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m131",
        "name": "Lupeol",
        "location": "Leaves, Stems",
        "pubchemId": "259846",
        "smiles": "CC(=C)[C@@H]1CC[C@]2([C@H]1[C@H]3CC[C@@H]4[C@]5(CC[C@@H](C([C@@H]5CC[C@]4([C@@]3(CC2)C)C)(C)C)O)C)C",
        "activities": [
          "Anticancer",
          "Anti-inflammatory",
          "Hepatoprotective"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p45",
    "commonName": "False Aralia",
    "scientificName": "Heptapleurum ellipticum",
    "family": "Araliaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/637319724/original.jpg",
    "description": "Cataloged campus species (Heptapleurum ellipticum) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m132",
        "name": "Quercetin",
        "location": "Leaves, Stems",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m133",
        "name": "Saponins",
        "location": "Leaves, Roots",
        "pubchemId": "6540709",
        "smiles": "C/C=C(/C)\\C(=O)O[C@H]1[C@@H]([C@@]2([C@@H](C[C@@]3(C(=CCC4[C@]3(CCC5[C@@]4(CC[C@@H]([C@]5(C)CO)O[C@H]6[C@@H]([C@H]([C@@H]([C@H](O6)C(=O)O)O[C@H]7[C@@H]([C@H]([C@@H]([C@H](O7)CO)O)O)O)O)O[C@H]8[C@@H]([C@H]([C@@H]([C@H](O8)CO)O)O)O)C)C)C2CC1(C)C)C)O)CO)OC(=O)C",
        "activities": [
          "Antimicrobial",
          "Anti-inflammatory",
          "Immunomodulatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m134",
        "name": "Lupeol",
        "location": "Leaves, Stems",
        "pubchemId": "259846",
        "smiles": "CC(=C)[C@@H]1CC[C@]2([C@H]1[C@H]3CC[C@@H]4[C@]5(CC[C@@H](C([C@@H]5CC[C@]4([C@@]3(CC2)C)C)(C)C)O)C)C",
        "activities": [
          "Anticancer",
          "Anti-inflammatory",
          "Hepatoprotective"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p46",
    "commonName": "False Silk Tree",
    "scientificName": "Holarrhena floribunda",
    "family": "Apocynaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/645477364/original.jpg",
    "description": "Cataloged campus species (Holarrhena floribunda) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m135",
        "name": "Conessine",
        "location": "Bark, Leaves",
        "pubchemId": "441082",
        "smiles": "C[C@H]1[C@H]2CC[C@@H]3[C@@]2(CC[C@H]4[C@H]3CC=C5[C@@]4(CC[C@@H](C5)N(C)C)C)CN1C",
        "activities": [
          "Antimicrobial",
          "Antimalarial",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m136",
        "name": "Lupeol",
        "location": "Leaves, Bark",
        "pubchemId": "259846",
        "smiles": "CC(=C)[C@@H]1CC[C@]2([C@H]1[C@H]3CC[C@@H]4[C@]5(CC[C@@H](C([C@@H]5CC[C@]4([C@@]3(CC2)C)C)(C)C)O)C)C",
        "activities": [
          "Anticancer",
          "Anti-inflammatory",
          "Hepatoprotective"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m137",
        "name": "Quercetin",
        "location": "Leaves, Bark",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p47",
    "commonName": "Chinese Ixora",
    "scientificName": "Ixora chinensis",
    "family": "Rubiaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/608901128/original.jpg",
    "description": "Cataloged campus species (Ixora chinensis) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m138",
        "name": "Quercetin",
        "location": "Leaves, Flowers",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m139",
        "name": "Lupeol",
        "location": "Leaves, Flowers",
        "pubchemId": "259846",
        "smiles": "CC(=C)[C@@H]1CC[C@]2([C@H]1[C@H]3CC[C@@H]4[C@]5(CC[C@@H](C([C@@H]5CC[C@]4([C@@]3(CC2)C)C)(C)C)O)C)C",
        "activities": [
          "Anticancer",
          "Anti-inflammatory",
          "Hepatoprotective"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m140",
        "name": "Alkaloids",
        "location": "Leaves, Whole Plant",
        "pubchemId": "265028",
        "smiles": "CN1C2CCC1CC(C2)OC(=O)C3CCC(C4=CC=CC=C34)(C5=CC=CC=C5)C(=O)OC6CC7CCC(C6)N7C",
        "activities": [
          "Antimicrobial",
          "Analgesic",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p48",
    "commonName": "Ixora",
    "scientificName": "Ixora finlaysoniana",
    "family": "Rubiaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/618445637/original.jpg",
    "description": "Cataloged campus species (Ixora finlaysoniana) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m141",
        "name": "Quercetin",
        "location": "Leaves, Flowers",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m142",
        "name": "Lupeol",
        "location": "Leaves, Flowers",
        "pubchemId": "259846",
        "smiles": "CC(=C)[C@@H]1CC[C@]2([C@H]1[C@H]3CC[C@@H]4[C@]5(CC[C@@H](C([C@@H]5CC[C@]4([C@@]3(CC2)C)C)(C)C)O)C)C",
        "activities": [
          "Anticancer",
          "Anti-inflammatory",
          "Hepatoprotective"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m143",
        "name": "Alkaloids",
        "location": "Leaves, Whole Plant",
        "pubchemId": "265028",
        "smiles": "CN1C2CCC1CC(C2)OC(=O)C3CCC(C4=CC=CC=C34)(C5=CC=CC=C5)C(=O)OC6CC7CCC(C6)N7C",
        "activities": [
          "Antimicrobial",
          "Analgesic",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p49",
    "commonName": "Queen’s Crape Myrtle / Banaba",
    "scientificName": "Lagerstroemia speciosa",
    "family": "Lythraceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/606733818/original.jpg",
    "description": "Cataloged campus species (Lagerstroemia speciosa) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m144",
        "name": "Corosolic acid",
        "location": "Leaves, Bark",
        "pubchemId": "6918774",
        "smiles": "C[C@@H]1CC[C@@]2(CC[C@@]3(C(=CC[C@H]4[C@]3(CC[C@@H]5[C@@]4(C[C@H]([C@@H](C5(C)C)O)O)C)C)[C@@H]2[C@H]1C)C)C(=O)O",
        "activities": [
          "Antidiabetic",
          "Antioxidant",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m145",
        "name": "Maslinic acid",
        "location": "Leaves, Bark",
        "pubchemId": "73659",
        "smiles": "C[C@@]12CC[C@@H]3[C@@]([C@H]1CC=C4[C@]2(CC[C@@]5([C@H]4CC(CC5)(C)C)C(=O)O)C)(C[C@H]([C@@H](C3(C)C)O)O)C",
        "activities": [
          "Anticancer",
          "Anti-inflammatory",
          "Hepatoprotective"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m146",
        "name": "Ellagitannins",
        "location": "Leaves, Bark",
        "pubchemId": "10033935",
        "smiles": "CC(=O)C[C@]1(C(=O)C=C2[C@H]3[C@@]1(OC4=C3C(=CC(=C4O)O)C(=O)O[C@@H]5[C@H]6COC(=O)C7=CC(=C(C(=C7C8=C(C(=C(C=C8C(=O)O[C@@H]5[C@H]([C@@H](O6)OC(=O)C9=CC(=C(C(=C9)O)O)O)OC2=O)O)O)O)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Antimicrobial",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p50",
    "commonName": "Chinese Fan Palm",
    "scientificName": "Livistona chinensis",
    "family": "Arecaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/606917874/original.jpg",
    "description": "Cataloged campus species (Livistona chinensis) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m147",
        "name": "Quercetin",
        "location": "Leaves, Fruits",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m148",
        "name": "Lupeol",
        "location": "Leaves, Fruits",
        "pubchemId": "259846",
        "smiles": "CC(=C)[C@@H]1CC[C@]2([C@H]1[C@H]3CC[C@@H]4[C@]5(CC[C@@H](C([C@@H]5CC[C@]4([C@@]3(CC2)C)C)(C)C)O)C)C",
        "activities": [
          "Anticancer",
          "Anti-inflammatory",
          "Hepatoprotective"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m149",
        "name": "β-Sitosterol",
        "location": "Leaves, Fruits",
        "pubchemId": "222284",
        "smiles": "CC[C@H](CC[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Anti-inflammatory",
          "Immunomodulatory",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p51",
    "commonName": "Mahua",
    "scientificName": "Madhuca longifolia",
    "family": "Sapotaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/615465174/original.jpg",
    "description": "Cataloged campus species (Madhuca longifolia) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m150",
        "name": "Quercetin",
        "location": "Leaves, Flowers",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m151",
        "name": "Saponins",
        "location": "Seeds, Flowers",
        "pubchemId": "6540709",
        "smiles": "C/C=C(/C)\\C(=O)O[C@H]1[C@@H]([C@@]2([C@@H](C[C@@]3(C(=CCC4[C@]3(CCC5[C@@]4(CC[C@@H]([C@]5(C)CO)O[C@H]6[C@@H]([C@H]([C@@H]([C@H](O6)C(=O)O)O[C@H]7[C@@H]([C@H]([C@@H]([C@H](O7)CO)O)O)O)O)O[C@H]8[C@@H]([C@H]([C@@H]([C@H](O8)CO)O)O)O)C)C)C2CC1(C)C)C)O)CO)OC(=O)C",
        "activities": [
          "Antimicrobial",
          "Anti-inflammatory",
          "Immunomodulatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m152",
        "name": "Lupeol",
        "location": "Bark, Seeds",
        "pubchemId": "259846",
        "smiles": "CC(=C)[C@@H]1CC[C@]2([C@H]1[C@H]3CC[C@@H]4[C@]5(CC[C@@H](C([C@@H]5CC[C@]4([C@@]3(CC2)C)C)(C)C)O)C)C",
        "activities": [
          "Anticancer",
          "Anti-inflammatory",
          "Hepatoprotective"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p52",
    "commonName": "Mango",
    "scientificName": "Mangifera indica",
    "family": "Anacardiaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/605361763/original.jpg",
    "description": "Cataloged campus species (Mangifera indica) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m153",
        "name": "Mangiferin",
        "location": "Leaves, Bark, Fruit",
        "pubchemId": "5281647",
        "smiles": "C1=C2C(=CC(=C1O)O)OC3=C(C2=O)C(=C(C(=C3)O)[C@H]4[C@@H]([C@H]([C@@H]([C@H](O4)CO)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Antidiabetic",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m154",
        "name": "Quercetin",
        "location": "Leaves, Bark, Fruit",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Antimicrobial",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m155",
        "name": "Lupeol",
        "location": "Bark, Leaves",
        "pubchemId": "259846",
        "smiles": "CC(=C)[C@@H]1CC[C@]2([C@H]1[C@H]3CC[C@@H]4[C@]5(CC[C@@H](C([C@@H]5CC[C@]4([C@@]3(CC2)C)C)(C)C)O)C)C",
        "activities": [
          "Anticancer",
          "Anti-inflammatory",
          "Hepatoprotective"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p53",
    "commonName": "Weeping Bottlebrush",
    "scientificName": "Melaleuca viminalis",
    "family": "Myrtaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/604713854/original.jpg",
    "description": "Cataloged campus species (Melaleuca viminalis) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m156",
        "name": "Eucalyptol",
        "location": "Leaves, Oil",
        "pubchemId": "2758",
        "smiles": "CC1(C2CCC(O1)(CC2)C)C",
        "activities": [
          "Antimicrobial",
          "Expectorant",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m157",
        "name": "Quercetin",
        "location": "Leaves, Flowers",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m158",
        "name": "Tannins",
        "location": "Bark, Leaves",
        "pubchemId": "44144428",
        "smiles": "C1[C@H](C(C(CC1(C(=O)O)O)OC(=O)C2=CC(=C(C(=C2)O)O)O)OC(=O)C3=CC(=C(C(=C3)OC(=O)C4=CC(=C(C(=C4)OC(=O)C5=CC(=C(C(=C5)O)O)O)O)O)O)O)OC(=O)C6=CC(=C(C(=C6)O)O)O",
        "activities": [
          "Antimicrobial",
          "Astringent",
          "Antioxidant"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p54",
    "commonName": "Indian Cork Tree",
    "scientificName": "Millingtonia hortensis",
    "family": "Bignoniaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/615666917/original.jpg",
    "description": "Cataloged campus species (Millingtonia hortensis) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m159",
        "name": "β-sitosterol",
        "location": "Leaves, Bark",
        "pubchemId": "222284",
        "smiles": "CC[C@H](CC[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [],
        "category": "Phytochemical"
      },
      {
        "id": "m160",
        "name": "Luteolin",
        "location": "Bark",
        "pubchemId": "5280445",
        "smiles": "C1=CC(=C(C=C1C2=CC(=O)C3=C(C=C(C=C3O2)O)O)O)O",
        "activities": [],
        "category": "Phytochemical"
      },
      {
        "id": "m161",
        "name": "Millingtonine",
        "location": "Leaves, Flowers",
        "pubchemId": "274350988",
        "smiles": "N/A",
        "activities": [
          "Antioxidant",
          "Anticancer",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p55",
    "commonName": "Spanish Cherry / Bakul",
    "scientificName": "Mimusops elengi",
    "family": "Sapotaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/604390365/original.jpg",
    "description": "Cataloged campus species (Mimusops elengi) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m162",
        "name": "β-sitosterol",
        "location": "Bark, Seeds",
        "pubchemId": "222284",
        "smiles": "CC[C@H](CC[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Antioxidant",
          "Antimicrobial",
          "Anticancer"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m163",
        "name": "Quercetin",
        "location": "Leaves, Bark",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Anti-inflammatory",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m164",
        "name": "Lupeol",
        "location": "Stem bark, Fruits",
        "pubchemId": "259846",
        "smiles": "CC(=C)[C@@H]1CC[C@]2([C@H]1[C@H]3CC[C@@H]4[C@]5(CC[C@@H](C([C@@H]5CC[C@]4([C@@]3(CC2)C)C)(C)C)O)C)C",
        "activities": [
          "Anti-inflammatory",
          "Hepatoprotective",
          "Anticancer"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p56",
    "commonName": "Indian Mast Tree / False Ashoka",
    "scientificName": "Monoon longifolium",
    "family": "Annonaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/608337541/original.jpg",
    "description": "Cataloged campus species (Monoon longifolium) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m165",
        "name": "β-sitosterol",
        "location": "Leaves, Bark",
        "pubchemId": "222284",
        "smiles": "CC[C@H](CC[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m166",
        "name": "Luteolin",
        "location": "Leaves",
        "pubchemId": "5280445",
        "smiles": "C1=CC(=C(C=C1C2=CC(=O)C3=C(C=C(C=C3O2)O)O)O)O",
        "activities": [
          "Anticancer",
          "Antioxidant",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m167",
        "name": "Quercetin",
        "location": "Leaves, Flowers",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Antimicrobial",
          "Anticancer"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p57",
    "commonName": "Noni / Indian Mulberry",
    "scientificName": "Morinda citrifolia",
    "family": "Rubiaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/604931562/original.jpg",
    "description": "Cataloged campus species (Morinda citrifolia) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m168",
        "name": "β-sitosterol",
        "location": "Seeds, Leaves",
        "pubchemId": "222284",
        "smiles": "CC[C@H](CC[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Antioxidant",
          "Antidiabetic",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m169",
        "name": "Scopoletin",
        "location": "Fruit, Leaves",
        "pubchemId": "5280460",
        "smiles": "COC1=C(C=C2C(=C1)C=CC(=O)O2)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Antihypertensive"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m170",
        "name": "Damnacanthal",
        "location": "Roots, Fruit",
        "pubchemId": "2948",
        "smiles": "COC1=C2C(=CC(=C1C=O)O)C(=O)C3=CC=CC=C3C2=O",
        "activities": [
          "Anticancer",
          "Antimicrobial",
          "Antioxidant"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p58",
    "commonName": "Indian Mulberry / Nunaa / Noni Tree",
    "scientificName": "Morinda coreia",
    "family": "Rubiaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/609388838/original.jpg",
    "description": "Cataloged campus species (Morinda coreia) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m171",
        "name": "Anthraquinones",
        "location": "Roots, Bark",
        "pubchemId": "6780",
        "smiles": "C1=CC=C2C(=C1)C(=O)C3=CC=CC=C3C2=O",
        "activities": [
          "Antimicrobial",
          "Antioxidant",
          "Anticancer"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m172",
        "name": "β-sitosterol",
        "location": "Bark, Leaves",
        "pubchemId": "222284",
        "smiles": "CC[C@H](CC[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Anti-inflammatory",
          "Antidiabetic",
          "Antioxidant"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m173",
        "name": "Scopoletin",
        "location": "Leaves, Fruits",
        "pubchemId": "5280460",
        "smiles": "COC1=C(C=C2C(=C1)C=CC(=O)O2)O",
        "activities": [
          "Antihypertensive",
          "Antioxidant",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p59",
    "commonName": "Jamaica Cherry / Strawberry Tree",
    "scientificName": "Muntingia calabura",
    "family": "Muntingiaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/604524627/original.jpg",
    "description": "Cataloged campus species (Muntingia calabura) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m174",
        "name": "quercetin",
        "location": "Leaves, Fruits",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anticancer",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m175",
        "name": "β-sitosterol",
        "location": "Bark, Leaves",
        "pubchemId": "222284",
        "smiles": "CC[C@H](CC[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Anti-inflammatory",
          "Antidiabetic",
          "Hepatoprotective"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m176",
        "name": "Lupeol",
        "location": "Bark, Fruits",
        "pubchemId": "259846",
        "smiles": "CC(=C)[C@@H]1CC[C@]2([C@H]1[C@H]3CC[C@@H]4[C@]5(CC[C@@H](C([C@@H]5CC[C@]4([C@@]3(CC2)C)C)(C)C)O)C)C",
        "activities": [
          "Anticancer",
          "Anti-inflammatory",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p60",
    "commonName": "Screw Pine / Thatch Screwpine",
    "scientificName": "Pandanus tectorius",
    "family": "Pandanaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/604709157/original.jpg",
    "description": "Cataloged campus species (Pandanus tectorius) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m177",
        "name": "β-sitosterol",
        "location": "Leaves, Fruit",
        "pubchemId": "222284",
        "smiles": "CC[C@H](CC[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Anticancer",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m178",
        "name": "Luteolin",
        "location": "Leaves",
        "pubchemId": "5280445",
        "smiles": "C1=CC(=C(C=C1C2=CC(=O)C3=C(C=C(C=C3O2)O)O)O)O",
        "activities": [
          "Anticancer",
          "Antioxidant",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m179",
        "name": "Pandanin",
        "location": "Leaves",
        "pubchemId": "",
        "smiles": "N/A",
        "activities": [
          "Antioxidant",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p61",
    "commonName": "Blue Passion Flower",
    "scientificName": "Passiflora caerulea",
    "family": "Passifloraceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/604744283/original.jpg",
    "description": "Cataloged campus species (Passiflora caerulea) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m180",
        "name": "Chrysin",
        "location": "Leaves, Flowers",
        "pubchemId": "5281607",
        "smiles": "C1=CC=C(C=C1)C2=CC(=O)C3=C(C=C(C=C3O2)O)O",
        "activities": [
          "Anxiolytic",
          "Sedative",
          "Antioxidant"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m181",
        "name": "Vitexin",
        "location": "Leaves",
        "pubchemId": "5280441",
        "smiles": "C1=CC(=CC=C1C2=CC(=O)C3=C(O2)C(=C(C=C3O)O)[C@H]4[C@@H]([C@H]([C@@H]([C@H](O4)CO)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Neuroprotective",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m182",
        "name": "Isovitexin",
        "location": "Leaves, Flowers",
        "pubchemId": "162350",
        "smiles": "C1=CC(=CC=C1C2=CC(=O)C3=C(O2)C=C(C(=C3O)[C@H]4[C@@H]([C@H]([C@@H]([C@H](O4)CO)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-anxiety",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p62",
    "commonName": "Stinking Passion Flower / Wild Water Lemon",
    "scientificName": "Passiflora foetida",
    "family": "Passifloraceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/605517881/original.jpg",
    "description": "Cataloged campus species (Passiflora foetida) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m183",
        "name": "Quercetin",
        "location": "Leaves, Fruits",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anticancer",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m184",
        "name": "Luteolin",
        "location": "Leaves, Flowers",
        "pubchemId": "5280445",
        "smiles": "C1=CC(=C(C=C1C2=CC(=O)C3=C(C=C(C=C3O2)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Antimicrobial",
          "Anticancer"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m185",
        "name": "Vitexin",
        "location": "Leaves",
        "pubchemId": "5280441",
        "smiles": "C1=CC(=CC=C1C2=CC(=O)C3=C(O2)C(=C(C=C3O)O)[C@H]4[C@@H]([C@H]([C@@H]([C@H](O4)CO)O)O)O)O",
        "activities": [
          "Anxiolytic",
          "Antioxidant",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p63",
    "commonName": "Copperpod / Yellow Flame Tree",
    "scientificName": "Peltophorum pterocarpum",
    "family": "Fabaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/604941303/original.jpg",
    "description": "Cataloged campus species (Peltophorum pterocarpum) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m186",
        "name": "Quercetin",
        "location": "Leaves, Bark",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Antimicrobial",
          "Anticancer"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m187",
        "name": "β-sitosterol",
        "location": "Bark, Seeds",
        "pubchemId": "222284",
        "smiles": "CC[C@H](CC[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Anti-inflammatory",
          "Antidiabetic",
          "Hepatoprotective"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m188",
        "name": "Lupeol",
        "location": "Leaves, Bark",
        "pubchemId": "259846",
        "smiles": "CC(=C)[C@@H]1CC[C@]2([C@H]1[C@H]3CC[C@@H]4[C@]5(CC[C@@H](C([C@@H]5CC[C@]4([C@@]3(CC2)C)C)(C)C)O)C)C",
        "activities": [
          "Anticancer",
          "Anti-inflammatory",
          "Analgesic"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p64",
    "commonName": "Mountain Date Palm",
    "scientificName": "Phoenix loureiroi",
    "family": "Arecaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/604704597/original.jpg",
    "description": "Cataloged campus species (Phoenix loureiroi) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m189",
        "name": "β-sitosterol",
        "location": "Fruits, Seeds",
        "pubchemId": "222284",
        "smiles": "CC[C@H](CC[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Anti-inflammatory",
          "Antidiabetic",
          "Hepatoprotective"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m190",
        "name": "quercetin",
        "location": "Leaves, Fruits",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Antimicrobial",
          "Anticancer"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m191",
        "name": "luteolin",
        "location": "Leaves, Fruits",
        "pubchemId": "5280445",
        "smiles": "C1=CC(=C(C=C1C2=CC(=O)C3=C(C=C(C=C3O2)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Antimicrobial",
          "Anticancer"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p65",
    "commonName": "Stonebreaker / Keezhanelli",
    "scientificName": "Phyllanthus amarus",
    "family": "Phyllanthaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/605083733/original.jpg",
    "description": "Cataloged campus species (Phyllanthus amarus) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m192",
        "name": "Phyllanthin",
        "location": "Whole plant",
        "pubchemId": "358901",
        "smiles": "COC[C@@H](CC1=CC(=C(C=C1)OC)OC)[C@H](CC2=CC(=C(C=C2)OC)OC)COC",
        "activities": [
          "Hepatoprotective",
          "Antioxidant",
          "Antiviral"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m193",
        "name": "Hypophyllanthin",
        "location": "Whole plant",
        "pubchemId": "182140",
        "smiles": "COC[C@@H]1CC2=CC(=C3C(=C2[C@@H]([C@H]1COC)C4=CC(=C(C=C4)OC)OC)OCO3)OC",
        "activities": [
          "Hepatoprotective",
          "Antioxidant",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m194",
        "name": "Quercetin",
        "location": "Leaves",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anticancer",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p66",
    "commonName": "Maderaspatensis Leaf Flower",
    "scientificName": "Phyllanthus maderaspatensis",
    "family": "Phyllanthaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/612410942/original.jpg",
    "description": "Cataloged campus species (Phyllanthus maderaspatensis) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m195",
        "name": "Phyllanthin",
        "location": "Whole plant",
        "pubchemId": "358901",
        "smiles": "COC[C@@H](CC1=CC(=C(C=C1)OC)OC)[C@H](CC2=CC(=C(C=C2)OC)OC)COC",
        "activities": [
          "Hepatoprotective",
          "Antioxidant",
          "Antiviral"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m196",
        "name": "Hypophyllanthin",
        "location": "Whole plant",
        "pubchemId": "182140",
        "smiles": "COC[C@@H]1CC2=CC(=C3C(=C2[C@@H]([C@H]1COC)C4=CC(=C(C=C4)OC)OC)OCO3)OC",
        "activities": [
          "Anti-inflammatory",
          "Hepatoprotective",
          "Antioxidant"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m197",
        "name": "Quercetin",
        "location": "Leaves, Stem",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anticancer",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p67",
    "commonName": "Black-Honey Shrub / Karuppu Nelli",
    "scientificName": "Phyllanthus reticulatus",
    "family": "Phyllanthaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/605536900/original.jpg",
    "description": "Cataloged campus species (Phyllanthus reticulatus) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m198",
        "name": "Gallic acid",
        "location": "Leaves, Bark, Roots, Fruits",
        "pubchemId": "370",
        "smiles": "C1=C(C=C(C(=C1O)O)O)C(=O)O",
        "activities": [
          "Antioxidant",
          "Antibacterial",
          "Hepatoprotective"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m199",
        "name": "Ellagic acid",
        "location": "Leaves, Stem",
        "pubchemId": "5281855",
        "smiles": "C1=C2C3=C(C(=C1O)O)OC(=O)C4=CC(=C(C(=C43)OC2=O)O)O",
        "activities": [
          "Anti-inflammatory",
          "Anticancer"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m200",
        "name": "Lupeol",
        "location": "Bark, Roots",
        "pubchemId": "259846",
        "smiles": "CC(=C)[C@@H]1CC[C@]2([C@H]1[C@H]3CC[C@@H]4[C@]5(CC[C@@H](C([C@@H]5CC[C@]4([C@@]3(CC2)C)C)(C)C)O)C)C",
        "activities": [
          "Antimicrobial",
          "Antidiabetic",
          "Hepatoprotective"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p68",
    "commonName": "Cape Leadwort / Blue Plumbago",
    "scientificName": "Plumbago auriculata",
    "family": "Plumbaginaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/605337377/original.jpg",
    "description": "Cataloged campus species (Plumbago auriculata) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m201",
        "name": "Plumbagin",
        "location": "Roots, Leaves",
        "pubchemId": "10205",
        "smiles": "CC1=CC(=O)C2=C(C1=O)C=CC=C2O",
        "activities": [
          "Anticancer",
          "Antimicrobial",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m202",
        "name": "Sitosterol",
        "location": "Leaves, Stem",
        "pubchemId": "222284",
        "smiles": "CC[C@H](CC[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Antioxidant",
          "Antidiabetic"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m203",
        "name": "Flavone",
        "location": "Flowers, Leaves",
        "pubchemId": "5481244",
        "smiles": "CC(=O)OCC1C(C(C(C(O1)OC2=CC(=C3C(=C2)OC(=CC3=O)C4=CC(=C(C=C4)O)OC)O)OC5C(C(C(C(O5)CO)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Hepatoprotective"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p69",
    "commonName": "White Frangipani",
    "scientificName": "Plumeria alba",
    "family": "Apocynaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/604839893/original.jpg",
    "description": "Cataloged campus species (Plumeria alba) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m204",
        "name": "Stigmasterol",
        "location": "Leaves, Seeds",
        "pubchemId": "5280794",
        "smiles": "CC[C@H](/C=C/[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Anti-inflammatory",
          "Anticancer",
          "Antidiabetic"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m205",
        "name": "Kaempferol",
        "location": "Flowers, Leaves",
        "pubchemId": "5280863",
        "smiles": "C1=CC(=CC=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O",
        "activities": [
          "Anticancer",
          "Antimicrobial",
          "Antioxidant"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m206",
        "name": "Lupeol",
        "location": "Leaves, Bark",
        "pubchemId": "259846",
        "smiles": "CC(=C)[C@@H]1CC[C@]2([C@H]1[C@H]3CC[C@@H]4[C@]5(CC[C@@H](C([C@@H]5CC[C@]4([C@@]3(CC2)C)C)(C)C)O)C)C",
        "activities": [
          "Anti-inflammatory",
          "Antimicrobial",
          "Hepatoprotective"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p70",
    "commonName": "Bridal Bouquet",
    "scientificName": "Plumeria pudica",
    "family": "Apocynaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/605660962/original.jpg",
    "description": "Cataloged campus species (Plumeria pudica) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m207",
        "name": "same three phytochemicals (69)",
        "location": "Unknown",
        "pubchemId": "",
        "smiles": "N/A",
        "activities": [],
        "category": "Phytochemical"
      },
      {
        "id": "m208",
        "name": "same three phytochemicals (69)",
        "location": "Unknown",
        "pubchemId": "",
        "smiles": "N/A",
        "activities": [],
        "category": "Phytochemical"
      },
      {
        "id": "m209",
        "name": "same three phytochemicals (69)",
        "location": "Unknown",
        "pubchemId": "",
        "smiles": "N/A",
        "activities": [],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p71",
    "commonName": "Geranium-Leaf Aralia",
    "scientificName": "Polyscias guilfoylei",
    "family": "Araliaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/609561694/original.jpg",
    "description": "Cataloged campus species (Polyscias guilfoylei) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m210",
        "name": "Stigmasterol",
        "location": "Leaves, Stem",
        "pubchemId": "5280794",
        "smiles": "CC[C@H](/C=C/[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Anti-inflammatory",
          "Antidiabetic",
          "Anticancer"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m211",
        "name": "Kaempferol",
        "location": "Leaves, Flowers",
        "pubchemId": "5280863",
        "smiles": "C1=CC(=CC=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Antimicrobial",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m212",
        "name": "β-Sitosterol",
        "location": "Leaves, Stem",
        "pubchemId": "222284",
        "smiles": "CC[C@H](CC[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Anticancer",
          "Anti-inflammatory",
          "Antimicrobial"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p72",
    "commonName": "Shield Aralia",
    "scientificName": "Polyscias scutellaria",
    "family": "Araliaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/608389605/original.jpg",
    "description": "Cataloged campus species (Polyscias scutellaria) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m213",
        "name": "same three phytochemicals (71)",
        "location": "Unknown",
        "pubchemId": "",
        "smiles": "N/A",
        "activities": [],
        "category": "Phytochemical"
      },
      {
        "id": "m214",
        "name": "same three phytochemicals (71)",
        "location": "Unknown",
        "pubchemId": "",
        "smiles": "N/A",
        "activities": [],
        "category": "Phytochemical"
      },
      {
        "id": "m215",
        "name": "same three phytochemicals (71)",
        "location": "Unknown",
        "pubchemId": "",
        "smiles": "N/A",
        "activities": [],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p73",
    "commonName": "Indian Beech / Pongam",
    "scientificName": "Pongamia pinnata",
    "family": "Fabaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/607084519/original.jpg",
    "description": "Cataloged campus species (Pongamia pinnata) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m216",
        "name": "Pongamol",
        "location": "Seeds, Leaves",
        "pubchemId": "689051",
        "smiles": "COC1=C(C=CC2=C1C=CO2)C(=O)CC(=O)C3=CC=CC=C3",
        "activities": [
          "Anticancer",
          "Antimicrobial",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m217",
        "name": "Karanjin",
        "location": "Seeds, Leaves",
        "pubchemId": "100633",
        "smiles": "COC1=C(OC2=C(C1=O)C=CC3=C2C=CO3)C4=CC=CC=C4",
        "activities": [
          "Antifungal",
          "Anticancer",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m218",
        "name": "kaempferol",
        "location": "Leaves, Bark",
        "pubchemId": "5280863",
        "smiles": "C1=CC(=CC=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Antimicrobial",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p74",
    "commonName": "Mesquite / Vilayati Keekar",
    "scientificName": "Prosopis juliflora",
    "family": "Fabaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/610684008/original.jpg",
    "description": "Cataloged campus species (Prosopis juliflora) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m219",
        "name": "Juliflorine",
        "location": "Leaves, Bark",
        "pubchemId": "127122",
        "smiles": "CC1C(CCC(N1)CCCCCCCCCCC2C3CCCN3CC=C2CCCCCCCCCCC4CCC(C(N4)C)O)O",
        "activities": [
          "Antimicrobial",
          "Anticancer",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m220",
        "name": "Quercetin",
        "location": "Leaves, Flowers",
        "pubchemId": "5280343",
        "smiles": "C1=CC(=C(C=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Antimicrobial",
          "Anticancer"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m221",
        "name": "Kaempferol",
        "location": "Leaves, Bark",
        "pubchemId": "5280863",
        "smiles": "C1=CC(=CC=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Anti-inflammatory",
          "Anticancer"
        ],
        "category": "Phytochemical"
      }
    ]
  },
  {
    "id": "p75",
    "commonName": "Yellow-Vein Eranthemum",
    "scientificName": "Pseuderanthemum maculatum",
    "family": "Acanthaceae",
    "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/607435491/original.jpg",
    "description": "Cataloged campus species (Pseuderanthemum maculatum) registered in HITS Department of Biotechnology database.",
    "traditionalUses": [
      "Documented in HITS Department of Biotechnology campus flora catalog."
    ],
    "metabolites": [
      {
        "id": "m222",
        "name": "Stigmasterol",
        "location": "Leaves, Stem",
        "pubchemId": "5280794",
        "smiles": "CC[C@H](/C=C/[C@@H](C)[C@H]1CC[C@@H]2[C@@]1(CC[C@H]3[C@H]2CC=C4[C@@]3(CC[C@@H](C4)O)C)C)C(C)C",
        "activities": [
          "Anti-inflammatory",
          "Anticancer",
          "Antidiabetic"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m223",
        "name": "Kaempferol",
        "location": "Leaves, Flowers",
        "pubchemId": "5280863",
        "smiles": "C1=CC(=CC=C1C2=C(C(=O)C3=C(C=C(C=C3O2)O)O)O)O",
        "activities": [
          "Antioxidant",
          "Antimicrobial",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      },
      {
        "id": "m224",
        "name": "Luteolin",
        "location": "Leaves, Flowers",
        "pubchemId": "5280445",
        "smiles": "C1=CC(=C(C=C1C2=CC(=O)C3=C(C=C(C=C3O2)O)O)O)O",
        "activities": [
          "Anticancer",
          "Antioxidant",
          "Anti-inflammatory"
        ],
        "category": "Phytochemical"
      }
    ]
  }
];
