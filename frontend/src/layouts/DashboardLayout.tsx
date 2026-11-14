// layouts/DashboardLayout.tsx
import type {ReactNode} from "react";
import Sidebar from "../components/layout/Sidebar.tsx";
import Topbar from "../components/layout/TopBar.tsx";

export default function DashboardLayout({children}: {children: ReactNode}) {
    return (
        <div className="dashboard-shell d-flex gap-3">
            <div className="flex-grow-1">
                <Topbar />
                <div className="mt-3">{children}</div>
            </div>
            <Sidebar />
        </div>
    );
}