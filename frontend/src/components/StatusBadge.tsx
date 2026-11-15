// components/StatusBadge.tsx
import type {Transaction} from "../types/Transaction.ts";

export default function StatusBadge({status}: { status: Transaction["status"] }) {
    const completed = status === "COMPLETED";
    return (
        <span className={`badge rounded-pill ${
            completed ? "bg-success-subtle text-success" : "bg-warning-subtle text-warning-emphasis"
        }`}>
            {completed ? "Completed" : "Pending"}
        </span>
    );
}