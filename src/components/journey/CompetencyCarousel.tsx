import { Handshake, Sparkle } from "lucide-react";
import { profile } from "@/data/profile";
import { Marquee, SectionHeading, type Tone } from "@/components/ui";
import { cn } from "@/lib/cn";

const tones: Tone[] = ["primary", "teal", "peach", "sky", "lemon", "rose"];
const toneText: Record<Tone, string> = {
  primary: "text-primary",
  teal: "text-teal",
  peach: "text-peach",
  sky: "text-sky",
  lemon: "text-lemon",
  rose: "text-rose",
  neutral: "text-ink-muted",
};

export function CompetencyCarousel() {
  return (
    <section aria-labelledby="competencies">
      <SectionHeading eyebrow="Expertise" title="Core competencies" icon={Sparkle} tone="peach" />
      <Marquee label="Core competencies" duration={55}>
        {profile.competencies.map((c, i) => (
          <span
            key={c}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-2xl bg-surface px-5 py-3 font-extrabold text-ink shadow-clay-sm"
          >
            <span className={cn("h-2.5 w-2.5 rounded-full bg-current", toneText[tones[i % tones.length]])} />
            {c}
          </span>
        ))}
      </Marquee>
      <Marquee label="Organisations and programmes" duration={35} reverse>
        {profile.partners.map((p) => (
          <span
            key={p}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-2xl bg-sunken px-5 py-3 text-sm font-black uppercase tracking-wider text-ink-muted shadow-clay-inset"
          >
            <Handshake className="h-4 w-4 text-primary" />
            {p}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
