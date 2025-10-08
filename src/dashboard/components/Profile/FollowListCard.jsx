import cross from "@/assets/icons/cross-close.svg";
import { LanguagesContext } from "@/context/LanguagesContext";
import { getUserFollowersApi, getUserFollowingApi } from "@/core/user/user.api";
import { Spinner } from "@/dashboard/components/community/Spinner";
import { languages } from "@/helpers/languages";
import { useGoTo } from "@/hooks/useGoTo";
import { LoadingDots } from "@/landing/components/ui/LoadingDots";
import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const FollowListCard = ({ onCancel, type = "followers" }) => {
    const [searchParams] = useSearchParams();
    const userId = searchParams.get("userId");
    const from = searchParams.get("from");

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { lang } = useContext(LanguagesContext);
    const { goTo } = useGoTo();

    const config = {
        followers: {
            fetchFn: getUserFollowersApi,
            loadingText: languages[lang].profile.loadingFollowers,
        },
        following: {
            fetchFn: getUserFollowingApi,
            loadingText: languages[lang].profile.loadingFollowing,
        },
    };

    const { fetchFn, loadingText } = config[type];

    useEffect(() => {
        const fetchUsers = async () => {
            if (!userId) {
                setUsers(null);
                setLoading(false);
                setError(null);
                return;
            }

            if (loading) return;
            try {
                setLoading(true);
                setError(null);

                const userData = await fetchFn(userId);
                setUsers(userData);
            } catch (error) {
                console.error(`Error al obtener ${type} del usuario`, error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, [userId, type]);

    if (!userId) {
        return <p className="text-linePrimary text-center pt-10">{languages[lang].profile.userNotFound}</p>;
    }

    if (error) {
        return (
            <div className="flex flex-col items-center p-4">
                <p className="text-red-600 mb-4">{error.message || "Error desconocido"}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    {languages[lang].profile.userError}{" "}
                </button>
            </div>
        );
    }
    if (loading)
        return (
            <div className="flex flex-col items-center gap-1">
                <Spinner className="mx-auto mt-5" />{" "}
                <p className="text-gradient">
                    {loadingText}
                    <LoadingDots />
                </p>
            </div>
        );

    return (
        <section className="flex flex-col items-center gap-4 w-[80vw] max-w-2xs">
            <button onClick={() => goTo(from)} className="cursor-pointer">
                <img className="w-8" src={cross} alt="Cross icon" />
            </button>
            <div className="bg-white p-2 rounded-xl w-full flex flex-col gap-1">
                {users?.length > 0 ? (
                    users.map(({ username, firstName, lastName, displayName }, index) => (
                        <article
                            key={`${username}-${index}`}
                            className="bg-gradient-card p-2 rounded-xl w-full shadow-default text-center"
                        >
                            <p className="text-primary text-lg font-semibold">
                                {displayName ? displayName : `${firstName} ${lastName}`}
                            </p>
                            <span className="text-muted">@{username}</span>
                        </article>
                    ))
                ) : (
                    <p className="text-linePrimary text-center p-4">
                        {type === "followers"
                            ? languages[lang].profile.notFollowersYet
                            : languages[lang].profile.notFollowingYet}
                    </p>
                )}
            </div>
        </section>
    );
};
