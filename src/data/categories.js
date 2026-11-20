export const categories = [
  {
    slug: "crochet-flowers",
    name: "Crochet Flowers",
    title: "Crochet Flowers & Bouquets",
    intro:
      "Colourful handmade crochet flowers and keepsake bouquets, shaped one stitch at a time.",
    image: "/images/crochet-red-flower-bouquet.jpeg",
  },
  {
    slug: "crochet-bags",
    name: "Crochet Bags",
    title: "Crochet Bags & Accessories",
    intro:
      "Textured crochet bags and small accessories made to bring a little character to everyday outings.",
    image: "/images/black-white-crochet-tote.jpeg",
  },
  {
    slug: "home-decor",
    name: "Home Decor",
    title: "Handmade Crochet Home Decor",
    intro:
      "Soft, thoughtful crochet details for living spaces, shelves, and favourite corners at home.",
    image: "/images/crochet-flower-curtain-tiebacks.jpeg",
  },
  {
    slug: "wall-hangings",
    name: "Wall Hangings",
    title: "Crochet Wall Hangings",
    intro:
      "Artisan-crafted wall accents that add texture and a personal touch to your space.",
    image: "/images/crochet-circle-wall-hanging.jpeg",
  },
  {
    slug: "handmade-gifts",
    name: "Handmade Gifts",
    title: "Thoughtful Handmade Gifts",
    intro:
      "Small handmade finds and giftable details for birthdays, celebrations, and just because.",
    image: "/images/crochet-bow-hair-clips.jpeg",
  },
];

export function getCategory(slug) {
  return categories.find((category) => category.slug === slug);
}
