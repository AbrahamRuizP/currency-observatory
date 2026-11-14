import formatRate from "../utils/formatRate.ts";
import type {Rate} from "../types/Rate.ts";

interface CardProps {
    rate: Rate;
    highlighted?: boolean;   // Blue variant (first card in the design)
    selected?: boolean;      // Drives the chart below
    onSelect?: () => void;
}

function CurrencyCard({rate, highlighted = false, selected = false, onSelect}: CardProps) {
    const formattedRate = formatRate(rate.rate);

    // Bootstrap utilities swap colors; no custom CSS needed for the blue card
    const variant = highlighted ? "bg-primary text-white" : "card-soft";

    return (
        <div
            role="button"
            onClick={onSelect}
            className={`card ${variant} p-3 ${selected ? "border border-primary" : ""}`}
        >
            {/* ...keep your existing inner markup, but replace text-secondary
                with {highlighted ? "text-white-50" : "text-secondary"} */}
        </div>
    );
}

export default CurrencyCard;