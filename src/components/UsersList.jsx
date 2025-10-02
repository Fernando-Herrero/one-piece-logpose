import { UserArticle } from "@/components/UserArticle";
import { LanguagesContext } from "@/context/LanguagesContext";
import { useUser } from "@/core/user/useUser";
import { Spinner } from "@/dashboard/components/Community/Spinner";
import { languages } from "@/helpers/languages";
import { LoadingDots } from "@/landing/components/ui/LoadingDots";
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
    if (loading)
        return (
            <div className="flex flex-col items-center gap-1">
                <Spinner className="mx-auto mt-5" />{" "}
                <p className="text-gradient dark:text-black">
                    {languages[lang].profile.loadingUsers}
                    <LoadingDots />
                </p>
            </div>
        );
    if (error) return <p className="text-linePrimary text-center p-10">{error}</p>;

    return (
        <section className="flex flex-col items-center gap-1 w-full border border-white/30 p-1 rounded-xl max-w-64">
            <h2 className="font-bold font-family-pirate text-2xl text-primary">Ranking</h2>
            {users?.slice(0, 20).map((user) => (
                <UserArticle key={user.id} {...user} createdAtLabel={languages[lang].profile.createdAt} />
            ))}
        </section>
    );
};
