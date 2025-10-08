import { useUser } from "@/core/user/useUser";
import { ProfileContentList } from "@/dashboard/components/ProfileComponentList";

export const MyPosts = () => {
    const { getMyPosts } = useUser();
    return <ProfileContentList fetchFunction={getMyPosts} emptyMessageKey="noPosts" />;
};
