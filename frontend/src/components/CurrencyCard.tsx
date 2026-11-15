// components/CurrencyCard.tsx
import formatRate from "../utils/formatRate.ts";
import type {Rate} from "../types/Rate.ts";

interface CardProps {
    rate: Rate;
    selected?: boolean;      // Blue variant + drives the chart below
    onSelect?: () => void;
}

function CurrencyCard({rate, selected = false, onSelect}: CardProps) {
    // Invert the raw number: parsing the already-formatted string would invert a rounded value
    const inverted = formatRate(1 / rate.rate);

    // Bootstrap utilities swap colors; the active card is the blue one
    const variant = selected ? "bg-primary text-white" : "card-soft";
    const muted = selected ? "text-white-50" : "text-secondary";

    return (
        <div
            role="button"
            tabIndex={0}
            aria-pressed={selected}
            onClick={onSelect}
            // Keyboard support: a role="button" div must react to Enter and Space
            onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelect?.();
                }
            }}
            className={`card currency-card ${variant} p-3`}
        >
            <div className="fw-semibold mb-3">
                {rate.quote} to {rate.base}
            </div>

            <div className="d-flex align-items-end gap-3">
                <div>
                    <div className={`small ${muted}`}>{rate.quote}</div>
                    <div className="fs-4 fw-bold lh-1">1.00</div>
                </div>

                <div className="fs-4 fw-bold lh-1">:</div>

                <div>
                    <div className={`small ${muted}`}>{rate.base}</div>
                    <div className="fs-4 fw-bold lh-1">{inverted}</div>
                </div>
            </div>

            <div className={`small mt-3 ${muted}`}>
                Updated {rate.date}
            </div>
        </div>
    );
}

export default CurrencyCard;