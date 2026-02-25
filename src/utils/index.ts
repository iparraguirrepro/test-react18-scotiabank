export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

export function getUnique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr))
}
