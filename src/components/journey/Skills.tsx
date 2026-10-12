import { Award, GraduationCap, Languages, Wrench } from "lucide-react";
import { profile } from "@/data/profile";
import { Badge, ClayCard, IconBubble, SectionHeading } from "@/components/ui";

export function Skills() {
  return (
    <section aria-labelledby="skills" className="grid gap-5 lg:grid-cols-3">
      <ClayCard className="lg:col-span-2">
        <SectionHeading eyebrow="Education" title="Qualifications" icon={GraduationCap} tone="teal" />
        <ul className="space-y-4">
          {profile.education.map((e) => (
            <li key={e.degree} className="rounded-2xl bg-sunken p-4 shadow-clay-inset">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-black text-ink">{e.degree}</p>
                <Badge tone="teal">{e.period}</Badge>
              </div>
              <p className="mt-1 text-sm text-ink-muted">{e.institute}</p>
            </li>
          ))}
        </ul>
      </ClayCard>
      <div className="grid gap-5">
        <ClayCard>
          <div className="flex items-center gap-3">
            <IconBubble icon={Award} tone="lemon" size="sm" />
            <h3 className="font-black text-ink">Certifications</h3>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {profile.certifications.map((c) => (
              <Badge key={c} tone="lemon">{c}</Badge>
            ))}
          </div>
        </ClayCard>
        <ClayCard>
          <div className="flex items-center gap-3">
            <IconBubble icon={Wrench} tone="sky" size="sm" />
            <h3 className="font-black text-ink">Tools</h3>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {profile.tools.map((t) => (
              <Badge key={t} tone="sky">{t}</Badge>
            ))}
          </div>
        </ClayCard>
        <ClayCard>
          <div className="flex items-center gap-3">
            <IconBubble icon={Languages} tone="rose" size="sm" />
            <h3 className="font-black text-ink">Languages</h3>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {profile.languages.map((l) => (
              <Badge key={l} tone="rose">{l}</Badge>
            ))}
          </div>
        </ClayCard>
      </div>
    </section>
  );
}
