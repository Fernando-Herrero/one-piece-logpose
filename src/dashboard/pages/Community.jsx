import plusIcon from "@/assets/icons/plus-icon.svg";
import { PostsSection } from "@/dashboard/components/Community/PostsSection";
import { useGoTo } from "@/hooks/useGoTo";
import { Outlet } from "react-router-dom";

export const Community = () => {
    const { goTo } = useGoTo();

    const handleCreatePost = () => {
        goTo("post");
    };

    return (
        <section className="p-2 pb-20 min-h-screen">
            <PostsSection />
            <div className="fixed z-25 bottom-12 right-2 transition duration-300 hover:-translate-y-0.5 bg-white rounded-full">
                <button
                    className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden bg-gradient-card border border-white/30 shadow-default cursor-pointer"
                    onClick={handleCreatePost}
                >
                    <img className="w-8 h-8" src={plusIcon} alt="Plus icon" />
                </button>
            </div>
            <Outlet />
        </section>
    );
};
