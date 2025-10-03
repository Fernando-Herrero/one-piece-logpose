import { useUser } from "@/core/user/useUser";
import { ProfileContentList } from "@/dashboard/components/ProfileComponentList";

export const MyLikedPosts = () => {
    const { getMyLikedPosts } = useUser();
    return <ProfileContentList fetchFunction={getMyLikedPosts} emptyMessageKey="noLikedPosts" />;
};
