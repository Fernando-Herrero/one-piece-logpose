import plusIcon from "@/assets/icons/plus-icon.svg";
import { ErrorBoundary } from "@/components/ErrorBoundary/ErrorBoundary";
import { PageError } from "@/components/ErrorBoundary/PageError";
import { PostsSection } from "@/dashboard/components/community/PostsSection";
import { UsersList } from "@/dashboard/components/UsersList";
import { useGoTo } from "@/hooks/useGoTo";
import { useTranslate } from "@/translations/useTranslate";
import { Outlet } from "react-router-dom";

const Community = () => {
    const { t } = useTranslate();
    const { goTo } = useGoTo();

    const handleCreatePost = () => {
        goTo("post");
    };

    return (
        <div className="p-2 mb-40 min-h-screen max-w-container relative flex gap-2 mx-auto sm:mb-10 md:p-8 md:gap-4">
            <PostsSection />
            <button className="floating-btn bg-secondary" onClick={handleCreatePost}>
                <img className="w-8 h-8" src={plusIcon} alt="Plus icon" />
            </button>
            <ErrorBoundary
                fallback={
                    <PageError
                        title={t("pageError.users_list.title")}
                        message={t("pageError.users_list.message")}
                        onRetry={() => window.location.reload()}
                        noCenter={true}
                    />
                }
            >
                <UsersList />
            </ErrorBoundary>
            <Outlet />
        </div>
    );
};

export default Community;
