import { LanguagesContext } from "@/context/LanguagesContext";
import { useUser } from "@/core/user/useUser";
import { SkeletonText } from "@/dashboard/components/Skeleton";
import { languages } from "@/helpers/languages";
import { useDevice } from "@/hooks/useDevice";
import classNames from "classnames";
import { useContext, useEffect, useState } from "react";

export const UserStats = () => {
    const [stats, setStats] = useState([]);
    const { bookmarkedPosts, commentedPosts, likedPosts, myPosts, totalComments } = stats;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { getUserStats } = useUser();
    const { lang } = useContext(LanguagesContext);
    const { isMobile, isTablet } = useDevice();

    const statsItems = [
        { label: languages[lang].profile.myPosts, value: myPosts },
        { label: languages[lang].profile.likedPosts, value: likedPosts },
        { label: languages[lang].profile.bookmarkedPosts, value: bookmarkedPosts },
        { label: languages[lang].profile.commentedPosts, value: commentedPosts },
        { label: languages[lang].profile.totalComments, value: totalComments },
    ];

    useEffect(() => {
        const fetchStats = async () => {
            if (loading) return;
            try {
                setLoading(true);
                setError(null);

                const data = await getUserStats();
                console.log(data);
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

    if (stats?.length === 0 && !loading)
        return <p className="text-linePrimary text-center p-10">{languages[lang].profile.noStats}</p>;

    if (error) return <p className="text-linePrimary text-center p-10">{error}</p>;

    return (
        <>
            {loading ? (
                <SkeletonText lines={5} className="bg-primary border border-white/30 rounded-xl p-2" />
            ) : (
                <div
                    className={classNames(
                        "p-2 w-full bg-gradient-card shadow rounded-xl border border-white/30 transition-transform hover:-translate-y-0.5 hover:shadow-xl sm:p-6",
                        {
                            "p-6": isMobile,
                            "p-8": isTablet,
                        }
                    )}
                >
                    <h5 className="font-bold text-lg text-primary underline sm:text-xl">
                        {languages[lang].profile.myStats}
                    </h5>
                    <article className="p-1 flex flex-col gap-1 w-full rounded-xl text-sm">
                        {statsItems.map((stat, index) => (
                            <p key={index} className="text-primary font-semibold sm:text-base">
                                {stat.label}: <span className="text-gradient font-normal">{stat.value}</span>
                            </p>
                        ))}
                    </article>
                </div>
            )}
        </>
    );
};
