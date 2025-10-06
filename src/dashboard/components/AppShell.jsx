import { DashboardNavbar } from "@/dashboard/components/header/DashboardNavbar";
import { SideBar } from "@/dashboard/components/sidebar/Sidebar";

export const AppShell = ({ children }) => {
    return (
        <div className="min-screen">
            <DashboardNavbar />
            <SideBar />

            <main className="pt-11 pl-15 min-h-screen md:pl-40 relative">{children}</main>
        </div>
    );
};
