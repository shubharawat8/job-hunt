import type { JobLevel, JobStatus } from "@/lib/types";
import type { Tone } from "@/components/ui";

export const levelMeta: Record<JobLevel, { label: string; tone: Tone; priority: string }> = {
  national: { label: "National", tone: "primary", priority: "High priority" },
  international: { label: "International", tone: "sky", priority: "Medium priority" },
  state: { label: "State", tone: "neutral", priority: "Low priority" },
};

export const statusMeta: Record<JobStatus, { label: string; tone: Tone }> = {
  new: { label: "New match", tone: "teal" },
  shortlisted: { label: "Shortlisted", tone: "sky" },
  applied: { label: "Applied", tone: "primary" },
  interview: { label: "Interview", tone: "lemon" },
  offer: { label: "Offer", tone: "teal" },
  rejected: { label: "Not selected", tone: "rose" },
  closed: { label: "Closed", tone: "neutral" },
};

export const PIPELINE: JobStatus[] = ["new", "shortlisted", "applied", "interview", "offer"];
