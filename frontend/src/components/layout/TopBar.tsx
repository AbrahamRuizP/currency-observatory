// components/layout/Topbar.tsx
import {FiChevronDown, FiSearch} from "react-icons/fi";

const USER_NAME = "Observer"; // Placeholder until there is a real user

export default function Topbar() {
    return (
        <div className="card-soft d-flex align-items-center justify-content-between p-2 ps-3">
            <div className="d-flex align-items-center gap-2">
                <div className="avatar">{USER_NAME[0]}</div>
                <span className="fw-semibold">{USER_NAME}</span>
                <FiChevronDown className="text-secondary"/>
            </div>

            {/* Decorative search box: no handlers on purpose */}
            <div className="search-box d-flex align-items-center">
                <input className="form-control border-0 bg-transparent shadow-none" placeholder="Search"/>
                <button className="btn btn-primary btn-sm rounded-3" type="button" aria-label="Search">
                    <FiSearch/>
                </button>
            </div>
        </div>
    );
}