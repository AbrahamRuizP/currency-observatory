// components/layout/Sidebar.tsx
import {FiBookOpen, FiBriefcase, FiGrid, FiLogOut, FiRepeat, FiSend, FiSettings} from "react-icons/fi";
import {useState} from "react";

// Decorative rail: swap for <NavLink> when React Router arrives
const ICONS = [
    {id: 1, icon: FiBriefcase},
    {id: 2, icon: FiBookOpen},
    {id: 3, icon: FiSettings},
    {id: 4, icon: FiSend},
    {id: 5, icon: FiLogOut}
]

export default function Sidebar() {
    const [activeId, setActiveId] = useState(0);

    return (
        <aside className="d-none d-lg-flex flex-column gap-3 align-items-center sidebar-rail">
            <div className="card-soft w-100 py-3 text-center">
                <FiRepeat size={26} className="text-primary"/>
                <div className="small fw-bold mt-1">UYU Obs.</div>
            </div>

            <div className="card-soft w-100 py-3 d-flex flex-column align-items-center justify-content-evenly gap-4 h-100">
                <button
                    key={0}
                    type="button"
                    className={`btn rounded-pill ${ activeId === 0 ? 'btn-primary' : '' }`}
                    onClick={() => setActiveId(0)}
                >
                    <FiGrid />
                </button>
                {ICONS.map((icon) => (
                    <button
                        key={icon.id}
                        type="button"
                        className={`btn rounded-pill ${ activeId === icon.id ? 'btn-primary' : '' }`}
                        onClick={() => setActiveId(icon.id)}
                    >
                        <icon.icon key={icon.id} size={18}/>
                    </button>
                ))}
            </div>
        </aside>
    );
}