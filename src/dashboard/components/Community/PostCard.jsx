import { OptionsMenu } from "@/dashboard/components/Community/OptionsMenu";
import { PostContent } from "@/dashboard/components/Community/PostContent";
import { PostStats } from "@/dashboard/components/Community/PostStats";
import { UserInfo } from "@/dashboard/components/Community/UserInfo";
import { UserAvatar } from "@/dashboard/components/UserAvatar";

export const PostCard = ({ post, index, classSelect = "primary", view = true }) => {
    const { id, userId, text, images, hashtags } = post;

    const classType = {
        primary:
            "flex gap-1 w-full p-2 text-xs border border-white/30 rounded bg-gradient-card shadow-default",
        secondary:
            "flex gap-1 w-full p-2 text-xs border border-white/30 border-b-0 rounded-t bg-gradient-card shadow-default",
    };

    return (
        <article key={`${id}-${index}`} className={classType[classSelect]}>
            <UserAvatar src={userId.avatar} status={false} fallback={userId.username} />
            <div className="flex-8 flex flex-col gap-1">
                <div className="flex items-center justify-between">
                    <UserInfo user={userId} />
                    <OptionsMenu id={id} userId={userId} view={view} />
                </div>

                <PostContent text={text} hashtags={hashtags} images={images} />
                <PostStats post={post} view={view} />
            </div>
        </article>
    );
};
