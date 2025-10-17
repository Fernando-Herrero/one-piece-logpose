import cross from "@/assets/icons/cross-close.svg";
import { AuthContext } from "@/context/AuthContext";
import { LanguagesContext } from "@/context/LanguagesContext";
import { UserContext } from "@/context/UserContext";
import { useUser } from "@/core/user/useUser";
import { EmptyState } from "@/dashboard/components/followListComponents/EmptyState";
import { ErrorState } from "@/dashboard/components/followListComponents/ErrorState";
import { FOLLOW_CONFIG } from "@/dashboard/components/followListComponents/FOLLOW_CONFIG";
import { LoadingState } from "@/dashboard/components/followListComponents/LoadingState";
import { UserItem } from "@/dashboard/components/followListComponents/UserItem";
import { languages } from "@/helpers/languages";
import { useGoTo } from "@/hooks/useGoTo";
import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const FollowListCard = ({ onCancel, type = "followers" }) => {
    const [searchParams] = useSearchParams();
    const userId = searchParams.get("userId");
    const from = searchParams.get("from");

    const userContext = useContext(UserContext);
    const authContext = useContext(AuthContext);
    console.log("este es el authcontext", authContext);
    const profileUser = userContext?.user || authContext?.user;

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { lang } = useContext(LanguagesContext);
    const { goTo } = useGoTo();
    const { unfollowUser } = useUser();

    const { fetchFn, emptyKey } = FOLLOW_CONFIG[type];

    useEffect(() => {
        if (!userId) {
            setUsers(null);
            setError(null);
            return;
        }

        let isMounted = true;

        const fetchUsers = async () => {
            try {
                setLoading(true);
                setError(null);
                const userData = await fetchFn(userId);
                if (isMounted) {
                    setUsers(userData);
                }
            } catch (error) {
                console.error(`Error al obtener ${type} del usuario`, error);
                if (isMounted) {
                    setError(error);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchUsers();

        return () => {
            isMounted = false;
        };
    }, [userId, type, fetchFn]);

    const handleUnfollow = async (unfollowedUserId) => {
        try {
            await unfollowUser(unfollowedUserId);
            setUsers((prev) => prev.filter((user) => user.id !== unfollowedUserId));
        } catch (error) {
            console.error("Error al dejar de seguir", error);
        }
    };

    if (!userId) {
        return <p className="text-linePrimary text-center pt-10">{languages[lang].profile.userNotFound}</p>;
    }

    if (error) {
        return (
            <ErrorState
                error={error}
                onRetry={() => window.location.reload()}
                errorText={languages[lang].profile.userError}
            />
        );
    }

    if (loading) {
        return (
            <LoadingState
                text={languages[lang].profile[`loading${type.charAt(0).toUpperCase() + type.slice(1)}`]}
            />
        );
    }

    return (
        <section className="flex flex-col items-center gap-4 w-[80vw] max-w-2xs">
            <button onClick={() => goTo(from)} className="cursor-pointer">
                <img className="w-8" src={cross} alt="Cross icon" />
            </button>
            <div className="bg-sunny p-1 rounded-xl w-full flex flex-col gap-1">
                {users?.length > 0 ? (
                    users.map((user) => (
                        <UserItem
                            key={`${user.username}-${user.id}`}
                            user={user}
                            canUnfollow={profileUser?.following?.includes(user.id)}
                        />
                    ))
                ) : (
                    <EmptyState type={type} lang={lang} />
                )}
            </div>
        </section>
    );
};
