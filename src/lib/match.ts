import { profile } from "@/data/profile";
import type { Job, JobLevel } from "@/lib/types";
import { daysUntil } from "@/lib/dates";

/**
 * Fit score (0–100) of a job against the candidate profile.
 *  - Domain keywords: up to 60
 *  - Experience fit: up to 20
 *  - Location tier preference: up to 20 (national > international > state)
 */
export const KEYWORD_WEIGHTS: Record<string, number> = {
  nutrition: 20,
  sam: 15,
  cmam: 15,
  imam: 15,
  imsam: 15,
  malnutrition: 15,
  iycf: 10,
  iycn: 10,
  icds: 10,
  poshan: 10,
  "public health": 8,
  fortification: 8,
  "program management": 8,
  "maternal and child health": 6,
  "m&e": 6,
  monitoring: 6,
  "capacity building": 5,
  training: 4,
  convergence: 5,
  "government liaison": 5,
  health: 4,
  unicef: 3,
};

export const LEVEL_SCORE: Record<JobLevel, number> = {
  national: 20,
  international: 15,
  state: 8,
};

export interface FitBreakdown {
  total: number;
  keywords: number;
  experience: number;
  location: number;
  matched: string[];
}

export function scoreJob(job: Job): FitBreakdown {
  const matched = job.keywords
    .map((k) => k.toLowerCase())
    .filter((k) => k in KEYWORD_WEIGHTS);
  const keywords = Math.min(
    60,
    matched.reduce((sum, k) => sum + KEYWORD_WEIGHTS[k], 0),
  );

  const years = profile.yearsExperience;
  const need = job.minExperience ?? 0;
  const experience = need <= years ? 20 : need <= years + 2 ? 10 : 0;

  const location = LEVEL_SCORE[job.level];

  return {
    total: keywords + experience + location,
    keywords,
    experience,
    location,
    matched,
  };
}

export type FitBand = "high" | "medium" | "low";

export function fitBand(score: number): FitBand {
  if (score >= 75) return "high";
  if (score >= 50) return "medium";
  return "low";
}

export const ACTIVE_STATUSES = ["new", "shortlisted", "applied", "interview", "offer"] as const;

/** Open = an active pipeline status and the deadline (if any) not yet passed. */
export function isActive(job: Job, today: Date = new Date()): boolean {
  if (job.deadline && daysUntil(job.deadline, today) < 0) return false;
  return (ACTIVE_STATUSES as readonly string[]).includes(job.status);
}
