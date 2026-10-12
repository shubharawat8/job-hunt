export type JobLevel = "national" | "international" | "state";

export type JobStatus =
  | "new"
  | "shortlisted"
  | "applied"
  | "interview"
  | "offer"
  | "rejected"
  | "closed";

export type Verification = "verified" | "unverified";

export interface Job {
  id: string;
  title: string;
  organization: string;
  location: string;
  level: JobLevel;
  /** Portal id from `src/data/sources.ts`. */
  sourceId: string;
  /** Portal section the listing came from, e.g. "Premium Jobs". */
  section?: string;
  url: string;
  /** ISO date (YYYY-MM-DD). */
  deadline?: string;
  /** ISO date the listing was added to the dashboard. */
  addedOn: string;
  minExperience?: number;
  /** Domain keywords taken from the job description; drive the fit score. */
  keywords: string[];
  status: JobStatus;
  verification: Verification;
  notes?: string;
}

export interface JobSource {
  id: string;
  name: string;
  url: string;
  sections: string[];
  /** ISO date of the last successful sync, if any. */
  lastChecked?: string;
  state: "synced" | "pending" | "planned";
  note?: string;
}

export interface Role {
  title: string;
  organization: string;
  period: string;
  location: string;
  sector: "development" | "healthcare";
  summary: string;
  highlights: string[];
}
