/**
 * Merge conditional class names without pulling in a dependency.
 * Kept deliberately small — Tailwind conflict resolution is handled by
 * writing non-conflicting classes, not by a runtime merger.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
