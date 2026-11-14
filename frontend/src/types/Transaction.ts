// types/Transaction.ts
export interface Transaction {
    id: number;
    base: string;
    quote: string;
    amount: number;
    rate: number;
    total: number;
    status: "COMPLETED" | "PENDING";
}