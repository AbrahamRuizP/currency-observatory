// components/TransactionsTable.tsx
import {useState} from "react";
import {MOCK_TRANSACTIONS} from "../data/mockData.ts";
import StatusBadge from "./StatusBadge.tsx";

type Filter = "ALL" | "COMPLETED" | "PENDING";
const FILTERS: Filter[] = ["ALL", "COMPLETED", "PENDING"];

export default function TransactionsTable() {
    const [filter, setFilter] = useState<Filter>("ALL");

    const rows = MOCK_TRANSACTIONS.filter(t => filter === "ALL" || t.status === filter);

    return (
        <div className="card card-soft p-3">
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="fw-bold mb-0">Database</h6>
                <div className="d-flex gap-3">
                    {FILTERS.map(f => (
                        <button
                            key={f}
                            className={`btn btn-link p-0 small text-decoration-none text-capitalize ${
                                f === filter ? "fw-bold" : "text-secondary"
                            }`}
                            onClick={() => setFilter(f)}
                        >
                            {f.toLowerCase()}
                        </button>
                    ))}
                </div>
            </div>

            <div className="table-responsive">
                <table className="table align-middle mb-0">
                    <thead>
                    <tr className="small text-secondary">
                        <th>Currency's</th>
                        <th>Amount</th>
                        <th>Exchange Rate</th>
                        <th>Total</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows.map(t => (
                        <tr key={t.id}>
                            <td className="fw-semibold">{t.base} to {t.quote}</td>
                            <td>{t.amount.toLocaleString("en-US")}</td>
                            <td>{t.rate}</td>
                            <td>{t.total.toLocaleString("en-US", {minimumFractionDigits: 2})}</td>
                            <td><StatusBadge status={t.status}/></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}