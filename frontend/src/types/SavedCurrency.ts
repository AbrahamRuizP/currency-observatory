// types/SavedCurrency.ts
export interface SavedCurrency {
    id: number;
    base: string;
    quote: string;
    lookups: string; // e.g. "95+ lookups"
}