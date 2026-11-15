// components/ScheduledList.tsx
import {useState} from "react";
import {FiExternalLink} from "react-icons/fi";
import {MOCK_SCHEDULED} from "../data/mockData.ts";

export default function ScheduledList() {
    // Local state only so checkboxes feel alive; real persistence comes with the backend
    const [items, setItems] = useState(MOCK_SCHEDULED);

    const toggle = (id: number) =>
        setItems(prev => prev.map(i => (i.id === id ? {...i, done: !i.done} : i)));

    return (
        <div className="card card-soft p-3">
            <h6 className="fw-bold mb-3">Scheduled</h6>
            <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                {items.map(item => (
                    <li key={item.id} className="d-flex align-items-center gap-2">
                        <input
                            type="checkbox"
                            className="form-check-input mt-0"
                            checked={item.done}
                            onChange={() => toggle(item.id)}
                        />
                        <div className="flex-grow-1 lh-sm">
                            <div className="small fw-semibold">{item.title}</div>
                            <div className="text-secondary" style={{fontSize: "0.7rem"}}>{item.when}</div>
                        </div>
                        <FiExternalLink className="text-secondary"/>
                    </li>
                ))}
            </ul>
        </div>
    );
}