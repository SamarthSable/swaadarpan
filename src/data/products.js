export const products = [
  {
    id: "demo-01",
    slug: "pastel-crochet-flower-bouquet",
    name: "Pastel Crochet Flower Bouquet",
    category: "crochet-flowers",
    shortDescription: "A cheerful arrangement of soft-coloured crochet blooms.",
    description:
      "A sample product concept featuring handmade crochet flowers in a gentle pastel palette. Replace this sample description with verified product details before publishing.",
    images: ["/images/flower.svg"],
    altText: "Illustration of a pastel crochet flower bouquet",
    materials: "Confirm materials",
    dimensions: "Confirm dimensions",
    careInstructions: "Confirm care instructions",
    featured: true,
  },
  {
    id: "demo-02",
    slug: "handmade-crochet-tote-bag",
    name: "Handmade Crochet Tote Bag",
    category: "crochet-bags",
    shortDescription: "A roomy handmade crochet bag with tactile stitchwork.",
    description:
      "A sample product concept for a crochet tote. Confirm colour, materials, dimensions, and final product details before publishing.",
    images: ["/images/bag.svg"],
    altText: "Illustration of a handmade crochet tote bag",
    materials: "Confirm materials",
    dimensions: "Confirm dimensions",
    careInstructions: "Confirm care instructions",
    featured: true,
  },
  {
    id: "demo-03",
    slug: "textured-crochet-cushion-cover",
    name: "Textured Crochet Cushion Cover",
    category: "home-decor",
    shortDescription: "A cosy crochet accent for a favourite chair or sofa.",
    description:
      "A sample product concept for textured crochet home décor. Confirm sizing, materials, and whether an inner cushion is included before publishing.",
    images: ["/images/cushion.svg"],
    altText: "Illustration of a textured crochet cushion cover",
    materials: "Confirm materials",
    dimensions: "Confirm dimensions",
    careInstructions: "Confirm care instructions",
    featured: true,
  },
  {
    id: "demo-04",
    slug: "crochet-daisy-keychain",
    name: "Crochet Daisy Keychain",
    category: "handmade-gifts",
    shortDescription:
      "A small daisy detail for keys, bags, or a thoughtful gift.",
    description:
      "A sample product concept for a crochet daisy accessory. Confirm materials and available colour options before publishing.",
    images: ["/images/gift.svg"],
    altText: "Illustration of a handmade crochet daisy keychain",
    materials: "Confirm materials",
    dimensions: "Confirm dimensions",
    careInstructions: "Confirm care instructions",
    featured: true,
  },
  {
    id: "demo-05",
    slug: "artisan-crochet-wall-hanging",
    name: "Artisan Crochet Wall Hanging",
    category: "wall-hangings",
    shortDescription: "A soft, textural accent made for a quiet corner.",
    description:
      "A sample wall-hanging concept. Replace with accurate construction, materials, and dimensions before publishing.",
    images: ["/images/wall.svg"],
    altText: "Illustration of a handmade crochet wall hanging",
    materials: "Confirm materials",
    dimensions: "Confirm dimensions",
    careInstructions: "Confirm care instructions",
    featured: false,
  },
  {
    id: "demo-06",
    slug: "handmade-crochet-gift-set",
    name: "Handmade Crochet Gift Set",
    category: "handmade-gifts",
    shortDescription: "A considered collection of small handmade details.",
    description:
      "A sample gift-set concept. Confirm exactly which products are included and any packaging details before publishing.",
    images: ["/images/gift.svg"],
    altText: "Illustration of a handmade crochet gift set",
    materials: "Confirm materials",
    dimensions: "Confirm dimensions",
    careInstructions: "Confirm care instructions",
    featured: false,
  },
];

export function getProduct(slug) {
  return products.find((product) => product.slug === slug);
}
export function getProductsByCategory(slug) {
  return products.filter((product) => product.category === slug);
}
export function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}
