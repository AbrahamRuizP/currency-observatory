// components/CalendarWidget.tsx
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

interface Props {
    selectedDate?: Date;
    onSelectDate?: (date: Date) => void; // Not wired yet: clicking does nothing for now
}

// Monday-based week containing the given date
function getWeek(reference: Date): Date[] {
    const monday = new Date(reference);
    monday.setDate(reference.getDate() - ((reference.getDay() + 6) % 7));
    return Array.from({length: 7}, (_, i) => {
        const day = new Date(monday);
        day.setDate(monday.getDate() + i);
        return day;
    });
}

export default function CalendarWidget({selectedDate = new Date(), onSelectDate}: Props) {
    const week = getWeek(selectedDate);

    return (
        <div className="card card-soft p-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <FiChevronLeft className="text-secondary"/>
                <span className="fw-bold">
                    {selectedDate.toLocaleDateString("en-US", {month: "long", year: "numeric"})}
                </span>
                <FiChevronRight className="text-secondary"/>
            </div>

            <div className="d-flex justify-content-between">
                {week.map(day => {
                    const active = day.toDateString() === selectedDate.toDateString();
                    return (
                        <button
                            key={day.toISOString()}
                            type="button"
                            className={`calendar-day ${active ? "active" : ""}`}
                            onClick={() => onSelectDate?.(day)}
                        >
                            <small>{day.toLocaleDateString("en-US", {weekday: "short"})}</small>
                            <strong>{String(day.getDate()).padStart(2, "0")}</strong>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}