// components/layout/Sidebar.tsx
import {FiBookOpen, FiBriefcase, FiGrid, FiLogOut, FiRepeat, FiSend, FiSettings} from "react-icons/fi";

// Decorative rail: swap for <NavLink> when React Router arrives
const ICONS = [FiBriefcase, FiBookOpen, FiSettings, FiSend, FiLogOut];

export default function Sidebar() {
    return (
        <aside className="d-none d-lg-flex flex-column gap-3 align-items-center sidebar-rail">
            <div className="card-soft w-100 py-3 text-center">
                <FiRepeat size={26} className="text-primary"/>
                <div className="small fw-bold mt-1">UYU Obs.</div>
            </div>

            <div className="card-soft w-100 py-3 d-flex flex-column align-items-center justify-content-evenly gap-4 h-100">
                <span className="rail-active"><FiGrid/></span>
                {ICONS.map((Icon, i) => (
                    <Icon key={i} className="text-secondary" size={18}/>
                ))}
            </div>
        </aside>
    );
}