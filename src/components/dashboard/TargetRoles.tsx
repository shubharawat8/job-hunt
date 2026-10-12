import { Target } from "lucide-react";
import { profile } from "@/data/profile";
import { Marquee } from "@/components/ui";

export function TargetRoles() {
  return (
    <Marquee label="Target roles" duration={30}>
      {profile.targetRoles.map((r) => (
        <span
          key={r}
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-2xl bg-surface px-5 py-3 font-extrabold text-ink shadow-clay-sm"
        >
          <Target className="h-4 w-4 text-peach" />
          {r}
        </span>
      ))}
    </Marquee>
  );
}
