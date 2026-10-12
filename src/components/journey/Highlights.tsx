import { BarChart3, FileCheck2, ScanSearch, Trophy, Wheat, type LucideIcon } from "lucide-react";
import { profile } from "@/data/profile";
import { ClayCard, IconBubble, SectionHeading, type Tone } from "@/components/ui";

const icons: { icon: LucideIcon; tone: Tone }[] = [
  { icon: FileCheck2, tone: "primary" },
  { icon: ScanSearch, tone: "teal" },
  { icon: BarChart3, tone: "sky" },
  { icon: Wheat, tone: "peach" },
];

export function Highlights() {
  return (
    <section aria-labelledby="highlights">
      <SectionHeading eyebrow="Impact" title="Career highlights" icon={Trophy} tone="lemon" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {profile.achievements.map((a, i) => (
          <ClayCard key={a.title} as="article" interactive>
            <IconBubble icon={icons[i % icons.length].icon} tone={icons[i % icons.length].tone} />
            <h3 className="mt-4 text-lg font-black text-ink">{a.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{a.body}</p>
          </ClayCard>
        ))}
      </div>
    </section>
  );
}
