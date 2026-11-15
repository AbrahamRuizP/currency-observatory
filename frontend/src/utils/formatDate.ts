// utils/formatDate.ts

// "2026-11-15" -> "Nov 15"
export default function formatDate(isoDate: string): string {
    return new Date(isoDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        // ISO date-only strings are parsed as UTC; without this, Montevideo (UTC-3) would show "Nov 14"
        timeZone: "UTC",
    });
}