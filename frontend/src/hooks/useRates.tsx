// hooks/useRates.ts
import {useEffect, useState} from "react";
import type {Rate} from "../types/Rate.ts";
import {getRates} from "../service/RateService.tsx";

export function useRates() {
    const [rates, setRates] = useState<Rate[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getRates()
            .then(setRates)
            // Store only the message, never the Error object itself
            .catch((err: Error) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return {rates, error, loading};
}