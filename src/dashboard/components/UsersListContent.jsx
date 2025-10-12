import { SkeletonCard } from "@/dashboard/components/Skeleton";
import { UserArticle } from "@/dashboard/components/UserArticle";

export const UsersListContent = ({
    users = [],
    loading = false,
    createdAtLabel = "",
    skeletonCount = 8,
    limit = 20,
    sortFn = (a, b) => b.experience - a.experience,
}) => {
    if (loading) {
        return (
            <div className="flex flex-col gap-1 w-full">
                {Array.from({ length: skeletonCount }, (_, index) => (
                    <SkeletonCard key={index} className="w-full" showImage={false} showText={false} />
                ))}
            </div>
        );
    }

    return (
        <>
            {[...users]
                .sort(sortFn)
                .slice(0, limit)
                .map((user) => (
                    <UserArticle key={user.id} {...user} createdAtLabel={createdAtLabel} />
                ))}
        </>
    );
};
