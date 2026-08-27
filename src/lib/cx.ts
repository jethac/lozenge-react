/** Minimal class-name joiner: skips falsy values, flattens nothing fancy. */
export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
