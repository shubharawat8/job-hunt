import type { JobSource } from "@/lib/types";

/** Job portals the dashboard tracks. Add new portals here. */
export const sources: JobSource[] = [
  {
    id: "devnetjobsindia",
    name: "DevNetJobsIndia",
    url: "https://www.devnetjobsindia.org/",
    sections: ["Premium Jobs"],
    state: "pending",
    note: "Premium Jobs not yet synced: the portal is blocked from the build environment (re-checked 12 Oct 2026). Listings came from a search-engine index; no open profile match was found there.",
  },
];
