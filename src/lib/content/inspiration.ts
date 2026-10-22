export type InspirationCategory =
  | "Red and Purple"
  | "Light and Neutral"
  | "Grey and Black"
  | "Brown and Bronze"
  | "Yellow and Warm";

export const inspirationCategories: InspirationCategory[] = [
  "Red and Purple",
  "Light and Neutral",
  "Grey and Black",
  "Brown and Bronze",
  "Yellow and Warm",
];

export type InspirationBlend = {
  id: string;
  category: InspirationCategory;
  name: string;
  /** Thumbnail used in the Inspirations grid. */
  image: string;
  /** Larger photo used on the blend's individual detail page. */
  detailImage: string;
  vubaUrl: string;
};

/**
 * General, honest descriptions for each colour family. These describe the
 * category of blend rather than inventing specific claims about any one
 * named blend we haven't individually assessed.
 */
export const inspirationCategoryDescriptions: Record<
  InspirationCategory,
  string
> = {
  "Red and Purple":
    "A bold colour family combining warm reds, deep purples and complementary aggregate tones, for a striking, characterful driveway or patio finish.",
  "Light and Neutral":
    "Soft, light aggregate blends in neutral stone tones, well suited to properties looking for a bright, timeless finish that complements most exteriors.",
  "Grey and Black":
    "Contemporary blends in cool greys and charcoal tones, a popular choice for a sleek, modern driveway finish.",
  "Brown and Bronze":
    "Warm, earthy aggregate blends in browns and bronze tones that suit traditional, rural and countryside properties.",
  "Yellow and Warm":
    "Sunny, warm-toned aggregate blends that bring a bright, inviting feel to driveways, patios and pathways.",
};

export function getInspirationBlendById(id: string) {
  return inspirationBlends.find((blend) => blend.id === id);
}

/**
 * Colour and aggregate blend inspiration, used under licence from VUBA
 * (vubasurfaces.co.uk) as part of LEGG Surfacing's VUBA accreditation.
 * Photography and blend names belong to VUBA Chemical Innovations Ltd.
 * Each blend links back to the official VUBA product page.
 */
