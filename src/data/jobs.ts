import type { Job } from "@/lib/types";

/**
 * Job listings tracked by the dashboard.
 * Add one object per listing; fit score is computed from `keywords`,
 * `minExperience` and `level` (see src/lib/match.ts).
 */
export const jobs: Job[] = [
  {
    id: "devnet-296852",
    title: "National Nutrition Consultant",
    organization: "Piramal Foundation",
    location: "Bihar",
    level: "national",
    sourceId: "devnetjobsindia",
    url: "https://devnetjobsindia.org/jobdescription.aspx?job_id=296852",
    deadline: "2026-08-05",
    addedOn: "2026-10-12",
    keywords: ["nutrition", "public health", "program management", "monitoring"],
    status: "closed",
    verification: "unverified",
    notes: "Found via search index. Listing shows two deadlines (24 Jul and 05 Aug 2026); both have passed.",
  },
  {
    id: "devnet-291145",
    title: "Senior Consultant – Health & Nutrition",
    organization: "UNICEF",
    location: "Mumbai, Maharashtra",
    level: "state",
    sourceId: "devnetjobsindia",
    url: "https://devnetjobsindia.org/jobdescription.aspx?job_id=291145",
    deadline: "2026-04-30",
    addedOn: "2026-10-12",
    minExperience: 10,
    keywords: ["nutrition", "sam", "iycf", "health", "unicef", "maternal and child health"],
    status: "closed",
    verification: "unverified",
    notes: "Found via search index. Requires 10+ years of state-level experience. Contract Jun 2026 – Dec 2027.",
  },
];
