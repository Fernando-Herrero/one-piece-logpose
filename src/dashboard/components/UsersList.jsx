import { LanguagesContext } from "@/context/LanguagesContext";
import { useUser } from "@/core/user/useUser";
import { SkeletonCard } from "@/dashboard/components/Skeleton";
import { UserArticle } from "@/dashboard/components/UserArticle";
import { languages } from "@/helpers/languages";
import { useContext, useEffect, useState } from "react";

export const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { getUsers } = useUser();
    const { lang } = useContext(LanguagesContext);

    useEffect(() => {
        const fetchUsers = async () => {
            if (loading) return;
            try {
                setLoading(true);
                setError(null);

                const data = await getUsers();
                console.log(data);
                setUsers(data);
            } catch (error) {
                console.error("Error al obtener todos los usuarios", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (users?.length === 0 && !loading)
        return <p className="text-linePrimary text-center p-10">{languages[lang].profile.noUsers}</p>;

    if (error) return <p className="text-linePrimary text-center p-10">{error}</p>;

    return (
        <section className="hidden">
            {/* flex flex-col items-center gap-1 w-full border border-white/30 p-1 rounded-xl */}
            <h2 className="font-bold font-family-pirate text-2xl text-primary">Ranking</h2>

            {loading
                ? Array.from({ length: 8 }, (_, index) => (
                      <SkeletonCard key={index} className="w-full" showImage={false} showText={false} />
                  ))
                : users
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
