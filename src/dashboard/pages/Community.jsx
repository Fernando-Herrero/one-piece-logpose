import plusIcon from "@/assets/icons/plus-icon.svg";
import { PostsSection } from "@/dashboard/components/Community/PostsSection";
import { useGoTo } from "@/hooks/useGoTo";
import { Outlet } from "react-router-dom";

export const Community = () => {
    const { goTo } = useGoTo();

    const createPost = () => {
        goTo("post");
    };

    return (
        <section className="p-2 pb-20 min-h-screen">
            <PostsSection />
            <div className="fixed z-50 bottom-12 right-2 transition duration-300 hover:-translate-y-0.5">
                <button
                    className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden bg-gradient-primary border border-white/30 shadow-default cursor-pointer"
                    onClick={createPost}
                >
                    <img className="w-8 h-8" src={plusIcon} alt="Plus icon" />
                </button>
            </div>
            <Outlet />
        </section>
    );
};
