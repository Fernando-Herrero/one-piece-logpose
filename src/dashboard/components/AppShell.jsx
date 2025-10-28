import { DashboardNavbar } from "@/dashboard/components/header/DashboardNavbar";
import { SideBar } from "@/dashboard/components/sidebar/Sidebar";

export const AppShell = ({ children }) => {
    return (
        <div className="w-full min-h-[calc(var(--vh)*100)] overflow-x-hidden relative">
            <DashboardNavbar />
            <SideBar />

            <main className="pt-11 pl-16 min-h-[calc(var(--vh)*100)] md:pl-40 relative">{children}</main>
        </div>
    );
};
