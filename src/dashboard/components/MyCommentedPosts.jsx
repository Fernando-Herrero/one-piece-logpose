import { useUser } from "@/core/user/useUser";
import { ProfileContentList } from "@/dashboard/components/ProfileComponentList";

export const MyCommentedPosts = () => {
    const { getMyCommentedPosts } = useUser();
    return <ProfileContentList fetchFunction={getMyCommentedPosts} emptyMessageKey="noCommentedPosts" />;
};
