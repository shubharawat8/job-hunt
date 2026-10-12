import type { JobSource } from "@/lib/types";

/** Job portals the dashboard tracks. Add new portals here. */
export const sources: JobSource[] = [
  {
    id: "devnetjobsindia",
    name: "DevNetJobsIndia",
    url: "https://www.devnetjobsindia.org/",
    sections: ["Premium Jobs"],
    state: "pending",
    note: "Premium Jobs section not yet synced: the site could not be reached from the build environment. Listings below came from a search-engine index and need confirming on the portal.",
  },
];
