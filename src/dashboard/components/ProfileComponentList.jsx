import { LanguagesContext } from "@/context/LanguagesContext";
import { PostCard } from "@/dashboard/components/community/PostCard";
import { SkeletonCard } from "@/dashboard/components/Skeleton";
import { languages } from "@/helpers/languages";
import { useDevice } from "@/hooks/useDevice";
import { useFetchData } from "@/hooks/useFecthData";
import { useContext } from "react";

export const ProfileContentList = ({ fetchFunction, emptyMessageKey, basePath = "/dashboard/profile" }) => {
    const { data, loading, error, refetch } = useFetchData(fetchFunction);
    const { lang } = useContext(LanguagesContext);
    const { isMobileXs, isMobile } = useDevice();

    const skeletonNum = isMobileXs || isMobile ? 1 : 2;

    if (!data) {
        return (
            <p className="text-linePrimary text-center pt-10">{languages[lang].profile[emptyMessageKey]}</p>
        );
    }

    if (error) {
        return <p className="text-linePrimary text-center pt-10">{error.message || error}</p>;
    }

    if (loading) {
        return (
            <div className="flex gap-1 overflow-x-auto snap-x snap-mandatory scroll-smooth p-1 w-full custom-scrollbar">
                {Array.from({ length: skeletonNum }, (_, index) => (
                    <SkeletonCard key={index} className="w-full" />
                ))}
            </div>
        );
    }
    if (!data || data.length === 0) {
        return (
            <div className="flex gap-1 overflow-x-auto snap-x snap-mandatory scroll-smooth p-1 w-full custom-scrollbar">
                <div className="w-full flex justify-center">
                    <p className="text-linePrimary pt-10 text-center">
                        {languages[lang].profile.emptyMessagePosts}
                    </p>
                </div>
            </div>
        );
    }
    return (
        <div className="flex gap-1 overflow-x-auto snap-x snap-mandatory scroll-smooth p-1 w-full custom-scrollbar">
            {data.map((post) => (
                <PostCard
                    key={post.id}
                    post={post}
                    basePath={basePath}
                    className={`${
                        isMobileXs
                            ? "min-w-[calc(100vw-100px)]"
                            : "max-w-[350px] sm:min-w-[200px] snap-center flex-shrink-0"
                    }`}
                />
            ))}
        </div>
    );
};
