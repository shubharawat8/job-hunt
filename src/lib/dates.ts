/** Days from `today` until `iso` (negative when past). */
export function daysUntil(iso: string, today: Date = new Date()): number {
  const target = new Date(`${iso}T23:59:59`);
  return Math.ceil((target.getTime() - today.getTime()) / 86_400_000);
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
