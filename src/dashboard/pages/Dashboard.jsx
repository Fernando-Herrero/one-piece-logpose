import { AppShell } from "@/dashboard/components/AppShell";
import { Profile } from "@/dashboard/pages/Profile";
import { Social } from "@/dashboard/pages/SocialPage";
import { Route, Routes } from "react-router-dom";

export const Dashboard = () => {
    return (
        <AppShell>
            <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/community" element={<Social />} />
            </Routes>
        </AppShell>
    );
};
