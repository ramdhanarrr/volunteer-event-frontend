import EventPreview from "../component/EventPreview";
import Hero from "../component/Hero";
import ValueSection from "../component/ValueSection";

export default function Landing() {
  return (
    <main className="pb-16 space-y-16">
      <Hero />
      <ValueSection />
      <EventPreview />
    </main>
  );
}
