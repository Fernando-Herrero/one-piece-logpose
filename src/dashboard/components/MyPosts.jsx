import { LanguagesContext } from "@/context/LanguagesContext";
import { useUser } from "@/core/user/useUser";
import { PostCard } from "@/dashboard/components/Community/PostCard";
import { SkeletonCard } from "@/dashboard/components/Skeleton";
import { languages } from "@/helpers/languages";
import { useDevice } from "@/hooks/useDevice";
import { useContext, useEffect, useState } from "react";

export const MyPosts = () => {
    const [myPosts, setMyPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { getMyPosts } = useUser();
    const { lang } = useContext(LanguagesContext);
    const { isMobileXs, isMobile } = useDevice();

    useEffect(() => {
        const fetchPosts = async () => {
            if (loading) return;
            try {
                setLoading(true);
                setError(null);

                const data = await getMyPosts();
                console.log("datadatadatadata", data);
                setMyPosts(data);
            } catch (error) {
                console.error("Error al obtener mis posts", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (!myPosts)
        return <p className="text-linePrimary text-center pt-10">{languages[lang].profile.noPosts}</p>;

    if (error) return <p className="text-linePrimary text-center pt-10">{error}</p>;

    const skeletonNum = isMobileXs || isMobile ? 1 : 2;

    return (
        <div className="flex gap-1 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth p-1 w-full custom-scrollbar">
            {loading
                ? Array.from({ length: skeletonNum }, (_, index) => <SkeletonCard className="w-full" />)
                : myPosts?.map((post) => (
                      <PostCard
                          key={post.id}
                          post={post}
                          basePath="/dashboard/profile"
                          className={`${
                              isMobileXs
                                  ? "min-w-[calc(100vw-100px)]"
                                  : " max-w-[350px] sm:min-w-[200px]  snap-center flex-shrink-0"
                          }`}
                      />
                  ))}
        </div>
    );
};
