import { DashboardNavbar } from "@/dashboard/components/header/DashboardNavbar";
import { SideBar } from "@/dashboard/components/sidebar/Sidebar";

export const AppShell = ({ children }) => {
    return (
        <div className="w-full min-h-screen overflow-x-hidden fixed inset-0">
            <DashboardNavbar />
            <SideBar />

            <main className="pt-11 pl-16 min-h-screen md:pl-40 relative">{children}</main>
        </div>
    );
};
