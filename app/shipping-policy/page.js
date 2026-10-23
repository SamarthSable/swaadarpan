import PolicyPage from "@/src/components/PolicyPage";
export const metadata = {
  title: "Shipping Policy",
  description:
    "Review Swaadarpan's editable shipping policy template and the details to confirm before launch.",
  alternates: { canonical: "/shipping-policy" },
};
export default function ShippingPolicy() {
  return (
    <PolicyPage
      eyebrow="The practical details"
      title="Shipping policy"
      intro="Shipping information for Swaadarpan orders."
      sections={[
        {
          title: "Where we ship",
          body: "[Confirm shipping regions and any delivery exclusions.]",
        },
        {
          title: "Processing and delivery",
          body: "[Confirm order processing times, estimated delivery windows, carriers, and tracking availability.]",
        },
        {
          title: "Shipping costs",
          body: "[Confirm shipping charges, thresholds, taxes, and any additional fees.]",
        },
        {
          title: "Questions",
          body: "For questions about a specific order, contact us using the verified contact details on the Contact page.",
        },
      ]}
    />
  );
}
