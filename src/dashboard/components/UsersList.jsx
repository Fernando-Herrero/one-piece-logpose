import { AuthContext } from "@/context/AuthContext";
import { UsersContext } from "@/context/UsersContext";
import { UsersListContent } from "@/dashboard/components/UsersListContent";
import { useDevice } from "@/hooks/useDevice";
import { useTranslate } from "@/translations/useTranslate";
import { memo, useContext, useMemo } from "react";

export const UsersList = memo(({ className }) => {
    const { users, loading, error } = useContext(UsersContext);
    const { isTabletXl, isDesktop } = useDevice();
    const { isAdmin } = useContext(AuthContext);
    const { t } = useTranslate();

    const itemsAdmin = useMemo(
        () => [
            { title: t("profile.total_users"), value: users.length },
            {
                title: t("profile.users_online"),
                value: users.filter((user) => user.isActive).length,
            },
            {
                title: t("profile.users_offline"),
                value: users.filter((user) => user.isActive === false).length,
            },
        ],
        [users, t]
    );

    if (!isTabletXl && !isDesktop) return null;

    if (users?.length === 0 && !loading)
        return <p className="text-linePrimary text-center p-10">{t("profile.no_users")}</p>;

    if (error) return <p className="text-linePrimary text-center p-10">{error}</p>;

    return (
        <section
            className={`hidden lg:flex h-fit flex-col items-center gap-1 w-full max-w-2xs border border-white/30 p-1 rounded-xl ${className}`}
        >
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
                createdAtLabel={t("profile.created_at")}
                skeletonCount={8}
                limit={20}
            />
        </section>
    );
});
