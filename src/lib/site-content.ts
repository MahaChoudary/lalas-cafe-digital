import type {
  CafeEvent,
  GalleryImage,
  MenuCategory,
  MenuItem,
  Offer,
  SiteSettings,
} from "./types";

import cafe1 from "@/assets/cafe-1.jpg.asset.json";
import cafe2 from "@/assets/cafe-2.jpg.asset.json";
import cafe3 from "@/assets/cafe-3.jpg.asset.json";
import cafe5 from "@/assets/cafe-5.jpg.asset.json";
import cafe6 from "@/assets/cafe-6.jpg.asset.json";
import cafe7 from "@/assets/cafe-7.jpg.asset.json";

/**
 * SINGLE SOURCE OF TRUTH for content the cafe supplied.
 * Anything the cafe has not yet supplied is left blank on purpose so it can be
 * filled in from the admin area instead of being invented here.
 */

export const photos = {
  entrance: cafe1.url,
  helipad: cafe2.url,
  cabana: cafe3.url,
  courtyard: cafe5.url,
  terrace: cafe6.url,
  lounge: cafe7.url,
};

export const siteSettings: SiteSettings = {
  cafeName: "Lala's Cafe",
  tagline: "Daska's night garden for chai, food and long conversations.",
  phone: "+92 341 4067238",
  whatsapp: "923414067238",
  email: "",
  addressLine: "", // awaiting the cafe's exact street address
  city: "Daska, Punjab",
  mapsUrl: "",
  hours: [
    { label: "Breakfast", value: "7:00 AM onwards" },
    { label: "Cafe hours", value: "2:00 PM – 2:00 AM, daily" },
  ],
  socials: [
    { label: "TikTok", url: "https://www.tiktok.com/@lalascafedaska" },
    { label: "Facebook", url: "" }, // awaiting the cafe's page link
  ],
};

export const menuCategories: MenuCategory[] = [
  { id: "cat-breakfast", slug: "breakfast", name: "Breakfast", description: "Served from 7:00 AM.", sortOrder: 1 },
  { id: "cat-hot", slug: "hot-drinks", name: "Hot Drinks", description: "Chai, coffee and everything warm.", sortOrder: 2 },
  { id: "cat-cold", slug: "cold-drinks", name: "Cold Drinks", description: "Shakes, sodas and coolers.", sortOrder: 3 },
  { id: "cat-fastfood", slug: "fast-food", name: "Fast Food", description: "Burgers, wraps, fries and more.", sortOrder: 4 },
  { id: "cat-mains", slug: "mains", name: "Mains", description: "Full plates for a proper sit-down.", sortOrder: 5 },
  { id: "cat-desserts", slug: "desserts", name: "Desserts", description: "Sweet endings.", sortOrder: 6 },
];

/**
 * The cafe's real menu has not been supplied yet. These are structural
 * placeholders — no prices are invented, and every row is flagged so the site
 * clearly says "coming from the kitchen" instead of stating a false fact.
 * Replace them from the admin area once the backend is connected.
 */
export const menuItems: MenuItem[] = [
  ["cat-breakfast", "Breakfast plate", ["comfort", "savoury"]],
  ["cat-breakfast", "Morning paratha", ["comfort", "savoury"]],
  ["cat-hot", "Chai", ["comfort", "energy"]],
  ["cat-hot", "Coffee", ["energy"]],
  ["cat-cold", "Milkshake", ["sweet", "refreshing"]],
  ["cat-cold", "Fresh cooler", ["refreshing"]],
  ["cat-fastfood", "Burger", ["savoury", "comfort"]],
  ["cat-fastfood", "Loaded fries", ["savoury"]],
  ["cat-mains", "House platter", ["savoury", "comfort"]],
  ["cat-desserts", "Dessert of the day", ["sweet"]],
].map(([categoryId, name, moods], index) => ({
  id: `item-${index + 1}`,
  categoryId: categoryId as string,
  name: name as string,
  description: "Details and pricing are being added by the Lala's Cafe team.",
  price: null,
  isAvailable: true,
  isFeatured: index < 3,
  isBestseller: false,
  isNew: false,
  moods: moods as MenuItem["moods"],
  sortOrder: index + 1,
  isPlaceholder: true,
}));

export const galleryImages: GalleryImage[] = [
  { id: "g1", url: photos.helipad, alt: "Lit-up wooden helicopter seating installation at Lala's Cafe", caption: "The helicopter booth", tag: "ambience", sortOrder: 1 },
  { id: "g2", url: photos.cabana, alt: "White slatted private cabana with neon trim and hanging plants", caption: "Private cabanas", tag: "ambience", sortOrder: 2 },
  { id: "g3", url: photos.lounge, alt: "Brown leather booths in front of a painted street-art mural", caption: "Mural lounge", tag: "ambience", sortOrder: 3 },
  { id: "g4", url: photos.terrace, alt: "Terrace walkway strung with star and moon fairy lights", caption: "Star-light terrace", tag: "ambience", sortOrder: 4 },
  { id: "g5", url: photos.courtyard, alt: "Colourful pergola bench under neon light beside a calligraphy wall piece", caption: "Courtyard pergola", tag: "ambience", sortOrder: 5 },
  { id: "g6", url: photos.entrance, alt: "Entrance hallway with a vine-covered wooden ceiling and warm pendant lights", caption: "The welcome", tag: "ambience", sortOrder: 6 },
];

/** Empty until the cafe adds real listings from the admin area. */
export const cafeEvents: CafeEvent[] = [];
export const offers: Offer[] = [];
