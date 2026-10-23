import PolicyPage from "@/src/components/PolicyPage";
export const metadata = {
  title: "Terms of Use",
  description:
    "Review the editable Swaadarpan terms template and confirm the applicable business details.",
  alternates: { canonical: "/terms" },
};
export default function TermsPage() {
  return (
    <PolicyPage
      eyebrow="The practical details"
      title="Terms of use"
      intro="Terms for browsing and enquiring about Swaadarpan products."
      sections={[
        {
          title: "About the website",
          body: "[Insert legal business name, registration details, and jurisdiction.]",
        },
        {
          title: "Product information",
          body: "Product descriptions and images on this site are sample placeholders until confirmed by the business. Add terms covering accurate product details, custom work, and availability.]",
        },
        {
          title: "Orders and payment",
          body: "[Describe the actual order acceptance, pricing, payment, and cancellation process once established. This site currently has no checkout.]",
        },
        {
          title: "Contact",
          body: "Use the verified contact methods listed on the Contact page once configured.",
        },
      ]}
    />
  );
}
