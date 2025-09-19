import { DashboardNavbar } from "@/dashboard/components/header/DashboardNavbar";
import { SideBar } from "@/dashboard/components/sidebar/Sidebar";

export const AppShell = ({ children }) => {
    return (
        <div className="min-screen">
            <DashboardNavbar />
            <SideBar />

            <main>{children}</main>
        </div>
    );
};
