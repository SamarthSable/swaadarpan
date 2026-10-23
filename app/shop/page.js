import ShopCatalog from "@/src/components/ShopCatalog";
import { categories } from "@/src/data/categories";
import { products } from "@/src/data/products";

export const metadata = {
  title: "Shop Handmade Crochet & Décor",
  description:
    "Browse sample product ideas across crochet flowers, bags, home décor, wall hangings, and handmade gifts.",
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  return (
    <main>
      <header className="page-intro">
        <p className="eyebrow">The Swaadarpan collection</p>
        <h1>
          Made with care,
          <br />
          found with joy.
        </h1>
        <p>
          Explore our sample collection of crochet flowers, accessories, home
          details, and gifts. Product examples are not confirmed inventory.
        </p>
      </header>
      <ShopCatalog categories={categories} products={products} />
    </main>
  );
}
