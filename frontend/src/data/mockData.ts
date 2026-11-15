// data/mockData.ts
import type {SavedCurrency} from "../types/SavedCurrency.ts";
import type {ScheduledExchange} from "../types/ScheduledExchange.ts";
import type {Transaction} from "../types/Transaction.ts";

export const MOCK_SAVED: SavedCurrency[] = [
    {id: 1, base: "UYU", quote: "USD", lookups: "95+ lookups"},
    {id: 2, base: "UYU", quote: "EUR", lookups: "72 lookups"},
    {id: 3, base: "UYU", quote: "BRL", lookups: "58 lookups"},
    {id: 4, base: "UYU", quote: "ARS", lookups: "31 lookups"},
];

export const MOCK_SCHEDULED: ScheduledExchange[] = [
    {id: 1, title: "UYU to USD Exchange", when: "Nov 14, 2026 from 8 AM to 10 PM", done: true},
    {id: 2, title: "UYU to EUR Exchange", when: "Nov 15, 2026 from 8 AM to 10 PM", done: false},
    {id: 3, title: "UYU to BRL Exchange", when: "Nov 16, 2026 from 8 AM to 10 PM", done: false},
];

export const MOCK_TRANSACTIONS: Transaction[] = [
    {id: 1, base: "UYU", quote: "USD", amount: 12000, rate: 0.0251, total: 301.2, status: "COMPLETED"},
    {id: 2, base: "UYU", quote: "EUR", amount: 8500, rate: 0.0216, total: 183.6, status: "COMPLETED"},
    {id: 3, base: "UYU", quote: "BRL", amount: 20000, rate: 0.1352, total: 2704.0, status: "PENDING"},
    {id: 4, base: "UYU", quote: "ARS", amount: 5000, rate: 35.4, total: 177000.0, status: "COMPLETED"},
    {id: 5, base: "UYU", quote: "USD", amount: 3000, rate: 0.0250, total: 75.0, status: "PENDING"},
];