# Swaadarpan

A static-first handmade crochet and home décor storefront built with Next.js App Router, JavaScript, and Tailwind CSS. Product and category routes are generated from local data. There is no checkout, payment, or backend integration.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Validate the project with `npm run lint` and `npm run build`.

## Before launch

1. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain. Set email, WhatsApp, and Instagram variables only to verified business contact details.
2. Replace the illustrative SVG files in `public/images/` with approved product photography. Update filenames, image alt text, and entries under `src/data/products.js` and `src/data/categories.js` together.
3. Replace sample product descriptions, materials, dimensions, and care notes with verified information. Add prices only after they are confirmed. Current items are explicitly marked as samples and do not represent inventory or availability.
4. Review the editable policy templates with the business and appropriate legal counsel before publishing.
5. Add the brand's own story and any verified founder, location, process, or material details where indicated.

## Structure

- `app/`: App Router pages, dynamic product/category/inspiration routes, metadata, sitemap, and robots.
- `src/data/`: local JavaScript product and category catalogs.
- `src/components/`: shared navigation, footer, breadcrumbs, cards, and policy layout.
- `src/lib/seo.js`: configurable site origin and JSON-LD helpers.
- `public/images/`: local illustrative placeholder artwork, not product photography.

The default canonical origin is `https://swaadarpan.example`; configure `NEXT_PUBLIC_SITE_URL` before deployment. No reviews, prices, stock claims, customer contact details, or legally binding commitments are fabricated.
