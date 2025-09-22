import { PostContent } from "@/dashboard/components/Community/PostContent";
import { PostStats } from "@/dashboard/components/Community/PostStats";
import { UserAvatar } from "@/dashboard/components/Community/UserAvatar";
import { UserInfo } from "@/dashboard/components/Community/UserInfo";

export const PostCard = ({ post, index }) => {
    const { id, userId, text, images, hashtags, likesCount, commentsCount, bookmarksCount } = post;

    return (
        <article
            key={`${id}-${index}`}
            className="flex gap-1 overflow-hidden w-full p-2 text-xs border border-white/30 rounded bg-gradient-primary shadow-default"
        >
            <UserAvatar user={userId} />
            <div className="flex-8 flex flex-col gap-1">
                <UserInfo user={userId} />
                <PostContent text={text} hashtags={hashtags} images={images} />
                <PostStats stats={{ likesCount, commentsCount, bookmarksCount }} />
            </div>
        </article>
    );
};
