// components/ErrorPage.tsx
import {FiAlertTriangle, FiRefreshCw} from "react-icons/fi";

interface Props {
    error: string | null;
}

function ErrorPage({error}: Props) {
    return (
        // role="alert" makes screen readers announce the error immediately
        <div className="error-page d-flex flex-column align-items-center justify-content-center gap-3 px-3" role="alert">
            <div className="error-icon">
                <FiAlertTriangle size={32}/>
            </div>

            <div className="text-center">
                <h5 className="fw-bold mb-1">Something went wrong</h5>
                <p className="text-secondary small mb-0">
                    The peso is playing hard to get. Please try again.
                </p>
            </div>

            {/* Raw technical message, kept small and out of the way */}
            <code className="error-message">{error}</code>

            {/* Full reload for now; a refetch() from useRates would avoid it */}
            <button type="button" className="btn btn-primary rounded-3 d-flex align-items-center gap-2"
                    onClick={() => window.location.reload()}>
                <FiRefreshCw/>
                Try again
            </button>
        </div>
    );
}

export default ErrorPage;