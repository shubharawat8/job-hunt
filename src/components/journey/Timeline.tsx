import { Building2, Calendar, CheckCircle2, HeartPulse, History, MapPin } from "lucide-react";
import { roles } from "@/data/profile";
import { Badge, ClayCard, IconBubble, SectionHeading } from "@/components/ui";

export function Timeline() {
  return (
    <section aria-labelledby="journey">
      <SectionHeading
        eyebrow="Journey"
        title="From clinic chair to state nutrition systems"
        description="Nine years moving from clinical dentistry and hospital operations into government nutrition programmes with UNICEF and GAIN."
        icon={History}
        tone="primary"
      />
      <ol className="relative space-y-6 before:absolute before:bottom-4 before:left-6 before:top-4 before:w-1 before:rounded-full before:bg-line sm:before:left-8">
        {roles.map((role) => (
          <li key={`${role.organization}-${role.period}`} className="relative pl-16 sm:pl-24">
            <span className="absolute left-0 top-2 sm:left-2">
              <IconBubble icon={role.sector === "development" ? Building2 : HeartPulse} tone={role.sector === "development" ? "primary" : "peach"} />
            </span>
            <ClayCard as="article" interactive>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-black text-ink">{role.title}</h3>
                  <p className="font-extrabold text-primary">{role.organization}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge tone="sky" icon={<Calendar className="h-3.5 w-3.5" />}>{role.period}</Badge>
                  <Badge tone="neutral" icon={<MapPin className="h-3.5 w-3.5" />}>{role.location}</Badge>
                </div>
              </div>
              <p className="mt-3 font-bold text-ink-muted">{role.summary}</p>
              <ul className="mt-3 space-y-2">
                {role.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-ink-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </ClayCard>
          </li>
        ))}
      </ol>
    </section>
  );
}
