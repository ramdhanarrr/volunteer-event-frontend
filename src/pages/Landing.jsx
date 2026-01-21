import EventPreview from "../component/EventPreview";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import ValueSection from "../component/ValueSection";

export default function Landing() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <main className="space-y-16 pb-16">
        <Hero />
        <ValueSection />
        <EventPreview />
      </main>
    </div>
  );
}
