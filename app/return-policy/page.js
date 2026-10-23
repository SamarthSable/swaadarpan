import PolicyPage from "@/src/components/PolicyPage";
export const metadata = {
  title: "Returns & Exchanges",
  description:
    "Review the editable Swaadarpan returns and exchanges policy template.",
  alternates: { canonical: "/return-policy" },
};
export default function ReturnPolicy() {
  return (
    <PolicyPage
      eyebrow="The practical details"
      title="Returns & exchanges"
      intro="Return information for Swaadarpan orders."
      sections={[
        {
          title: "Eligibility",
          body: "[Confirm which items can be returned or exchanged and any condition requirements.]",
        },
        {
          title: "How to request a return",
          body: "[Add the verified contact method, request window, and return process.]",
        },
        {
          title: "Refunds",
          body: "[Confirm refund method, timing, shipping fees, and any exceptions.]",
        },
        {
          title: "Made-to-order items",
          body: "[Confirm the policy for custom or made-to-order work.]",
        },
      ]}
    />
  );
}
