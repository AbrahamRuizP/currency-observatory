// components/SavedCurrencies.tsx
import {MOCK_SAVED} from "../data/mockData.ts";

export default function SavedCurrencies() {
    return (
        <div className="card card-soft p-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
        <span className="small fw-bold">Saved Currency's</span>
    <a href="#" className="small text-primary text-decoration-none">See all</a>
    </div>

    <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
        {MOCK_SAVED.map(item => (
                <li key={item.id} className="saved-item d-flex align-items-center gap-2 p-2">
            <span className="currency-chip">{item.quote}</span>
                <div className="lh-sm">
            <div className="small fw-semibold">{item.base} to {item.quote}</div>
                <div className="text-secondary" style={{fontSize: "0.7rem"}}>{item.lookups}</div>
    </div>
    </li>
))}
    </ul>
    </div>
);
}