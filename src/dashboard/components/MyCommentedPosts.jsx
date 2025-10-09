import { useAuth } from "@/core/auth/useAuth";
import { ProfileContentList } from "@/dashboard/components/ProfileComponentList";

export const MyCommentedPosts = () => {
    const { getMyCommentedPosts } = useAuth();
    return <ProfileContentList fetchFunction={getMyCommentedPosts} emptyMessageKey="noCommentedPosts" />;
};
