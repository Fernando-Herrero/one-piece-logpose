import { PostCard } from "@/dashboard/components/community/PostCard";
import { SkeletonCard } from "@/dashboard/components/Skeleton";
import { useDevice } from "@/hooks/useDevice";
import { useFetchData } from "@/hooks/useFecthData";
import { useTranslate } from "@/translations/useTranslate";
import { useMemo } from "react";

export const ProfileContentList = ({ fetchFunction, emptyMessageKey, basePath = "/dashboard/profile" }) => {
    const { data, loading, error } = useFetchData(fetchFunction);
    const { t } = useTranslate();
    const { isMobileXs, isMobile } = useDevice();

    const skeletonNum = isMobileXs || isMobile ? 1 : 2;

    const dataFiltered = useMemo(
        () =>
            data
                ?.filter((post) => post.userId)
                .map((post) => (
                    <PostCard key={post.id || post._id} postId={post.id || post._id} basePath={basePath} />
                )),
        [data, basePath]
    );

    if (!data) {
        return <p className="text-linePrimary text-center pt-10">{t(`profile${emptyMessageKey}`)}</p>;
    }

    if (error) {
        return <p className="text-linePrimary text-center pt-10">{error.message || error}</p>;
    }

    if (loading) {
        return (
            <div className="flex flex-col gap-1 overflow-y-auto snap-y snap-mandatory scroll-smooth p-1 w-full custom-scrollbar">
                {Array.from({ length: skeletonNum }, (_, index) => (
                    <SkeletonCard key={index} className="w-full" />
                ))}
            </div>
        );
    }
    if (!data || data.length === 0) {
        return (
            <div className="flex gap-1 overflow-y-auto snap-y snap-mandatory scroll-smooth p-1 w-full custom-scrollbar">
                <div className="w-full flex justify-center">
                    <p className="text-linePrimary pt-10 text-center">{t("profile.empty_message_posts")}</p>
                </div>
            </div>
        );
    }
    return (
        <div className="flex flex-col gap-1 overflow-y-auto snap-y snap-mandatory scroll-smooth p-1 w-full max-h-72 custom-scrollbar lg:max-h-full">
            {dataFiltered}
        </div>
    );
};
