// components/CalendarWidget.tsx
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

interface Props {
    selectedDate?: Date;
    onSelectDate?: (date: Date) => void; // Not wired yet: clicking does nothing for now
}

const DAYS_SHOWN = 5;

// The last N days ending at "today" (oldest first, today last)
function getLastDays(today: Date, count: number): Date[] {
    return Array.from({length: count}, (_, i) => {
        const day = new Date(today);
        // setDate handles month and year boundaries for us
        day.setDate(today.getDate() - (count - 1 - i));
        return day;
    });
}

export default function CalendarWidget({selectedDate, onSelectDate}: Props) {
    const today = new Date();
    // The window is anchored to today, so selecting a day never shifts the strip
    const days = getLastDays(today, DAYS_SHOWN);
    const selected = selectedDate ?? today;

    return (
        <div className="card card-soft p-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <FiChevronLeft className="text-secondary"/>
                <span className="fw-bold">
                    {today.toLocaleDateString("en-US", {month: "long", year: "numeric"})}
                </span>
                <FiChevronRight className="text-secondary"/>
            </div>

            <div className="d-flex justify-content-between">
                {days.map(day => {
                    const active = day.toDateString() === selected.toDateString();
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