import ContactHeader from "./components/ContactHeader";
import ContactForm from "./components/ContactForm";
import GoogleMap from "./components/GoogleMap";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactHeader />
      <ContactForm />
      <GoogleMap />
    </main>
  );
}
