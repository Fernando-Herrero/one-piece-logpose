import { ContentProfile } from "@/dashboard/components/ContentProfile";
import { ProfileArticle } from "@/dashboard/components/Profile/ProfileArticle";
import { UserStats } from "@/dashboard/components/Profile/UserStats";
import { UsersList } from "@/dashboard/components/UsersList";
import { Outlet } from "react-router-dom";

export const Profile = () => {
    return (
        <div className="p-2 grid grid-cols-1 gap-2">
            <ProfileArticle />
            <UserStats />
            <UsersList />
            <ContentProfile />

            <Outlet />
        </div>
    );
};
