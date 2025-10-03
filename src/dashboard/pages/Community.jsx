import plusIcon from "@/assets/icons/plus-icon.svg";
import { PostsSection } from "@/dashboard/components/Community/PostsSection";
import { UsersList } from "@/dashboard/components/UsersList";
import { useGoTo } from "@/hooks/useGoTo";
import { Outlet } from "react-router-dom";

export const Community = () => {
    const { goTo } = useGoTo();

    const handleCreatePost = () => {
        goTo("post");
    };

    return (
        <div className="p-2 pb-20 min-h-screen max-w-container relative flex gap-2">
            <PostsSection />
            <button className="floating-btn bg-secondary" onClick={handleCreatePost}>
                <img className="w-8 h-8" src={plusIcon} alt="Plus icon" />
            </button>
            <UsersList />
            <Outlet />
        </div>
    );
};
