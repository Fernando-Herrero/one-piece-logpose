import { useAuth } from "@/core/auth/useAuth";
import { useUser } from "@/core/user/useUser";
import { SkeletonText } from "@/dashboard/components/Skeleton";
import { useDevice } from "@/hooks/useDevice";
import { useTranslate } from "@/translations/useTranslate";
import classNames from "classnames";
import { useEffect, useMemo, useState } from "react";

export const UserStats = ({ context = "myProfile", userId, className }) => {
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { getUserStats } = useAuth();
    const { getStatsUser } = useUser();
    const { t } = useTranslate();
    const { isMobile, isTablet } = useDevice();

    const statsUser = useMemo(
        () => (context === "myProfile" ? getUserStats : () => getStatsUser(userId)),
        [context, userId, getUserStats, getStatsUser]
    );

    useEffect(() => {
        const fetchStats = async () => {
            if (loading) return;
            try {
                setLoading(true);
                setError(null);

                const data = await statsUser();
                setStats(data);
            } catch (error) {
                console.error("Error al obtener stats del usuario", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    const { bookmarkedPosts, commentedPosts, likedPosts, myPosts, totalComments } = stats;

    const statsItems = useMemo(
        () => [
            { label: t("profile.my_posts"), value: myPosts },
            { label: t("profile.liked_posts"), value: likedPosts },
            { label: t("profile.bookmarked_posts"), value: bookmarkedPosts },
            { label: t("profile.commented_posts"), value: commentedPosts },
            { label: t("profile.total_comments"), value: totalComments },
        ],
        [myPosts, likedPosts, bookmarkedPosts, commentedPosts, totalComments, t]
    );

    if (stats?.length === 0 && !loading)
        return <p className="text-linePrimary text-center p-10">{t("profile.no_stats")}</p>;

    if (error) return <p className="text-linePrimary text-center p-10">{error}</p>;

    return (
        <>
            {loading ? (
                <SkeletonText lines={5} className="bg-primary border border-white/30 rounded-xl p-2" />
            ) : (
                <article
                    className={classNames(
                        `p-2 w-full bg-gradient-card shadow rounded-xl border border-white/30 card-content transition-transform hover:-translate-y-0.5 hover:shadow-xl sm:p-6 ${className}`,
                        {
                            "p-6": isMobile,
                            "p-8": isTablet,
                        }
                    )}
                >
                    <h5 className="font-bold text-lg text-primary underline sm:text-xl">
                        {t("profile.my_stats")}
                    </h5>
                    <div className="p-1 flex flex-col gap-1 w-full rounded-xl text-sm">
                        {statsItems.map((stat, index) => (
                            <p key={index} className="text-primary font-semibold sm:text-base">
                                {stat.label}: <span className="text-gradient font-normal">{stat.value}</span>
                            </p>
                        ))}
                    </div>
                </article>
            )}
        </>
    );
};
