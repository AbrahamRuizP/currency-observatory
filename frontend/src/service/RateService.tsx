import type {RateType} from "../types/Rate.ts";


export async function getRates(): Promise<RateType[]> {
    const response = await fetch("/rate");

    if (!response.ok) {
        throw new Error("Error fetching rate");
    }

    return response.json();
}

export async function getRateByQuote(quote : string): Promise<RateType> {
    const response = await fetch(`/rate/${encodeURIComponent(quote)}`);

    if( !response.ok ) {
        throw new Error("Error fetching rate by quote: " + quote);
    }

    return response.json();
}