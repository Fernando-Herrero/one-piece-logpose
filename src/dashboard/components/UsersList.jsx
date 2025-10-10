import { AuthContext } from "@/context/AuthContext";
import { LanguagesContext } from "@/context/LanguagesContext";
import { UsersContext } from "@/context/UsersContext";
import { UsersListContent } from "@/dashboard/components/UsersListContent";
import { languages } from "@/helpers/languages";
import { useDevice } from "@/hooks/useDevice";
import { useContext, useEffect } from "react";

export const UsersList = () => {
    const { users, loading, error, fetchUsers } = useContext(UsersContext);
    const { isTabletXl, isDesktop } = useDevice();
    const { isAdmin } = useContext(AuthContext);
    const { lang } = useContext(LanguagesContext);

    const itemsAdmin = [
        { title: languages[lang].profile.totalUsers, value: users.length },
        { title: languages[lang].profile.usersOnline, value: users.filter((user) => user.isActive).length },
        {
            title: languages[lang].profile.usersOffline,
            value: users.filter((user) => user.isActive === false).length,
        },
    ];

    useEffect(() => {
        if ((isTabletXl || isDesktop) && users?.length === 0 && !loading) {
            fetchUsers();
        }
    }, [isTabletXl, isDesktop]);

    if (!isTabletXl && !isDesktop) return null;

    if (users?.length === 0 && !loading)
        return <p className="text-linePrimary text-center p-10">{languages[lang].profile.noUsers}</p>;

    if (error) return <p className="text-linePrimary text-center p-10">{error}</p>;

    return (
        <section className="hidden md:flex h-fit flex-col items-center gap-1 w-full border border-white/30 p-1 rounded-xl">
            {!isAdmin && <h2 className="font-bold font-family-pirate text-2xl text-primary">Ranking</h2>}
            {isAdmin && (
                <section className="bg-gradient-card border border-white/30 p-2 rounded-xl w-full max-w-2xs">
                    {itemsAdmin.map(({ title, value }, index) => (
                        <p
                            key={`${title}-${index}`}
                            className="flex items-center gap-1 text-primary font-semibold"
                        >
                            {title}:<span className="font-normal">{value}</span>
                        </p>
                    ))}
                </section>
            )}

            <UsersListContent
                users={users}
                loading={loading}
                createdAtLabel={languages[lang].profile.createdAt}
                skeletonCount={8}
                limit={20}
            />
        </section>
    );
};
