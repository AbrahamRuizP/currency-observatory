// components/LoadingPage.tsx
import {FiRepeat} from "react-icons/fi";

function LoadingPage() {
    return (
        // role="status" lets screen readers announce the loading state
        <div className="loading-page d-flex flex-column align-items-center justify-content-center gap-3" role="status">
            <div className="loading-logo">
                <FiRepeat size={32}/>
            </div>

            <div className="spinner-border text-primary" aria-hidden="true"/>

            <div className="text-center">
                <h5 className="fw-bold mb-1">Fetching exchange rates...</h5>
                <p className="text-secondary small mb-0">
                    Convincing the peso to reveal its secrets
                </p>
            </div>
        </div>
    );
}

export default LoadingPage;