export const inspirationBlends: InspirationBlend[] = [
  { id: "red-purple-milano-marble", category: "Red and Purple", name: "Milano Marble", image: "/inspiration/red-purple-milano-marble.jpg", detailImage: "/inspiration/large/red-purple-milano-marble.jpg", vubaUrl: "https://www.vubasurfaces.co.uk/products/new-milano-marble" },
  { id: "red-purple-alhambra", category: "Red and Purple", name: "Alhambra", image: "/inspiration/red-purple-alhambra.jpg", detailImage: "/inspiration/large/red-purple-alhambra.jpg", vubaUrl: "https://www.vubasurfaces.co.uk/products/alhambraold" },
  { id: "red-purple-houston", category: "Red and Purple", name: "Houston", image: "/inspiration/red-purple-houston.jpg", detailImage: "/inspiration/large/red-purple-houston.webp", vubaUrl: "https://www.vubasurfaces.co.uk/products/houston-old" },
  { id: "red-purple-canyon-stone", category: "Red and Purple", name: "Canyon Stone", image: "/inspiration/red-purple-canyon-stone.jpg", detailImage: "/inspiration/large/red-purple-canyon-stone.png", vubaUrl: "https://www.vubasurfaces.co.uk/products/canyon-stone-9" },
  { id: "red-purple-purple-rain", category: "Red and Purple", name: "Purple Rain", image: "/inspiration/red-purple-purple-rain.jpg", detailImage: "/inspiration/large/red-purple-purple-rain.jpg", vubaUrl: "https://www.vubasurfaces.co.uk/products/purple-rainold" },
  { id: "red-purple-da-vinci", category: "Red and Purple", name: "Da Vinci", image: "/inspiration/red-purple-da-vinci.jpg", detailImage: "/inspiration/large/red-purple-da-vinci.jpg", vubaUrl: "https://www.vubasurfaces.co.uk/products/da-vinciold" },
  { id: "red-purple-pompeii", category: "Red and Purple", name: "Pompeii", image: "/inspiration/red-purple-pompeii.jpg", detailImage: "/inspiration/large/red-purple-pompeii.webp", vubaUrl: "https://www.vubasurfaces.co.uk/products/pompeii111" },

  { id: "light-neutral-alaskan-tundra", category: "Light and Neutral", name: "Alaskan Tundra", image: "/inspiration/light-neutral-alaskan-tundra.jpg", detailImage: "/inspiration/large/light-neutral-alaskan-tundra.jpg", vubaUrl: "https://www.vubasurfaces.co.uk/products/alaskan-tundra" },
  { id: "light-neutral-carthage", category: "Light and Neutral", name: "Carthage", image: "/inspiration/large/light-neutral-carthage.jpg", detailImage: "/inspiration/large/light-neutral-carthage.jpg", vubaUrl: "https://www.vubasurfaces.co.uk/products/carthage-stone" },
  { id: "light-neutral-huka-falls", category: "Light and Neutral", name: "Huka Falls", image: "/inspiration/light-neutral-huka-falls.jpg", detailImage: "/inspiration/large/light-neutral-huka-falls.jpg", vubaUrl: "https://www.vubasurfaces.co.uk/products/new-huka-falls-old" },
  { id: "light-neutral-antigua", category: "Light and Neutral", name: "Antigua", image: "/inspiration/light-neutral-antigua.jpg", detailImage: "/inspiration/large/light-neutral-antigua.png", vubaUrl: "https://www.vubasurfaces.co.uk/products/antigua-old" },
  { id: "light-neutral-duomo", category: "Light and Neutral", name: "Duomo", image: "/inspiration/light-neutral-duomo.jpg", detailImage: "/inspiration/large/light-neutral-duomo.jpg", vubaUrl: "https://www.vubasurfaces.co.uk/products/duo" },
  { id: "light-neutral-tennessee", category: "Light and Neutral", name: "Tennessee", image: "/inspiration/light-neutral-tennessee.jpg", detailImage: "/inspiration/large/light-neutral-tennessee.jpg", vubaUrl: "https://www.vubasurfaces.co.uk/products/tennessee-old" },
  { id: "light-neutral-bilsdon-park", category: "Light and Neutral", name: "Bilsdon Park", image: "/inspiration/light-neutral-bilsdon-park.jpg", detailImage: "/inspiration/large/light-neutral-bilsdon-park.jpg", vubaUrl: "https://www.vubasurfaces.co.uk/products/bilsdon-park-old" },
  { id: "light-neutral-niagara-falls", category: "Light and Neutral", name: "Niagara Falls", image: "/inspiration/light-neutral-niagara-falls.jpg", detailImage: "/inspiration/large/light-neutral-niagara-falls.png", vubaUrl: "https://www.vubasurfaces.co.uk/products/niag" },

  { id: "grey-black-new-manhattan", category: "Grey and Black", name: "New Manhattan", image: "/inspiration/large/grey-black-new-manhattan.jpg", detailImage: "/inspiration/large/grey-black-new-manhattan.jpg", vubaUrl: "https://www.vubasurfaces.co.uk/products/new-manhattan" },
  { id: "grey-black-black-granite", category: "Grey and Black", name: "Black Granite", image: "/inspiration/grey-black-black-granite.jpg", detailImage: "/inspiration/large/grey-black-black-granite.jpg", vubaUrl: "https://www.vubasurfaces.co.uk/products/palladium-old" },
  { id: "grey-black-poseidon", category: "Grey and Black", name: "Poseidon", image: "/inspiration/grey-black-poseidon.png", detailImage: "/inspiration/large/grey-black-poseidon.webp", vubaUrl: "https://www.vubasurfaces.co.uk/products/po" },
  { id: "grey-black-new-palazzo", category: "Grey and Black", name: "New Palazzo", image: "/inspiration/grey-black-new-palazzo.jpg", detailImage: "/inspiration/large/grey-black-new-palazzo.webp", vubaUrl: "https://www.vubasurfaces.co.uk/products/palazzo" },
  { id: "grey-black-rockefeller", category: "Grey and Black", name: "Rockefeller", image: "/inspiration/grey-black-rockefeller.jpg", detailImage: "/inspiration/large/grey-black-rockefeller.jpg", vubaUrl: "https://www.vubasurfaces.co.uk/products/rockefeller-old" },
  { id: "grey-black-sydney-harbour", category: "Grey and Black", name: "Sydney Harbour", image: "/inspiration/grey-black-sydney-harbour.jpg", detailImage: "/inspiration/large/grey-black-sydney-harbour.jpg", vubaUrl: "https://www.vubasurfaces.co.uk/products/sydney-harbour-old" },
  { id: "grey-black-original-manhattan", category: "Grey and Black", name: "Original Manhattan", image: "/inspiration/grey-black-original-manhattan.jpg", detailImage: "/inspiration/large/grey-black-original-manhattan.webp", vubaUrl: "https://www.vubasurfaces.co.uk/products/manhattan" },

  { id: "brown-bronze-huka-falls", category: "Brown and Bronze", name: "Huka Falls", image: "/inspiration/brown-bronze-huka-falls.jpg", detailImage: "/inspiration/large/brown-bronze-huka-falls.jpg", vubaUrl: "https://www.vubasurfaces.co.uk/products/new-huka-falls-old" },
  { id: "brown-bronze-ardennes", category: "Brown and Bronze", name: "Ardennes", image: "/inspiration/brown-bronze-ardennes.jpg", detailImage: "/inspiration/large/brown-bronze-ardennes.jpg", vubaUrl: "https://www.vubasurfaces.co.uk/products/ardnennes-old" },
  { id: "brown-bronze-havana", category: "Brown and Bronze", name: "Havana", image: "/inspiration/brown-bronze-havana.jpg", detailImage: "/inspiration/large/brown-bronze-havana.png", vubaUrl: "https://www.vubasurfaces.co.uk/products/havanaold" },
  { id: "brown-bronze-windsor-park", category: "Brown and Bronze", name: "Windsor Park", image: "/inspiration/brown-bronze-windsor-park.jpg", detailImage: "/inspiration/large/brown-bronze-windsor-park.jpg", vubaUrl: "https://www.vubasurfaces.co.uk/products/windsor-park-old" },
  { id: "brown-bronze-canberra", category: "Brown and Bronze", name: "Canberra", image: "/inspiration/brown-bronze-canberra.jpg", detailImage: "/inspiration/large/brown-bronze-canberra.png", vubaUrl: "https://www.vubasurfaces.co.uk/products/canberra-9" },
  { id: "brown-bronze-catalina", category: "Brown and Bronze", name: "Catalina", image: "/inspiration/brown-bronze-catalina.jpg", detailImage: "/inspiration/large/brown-bronze-catalina.jpg", vubaUrl: "https://www.vubasurfaces.co.uk/products/cat" },

  { id: "yellow-warm-yorkshire-tweed", category: "Yellow and Warm", name: "Yorkshire Tweed", image: "/inspiration/yellow-warm-yorkshire-tweed.jpg", detailImage: "/inspiration/large/yellow-warm-yorkshire-tweed.jpg", vubaUrl: "https://www.vubasurfaces.co.uk/products/yorkshire-tweedold" },
  { id: "yellow-warm-la-rochelle", category: "Yellow and Warm", name: "La Rochelle", image: "/inspiration/yellow-warm-la-rochelle.jpg", detailImage: "/inspiration/large/yellow-warm-la-rochelle.png", vubaUrl: "https://www.vubasurfaces.co.uk/products/la" },
  { id: "yellow-warm-pont-du-gard", category: "Yellow and Warm", name: "Pont du Gard", image: "/inspiration/yellow-warm-pont-du-gard.jpg", detailImage: "/inspiration/large/yellow-warm-pont-du-gard.jpg", vubaUrl: "https://www.vubasurfaces.co.uk/products/pont-du-gard-old" },
  { id: "yellow-warm-abbey-lodge", category: "Yellow and Warm", name: "Abbey Lodge", image: "/inspiration/yellow-warm-abbey-lodge.jpg", detailImage: "/inspiration/large/yellow-warm-abbey-lodge.webp", vubaUrl: "https://www.vubasurfaces.co.uk/products/abbey-lodgeold" },
  { id: "yellow-warm-breckenridge", category: "Yellow and Warm", name: "Breckenridge", image: "/inspiration/yellow-warm-breckenridge.jpg", detailImage: "/inspiration/large/yellow-warm-breckenridge.jpg", vubaUrl: "https://www.vubasurfaces.co.uk/products/breckenridge-old" },
  { id: "yellow-warm-dolorosa", category: "Yellow and Warm", name: "Dolorosa", image: "/inspiration/yellow-warm-dolorosa.jpg", detailImage: "/inspiration/large/yellow-warm-dolorosa.png", vubaUrl: "https://www.vubasurfaces.co.uk/products/dolorosa-9" },
  { id: "yellow-warm-shirebrook", category: "Yellow and Warm", name: "Shirebrook", image: "/inspiration/yellow-warm-shirebrook.jpg", detailImage: "/inspiration/large/yellow-warm-shirebrook.jpg", vubaUrl: "https://www.vubasurfaces.co.uk/products/shirebrooko" },
];
