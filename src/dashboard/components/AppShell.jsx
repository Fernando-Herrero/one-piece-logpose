import { DashboardNavbar } from "@/dashboard/components/DashboardNavbar";
import { SideBar } from "@/dashboard/components/Sidebar";

export const AppShell = ({ children }) => {
    return (
        <div className="min-screen overflow-y-hidden">
            <DashboardNavbar />
            <SideBar />

            <main>{children}</main>
        </div>
    );
};
