import { SkeletonText } from "@/components/Skeleton";
import { LanguagesContext } from "@/context/LanguagesContext";
import { useUser } from "@/core/user/useUser";
import { languages } from "@/helpers/languages";
import { useContext, useEffect, useState } from "react";

export const UserStats = () => {
    const [stats, setStats] = useState([]);
    const { bookmarkedPosts, commentedPosts, likedPosts, myPosts, totalComments } = stats;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { getUserStats } = useUser();
    const { lang } = useContext(LanguagesContext);

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
                <div className="p-2 w-full bg-gradient-card shadow rounded-xl border border-white/30 transition-transform hover:-translate-y-0.5 hover:shadow-xl">
                    <h5 className="font-bold text-lg text-primary">{languages[lang].profile.myStats}</h5>
                    <article className="p-1 flex flex-col gap-1 w-full rounded-xl text-sm">
                        <p className="text-primary font-semibold">
                            {languages[lang].profile.bookmarkedPosts}:{" "}
                            <span className="text-gradient font-normal">{bookmarkedPosts}</span>
                        </p>
                        <p className="text-primary font-semibold">
                            {languages[lang].profile.commentedPosts}:{" "}
                            <span className="text-gradient font-normal">{commentedPosts}</span>
                        </p>
                        <p className="text-primary font-semibold">
                            {languages[lang].profile.likedPosts}:{" "}
                            <span className="text-gradient font-normal">{likedPosts}</span>
                        </p>
                        <p className="text-primary font-semibold">
                            {languages[lang].profile.myPosts}:{" "}
                            <span className="text-gradient font-normal">{myPosts}</span>
                        </p>
                        <p className="text-primary font-semibold">
                            {languages[lang].profile.totalComments}:{" "}
                            <span className="text-gradient font-normal">{totalComments}</span>
                        </p>
                    </article>
                </div>
            )}
        </>
    );
};
