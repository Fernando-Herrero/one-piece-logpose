import { UsersList } from "@/components/UsersList";
import { ProfileArticle } from "@/dashboard/components/Profile/ProfileArticle";
import { Outlet } from "react-router-dom";

export const Profile = () => {
    return (
        <div className="p-2">
            <div>
                <div>
                    <ProfileArticle />
                    <UsersList />
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
