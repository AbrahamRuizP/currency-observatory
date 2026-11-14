// types/RateHistoryPoint.ts
export type Period = "daily" | "weekly" | "monthly";

export interface RateHistoryPoint {
    date: string;   // ISO date
    rate: number;
}