// service/RateHistoryService.ts
import type {Period, RateHistoryPoint} from "../types/RateHistoryPoint.ts";

const STEPS: Record<Period, { count: number; days: number; volatility: number }> = {
    daily: {count: 30, days: 1, volatility: 0.006},
    weekly: {count: 12, days: 7, volatility: 0.012},
    monthly: {count: 12, days: 30, volatility: 0.025},
};

// Small seeded PRNG so the same pair always yields the same fake curve
function mulberry32(seed: number) {
    return () => {
        seed |= 0;
        seed = (seed + 0x6d2b79f5) | 0;
        let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

function hash(text: string): number {
    let h = 0;
    for (const ch of text) h = (h * 31 + ch.charCodeAt(0)) | 0;
    return h;
}

// TODO: replace this body with fetch(`/rate/history?...`) once the backend endpoint exists.
// "anchorRate" disappears then: it only makes the fake curve end at the real current rate.
export async function getRateHistory(
    base: string,
    quote: string,
    period: Period,
    anchorRate = 1,
): Promise<RateHistoryPoint[]> {
    await new Promise(resolve => setTimeout(resolve, 300)); // Fake network latency

    const {count, days, volatility} = STEPS[period];
    const random = mulberry32(hash(`${base}${quote}${period}`));
    const today = new Date();

    // Walk backwards from the current rate so the last point equals the real one
    const points: RateHistoryPoint[] = [];
    let rate = anchorRate;
    for (let i = 0; i < count; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - i * days);
        points.push({date: date.toISOString().slice(0, 10), rate});
        rate = rate * (1 + (random() - 0.5) * 2 * volatility);
    }

    return points.reverse();
}