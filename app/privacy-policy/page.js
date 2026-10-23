import PolicyPage from "@/src/components/PolicyPage";
export const metadata = {
  title: "Privacy Policy",
  description:
    "Read Swaadarpan's editable privacy policy template and required business-specific details.",
  alternates: { canonical: "/privacy-policy" },
};
export default function PrivacyPolicy() {
  return (
    <PolicyPage
      eyebrow="Your information"
      title="Privacy policy"
      intro="A template for explaining how Swaadarpan handles personal information."
      sections={[
        {
          title: "Information collected",
          body: "[Describe information collected through configured contact channels and any future services.]",
        },
        {
          title: "How information is used",
          body: "[Explain the purposes and legal basis for processing information, as applicable.]",
        },
        {
          title: "Sharing and retention",
          body: "[Identify service providers, sharing practices, and retention periods.]",
        },
        {
          title: "Your choices",
          body: "[Add applicable rights, contact details, and complaint process for your jurisdiction.]",
        },
      ]}
    />
  );
}
