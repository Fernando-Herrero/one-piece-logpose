import { useUser } from "@/core/user/useUser";
import { ProfileContentList } from "@/dashboard/components/ProfileComponentList";

export const MyBookmarkedPosts = () => {
    const { getMyBookmarkedPosts } = useUser();
    return <ProfileContentList fetchFunction={getMyBookmarkedPosts} emptyMessageKey="noBookmarkedPosts" />;
};
