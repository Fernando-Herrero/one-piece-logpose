import { DashboardNavbar } from "@/dashboard/components/Header/DashboardNavbar";
import { SideBar } from "@/dashboard/components/Sidebar/Sidebar";

export const AppShell = ({ children }) => {
    return (
        <div className="min-screen">
            <DashboardNavbar />
            <SideBar />

            <main className="pt-11 pl-15 min-h-screen md:pl-32">{children}</main>
        </div>
    );
};
