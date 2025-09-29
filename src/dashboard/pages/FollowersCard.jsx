import cross from "@/assets/icons/cross-close.svg";
import { LanguagesContext } from "@/context/LanguagesContext";
import { UserContext } from "@/context/userContext";
import { getUserFollowersApi } from "@/core/user/user.api";
import { Spinner } from "@/dashboard/components/Community/Spinner";
import { languages } from "@/helpers/languages";
import { useGoTo } from "@/hooks/useGoTo";
import { LoadingDots } from "@/landing/components/ui/LoadingDots";
import { useContext, useEffect, useState } from "react";

export const FollowersCard = ({ onCancel }) => {
    const { user } = useContext(UserContext);
    if (!user) return null;
    const userId = user.id;
    const [followers, setFollowers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { lang } = useContext(LanguagesContext);
    const { goTo } = useGoTo();

    useEffect(() => {
        const fetchFollowers = async () => {
            if (!userId) {
                setFollowers(null);
                setLoading(false);
                setError(null);
                return;
            }

            if (loading) return;
            try {
                setLoading(true);
                setError(null);

                const userData = await getUserFollowersApi(userId);
                console.log("El user tiene los followers", userData);
                setFollowers(userData);
            } catch (error) {
                console.error("Error al obtener followers del usuario", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchFollowers();
    }, [userId]);

    if (!userId) {
        return <p className="text-linePrimary text-center p-4">{languages[lang].profile.userNotValid}</p>;
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
                    {languages[lang].profile.loadingFollowers}
                    <LoadingDots />
                </p>
            </div>
        );
    if (!userId)
        return <p className="text-linePrimary text-center pt-10">{languages[lang].profile.userNotFound}</p>;

    console.log(followers);

    return (
        <section className="flex flex-col items-center gap-4 w-[80vw]">
            <button
                onClick={() => {
                    goTo(`/dashboard/userProfile?userId=${userId}`);
                }}
                className="cursor-pointer"
            >
                <img className="w-8" src={cross} alt="Cross icon" />
            </button>
            <div className="bg-white p-2 rounded-xl w-full flex flex-col gap-1">
                {followers?.map(({ username, firstName, lastName, displayName }, index) => (
                    <article
                        key={`${username}-${index}`}
                        className="bg-gradient-card p-2 rounded-xl w-full shadow-default text-center"
                    >
                        <p className="text-primary text-lg font-semibold">
                            {displayName ? displayName : firstName + lastName}
                        </p>
                        <span className="text-muted">@{username}</span>
                    </article>
                ))}
            </div>
        </section>
    );
};
