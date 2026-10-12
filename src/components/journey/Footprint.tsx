import { Map, MapPinned } from "lucide-react";
import { profile } from "@/data/profile";
import { ClayCard, SectionHeading } from "@/components/ui";

export function Footprint() {
  return (
    <section aria-labelledby="footprint">
      <ClayCard>
        <SectionHeading
          eyebrow="Footprint"
          title="Six states, one mission"
          description="Field and state-level experience across North, East and West India."
          icon={Map}
          tone="sky"
        />
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {profile.states.map((s) => (
            <li key={s} className="flex flex-col items-center gap-2 rounded-2xl bg-sunken p-4 text-center shadow-clay-inset">
              <MapPinned className="h-5 w-5 text-sky" />
              <span className="text-sm font-extrabold text-ink">{s}</span>
            </li>
          ))}
        </ul>
      </ClayCard>
    </section>
  );
}
