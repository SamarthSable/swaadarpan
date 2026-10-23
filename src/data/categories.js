export const categories = [
  {
    slug: "crochet-flowers",
    name: "Crochet Flowers",
    title: "Crochet Flowers & Bouquets",
    intro:
      "Colourful handmade crochet flowers and keepsake bouquets, shaped one stitch at a time.",
    image: "/images/flower.svg",
  },
  {
    slug: "crochet-bags",
    name: "Crochet Bags",
    title: "Crochet Bags & Accessories",
    intro:
      "Textured crochet bags and small accessories made to bring a little character to everyday outings.",
    image: "/images/bag.svg",
  },
  {
    slug: "home-decor",
    name: "Home Décor",
    title: "Handmade Crochet Home Décor",
    intro:
      "Soft, thoughtful crochet details for living spaces, shelves, and favourite corners at home.",
    image: "/images/cushion.svg",
  },
  {
    slug: "wall-hangings",
    name: "Wall Hangings",
    title: "Crochet Wall Hangings",
    intro:
      "Artisan-crafted wall accents that add texture and a personal touch to your space.",
    image: "/images/wall.svg",
  },
  {
    slug: "handmade-gifts",
    name: "Handmade Gifts",
    title: "Thoughtful Handmade Gifts",
    intro:
      "Small handmade finds and giftable details for birthdays, celebrations, and just because.",
    image: "/images/gift.svg",
  },
];

export function getCategory(slug) {
  return categories.find((category) => category.slug === slug);
}
