import { PostContext } from "@/context/PostContext";
import { OptionsMenu } from "@/dashboard/components/community/OptionsMenu";
import { PostContent } from "@/dashboard/components/community/PostContent";
import { PostStats } from "@/dashboard/components/community/PostStats";
import { UserInfo } from "@/dashboard/components/community/UserInfo";
import { UserAvatar } from "@/dashboard/components/UserAvatar";
import { useDevice } from "@/hooks/useDevice";
import classNames from "classnames";
import { useContext } from "react";

export const PostCard = ({ postId, classSelect = "primary", view = true, basePath, className }) => {
    const { isMobile, isTablet } = useDevice();
    const { posts } = useContext(PostContext);
    const post = posts?.find((post) => post.id === postId);
    if (!post) return null;
    const { id, userId, text, images, hashtags } = post;
    if (!userId) return null;

    const classType = {
        primary:
            "flex gap-2 w-full p-2 text-xs border border-white/30 rounded bg-gradient-card shadow-default sm:gap-4 sm:text-base",
        secondary:
            "flex gap-2 w-full p-2 text-xs border border-white/30 border-b-0 rounded-t bg-gradient-card shadow-default sm:gap-4 sm:text-base",
    };

    return (
        <article
            className={classNames(`${classType[classSelect]} ${className} max-h-80 sm:px-6 pt-4`, {
                "px-4 pt-4": isMobile,
                "px-6 pt-4": isTablet,
            })}
        >
            <UserAvatar src={userId?.avatar} status={false} className="sm:w-12 sm:h-12" />
            <div className="flex-8 flex justify-between flex-col gap-1 sm:gap-2">
                <div className="flex items-center justify-between">
                    <UserInfo user={userId} />
                    <OptionsMenu id={id} userId={userId} view={view} basepath={basePath} />
                </div>

                <PostContent text={text} hashtags={hashtags} images={images} />
                <PostStats post={post} view={view} />
            </div>
        </article>
    );
};
