import { ContentProfile } from "@/components/ContentProfile";
import { UsersList } from "@/components/UsersList";
import { ProfileArticle } from "@/dashboard/components/Profile/ProfileArticle";
import { UserStats } from "@/dashboard/components/Profile/UserStats";
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
