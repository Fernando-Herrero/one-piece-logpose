import { ContentProfile } from "@/dashboard/components/ContentProfile";
import { ProfileArticle } from "@/dashboard/components/Profile/ProfileArticle";
import { UserStats } from "@/dashboard/components/Profile/UserStats";
import { UsersList } from "@/dashboard/components/UsersList";
import { Outlet } from "react-router-dom";

export const Profile = () => {
    return (
        <div className="p-2 flex flex-col gap-2 max-w-container">
            <div className="flex gap-2">
                <div className="flex flex-col gap-2">
                    <ProfileArticle />
                    <UserStats />
                </div>

                <UsersList />
            </div>

            <ContentProfile />

            <Outlet />
        </div>
    );
};
