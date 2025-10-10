import { LanguagesContext } from "@/context/LanguagesContext";
import { UsersContext } from "@/context/UsersContext";
import { SkeletonCard } from "@/dashboard/components/Skeleton";
import { UserArticle } from "@/dashboard/components/UserArticle";
import { languages } from "@/helpers/languages";
import { useContext } from "react";

export const UsersList = () => {
    const { users, loading, error } = useContext(UsersContext);

    const { lang } = useContext(LanguagesContext);

    if (users?.length === 0 && !loading)
        return <p className="text-linePrimary text-center p-10">{languages[lang].profile.noUsers}</p>;

    if (error) return <p className="text-linePrimary text-center p-10">{error}</p>;

    return (
        <section className="hidden md:flex h-fit flex-col items-center gap-1 w-full border border-white/30 p-1 rounded-xl">
            <h2 className="font-bold font-family-pirate text-2xl text-primary">Ranking</h2>

            {loading
                ? Array.from({ length: 8 }, (_, index) => (
                      <SkeletonCard key={index} className="w-full" showImage={false} showText={false} />
                  ))
                : [...users]
                      .sort((a, b) => b.experience - a.experience)
                      ?.slice(0, 20)
                      .map((user) => (
                          <UserArticle
                              key={user.id}
                              {...user}
                              createdAtLabel={languages[lang].profile.createdAt}
                          />
                      ))}
        </section>
    );
};
