import type { Event } from "../types/elements-pages";

/**
 * Ordena un array de objetos por la fecha más próxima
 * (considerando startDate y closeDate).
 */
export function sortByNearestDate<T extends Event>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    const fechaA = Math.min(
      new Date(a.startDate).getTime(),
      new Date(a.endDate).getTime()
    );
    const fechaB = Math.min(
      new Date(b.startDate).getTime(),
      new Date(b.endDate).getTime()
    );
    return fechaA - fechaB;
  });
}
