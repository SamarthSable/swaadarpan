export const products = [
  {
    id: "demo-01",
    slug: "red-crochet-flower-bouquet",
    name: "Red Crochet Flower Bouquet",
    category: "crochet-flowers",
    shortDescription: "A bright bunch of handmade red crochet blooms.",
    description:
      "A handmade bouquet of red crochet flowers, photographed against a warm yellow backdrop.",
    images: ["/images/crochet-red-flower-bouquet.jpeg"],
    altText: "Hand holding a bouquet of red crochet flowers",
    materials: "Confirm materials",
    dimensions: "Confirm dimensions",
    careInstructions: "Confirm care instructions",
    featured: true,
  },
  {
    id: "demo-02",
    slug: "black-and-white-crochet-tote",
    name: "Black and White Crochet Tote",
    category: "crochet-bags",
    shortDescription: "A striped crochet tote with matching handles.",
    description:
      "A black and cream striped crochet tote photographed on grass.",
    images: ["/images/black-white-crochet-tote.jpeg"],
    altText: "Black and cream striped crochet tote bag on grass",
    materials: "Confirm materials",
    dimensions: "Confirm dimensions",
    careInstructions: "Confirm care instructions",
    featured: true,
  },
  {
    id: "demo-03",
    slug: "crochet-flower-curtain-tiebacks",
    name: "Crochet Flower Curtain Tiebacks",
    category: "home-decor",
    shortDescription:
      "Colourful crochet ties to gather curtains with a floral touch.",
    description:
      "A collection of handmade crochet curtain ties decorated with flowers and playful shapes.",
    images: ["/images/crochet-flower-curtain-tiebacks.jpeg"],
    altText:
      "Four crochet curtain tiebacks with daisy, rose, bell, and pink flower details",
    materials: "Confirm materials",
    dimensions: "Confirm dimensions",
    careInstructions: "Confirm care instructions",
    featured: true,
  },
  {
    id: "demo-04",
    slug: "crochet-cake-keychains",
    name: "Crochet Cake Keychains",
    category: "handmade-gifts",
    shortDescription: "Tiny colourful crochet cake charms for keys or bags.",
    description:
      "Three miniature spiral cake-shaped crochet charms attached to key rings.",
    images: ["/images/crochet-cake-keychains.jpeg"],
    altText: "Three colourful crochet cake charms on metal key rings",
    materials: "Confirm materials",
    dimensions: "Confirm dimensions",
    careInstructions: "Confirm care instructions",
    featured: true,
  },
  {
    id: "demo-05",
    slug: "colourful-crochet-wall-hanging",
    name: "Colourful Crochet Wall Hanging",
    category: "wall-hangings",
    shortDescription:
      "A strand of colourful crochet circles for a bright corner.",
    description:
      "A handmade vertical hanging made from colourful crochet circles and tassels.",
    images: ["/images/crochet-circle-wall-hanging.jpeg"],
    altText: "Colourful crochet circles hanging vertically beside a window",
    materials: "Confirm materials",
    dimensions: "Confirm dimensions",
    careInstructions: "Confirm care instructions",
    featured: false,
  },
  {
    id: "demo-06",
    slug: "crochet-mini-drawstring-pouches",
    name: "Crochet Mini Drawstring Pouches",
    category: "handmade-gifts",
    shortDescription:
      "Little colourful mesh pouches for small everyday essentials.",
    description:
      "A set of small crochet mesh drawstring pouches shown in a range of bright colours.",
    images: ["/images/crochet-mini-drawstring-pouches.jpeg"],
    altText:
      "Colourful crochet mesh drawstring pouches arranged around a small case",
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
