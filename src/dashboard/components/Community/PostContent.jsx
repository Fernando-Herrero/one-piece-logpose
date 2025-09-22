import { Hashtags } from "@/dashboard/components/Community/Hastags";
import { PostImages } from "@/dashboard/components/Community/PostImages";

export const PostContent = ({ text, hashtags, images }) => {
    const textWithoutHashtags = text.replace(/#\w+/g, "").trim();

    return (
        <div>
            <p className="text-gradient">{textWithoutHashtags}</p>
            <Hashtags hashtags={hashtags} />
            <PostImages images={images} />
        </div>
    );
};
