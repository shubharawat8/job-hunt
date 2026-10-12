export type Tone = "primary" | "teal" | "peach" | "sky" | "lemon" | "rose" | "neutral";

/** Soft background + strong ink for each accent tone. */
export const toneClasses: Record<Tone, string> = {
  primary: "bg-primary-soft text-primary",
  teal: "bg-teal-soft text-teal",
  peach: "bg-peach-soft text-peach",
  sky: "bg-sky-soft text-sky",
  lemon: "bg-lemon-soft text-lemon",
  rose: "bg-rose-soft text-rose",
  neutral: "bg-sunken text-ink-muted",
};
