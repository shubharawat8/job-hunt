import { CompetencyCarousel } from "@/components/journey/CompetencyCarousel";
import { Footprint } from "@/components/journey/Footprint";
import { Hero } from "@/components/journey/Hero";
import { Highlights } from "@/components/journey/Highlights";
import { Skills } from "@/components/journey/Skills";
import { Timeline } from "@/components/journey/Timeline";

export default function JourneyPage() {
  return (
    <div className="space-y-20">
      <Hero />
      <CompetencyCarousel />
      <Highlights />
      <Timeline />
      <Footprint />
      <Skills />
    </div>
  );
}
