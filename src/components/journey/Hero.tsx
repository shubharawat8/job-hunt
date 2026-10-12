import { ArrowRight, BadgeCheck, MapPin, Sparkles } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { profile } from "@/data/profile";
import { Badge, ButtonLink, ClayCard } from "@/components/ui";

export function Hero() {
  return (
    <section className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
      <div>
        <Badge tone="teal" icon={<Sparkles className="h-3.5 w-3.5" />}>
          Open to national-level nutrition roles
        </Badge>
        <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-ink sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-xl font-extrabold text-primary sm:text-2xl">{profile.headline}</p>
        <p className="mt-2 text-lg font-bold text-ink-muted">{profile.tagline}</p>
        <p className="mt-5 max-w-2xl leading-relaxed text-ink-muted">{profile.summary}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <ButtonLink href="/dashboard" icon={<ArrowRight className="h-4 w-4" />}>
            Open job dashboard
          </ButtonLink>
          <ButtonLink href={profile.linkedin} external variant="soft" icon={<FaLinkedinIn className="h-4 w-4 text-sky" />}>
            LinkedIn
          </ButtonLink>
        </div>
      </div>

      <ClayCard className="relative overflow-hidden">
        <div aria-hidden className="absolute -right-10 -top-10 h-40 w-40 animate-float rounded-full bg-primary-soft shadow-clay" />
        <div aria-hidden className="absolute -bottom-12 -left-8 h-32 w-32 animate-float rounded-full bg-peach-soft shadow-clay [animation-delay:-3s]" />
        <div className="relative">
          <div className="flex items-center gap-4">
            <span className="inline-flex h-20 w-20 items-center justify-center rounded-[1.75rem] bg-primary text-3xl font-black text-primary-ink shadow-clay">
              SS
            </span>
            <div>
              <p className="flex items-center gap-1.5 font-black text-ink">
                Currently <BadgeCheck className="h-4 w-4 text-teal" />
              </p>
              <p className="text-sm font-bold text-ink-muted">{profile.currentRole}</p>
              <p className="mt-1 flex items-center gap-1 text-xs font-bold text-ink-subtle">
                <MapPin className="h-3.5 w-3.5" /> {profile.location}
              </p>
            </div>
          </div>
          <dl className="mt-6 grid grid-cols-2 gap-3">
            {profile.stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-sunken p-3 shadow-clay-inset">
                <dt className="text-xs font-bold text-ink-muted">{s.label}</dt>
                <dd className="text-2xl font-black text-ink tabular-nums">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </ClayCard>
    </section>
  );
}
