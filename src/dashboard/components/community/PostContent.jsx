import { Hashtags } from "@/dashboard/components/community/Hastags";
import { PostImages } from "@/dashboard/components/community/PostImages";

export const PostContent = ({ text, hashtags, images }) => {
    const textWithoutHashtags = text.replace(/#\w+/g, "").trim();

    return (
        <div className="flex flex-col gap-1">
            <p className="text-gradient">{textWithoutHashtags}</p>
            <Hashtags hashtags={hashtags} />
            <PostImages images={images} />
        </div>
    );
};
