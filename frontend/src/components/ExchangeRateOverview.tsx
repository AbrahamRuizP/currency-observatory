// components/ExchangeRateOverview.tsx
import {useEffect, useState} from "react";
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import type {Period, RateHistoryPoint} from "../types/RateHistoryPoint.ts";
import {getRateHistory} from "../service/RateHistoryService.ts";

interface Props {
    base: string;
    quote: string;
    currentRate: number; // Only needed while the history is fake
}

const PERIODS: Period[] = ["daily", "weekly", "monthly"];

export default function ExchangeRateOverview({base, quote, currentRate}: Props) {
    const [period, setPeriod] = useState<Period>("monthly");
    const [points, setPoints] = useState<RateHistoryPoint[]>([]);

    useEffect(() => {
        let cancelled = false; // Ignore stale responses after a quick tab switch
        getRateHistory(base, quote, period, currentRate).then(data => {
            if (!cancelled) setPoints(data);
        });
        return () => {
            cancelled = true;
        };
    }, [base, quote, period, currentRate]);

    // timeZone UTC: ISO dates are parsed as UTC, otherwise Montevideo would show the previous day
    const formatTick = (iso: string) =>
        new Date(iso).toLocaleDateString(
            "en-US",
            period === "monthly"
                ? {month: "short", timeZone: "UTC"}
                : {day: "2-digit", month: "short", timeZone: "UTC"},
        );

    return (
        <div className="card card-soft p-3">
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="fw-bold mb-0">Exchange Rate Overview · {base}/{quote}</h6>
                <div className="d-flex gap-3">
                    {PERIODS.map(p => (
                        <button
                            key={p}
                            className={`btn btn-link p-0 text-decoration-none text-capitalize ${
                                p === period ? "fw-bold" : "text-secondary"
                            }`}
                            onClick={() => setPeriod(p)}
                        >
                            {p}
                        </button>
                    ))}
                </div>
            </div>

            <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={points}>
                    <defs>
                        <linearGradient id="rateFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#5b4fe0" stopOpacity={0.35}/>
                            <stop offset="100%" stopColor="#5b4fe0" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                    <XAxis dataKey="date" tickFormatter={formatTick} tickLine={false}/>
                    <YAxis domain={["auto", "auto"]} tickFormatter={(v: number) => v.toFixed(4)} width={60}/>
                    <Tooltip labelFormatter={label =>
                        typeof label === "string" ? formatTick(label) : String(label ?? "")
                    }/>
                    <Area type="monotone" dataKey="rate" stroke="#5b4fe0" strokeWidth={2} fill="url(#rateFill)"/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
