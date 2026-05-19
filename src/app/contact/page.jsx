import ContactHeader from "./components/ContactHeader";
import ContactForm from "./components/ContactForm";
import OfficeLocations from "./components/OfficeLocations";
import ContactCTA from "./components/ContactCTA";
import GoogleMap from "./components/GoogleMap";
import FAQSection from "./components/FAQSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactHeader />
      <ContactForm />
      <OfficeLocations />
      <ContactCTA />
      <GoogleMap />
      <FAQSection />
    </main>
  );
}
