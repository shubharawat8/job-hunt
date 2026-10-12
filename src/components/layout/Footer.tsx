import { Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="px-4 pb-8 pt-16">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 rounded-3xl bg-surface px-6 py-5 shadow-clay-sm">
        <p className="text-sm font-bold text-ink-muted">
          © {new Date().getFullYear()} {profile.name} · {profile.headline}
        </p>
        <div className="flex gap-3">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-peach-soft text-peach shadow-clay-sm transition-transform hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-soft text-sky shadow-clay-sm transition-transform hover:-translate-y-0.5"
          >
            <FaLinkedinIn className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
