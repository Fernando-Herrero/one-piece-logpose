import notVerified from "@/assets/icons/not-verified-icon.svg";
import verified from "@/assets/icons/verified-icon.svg";
import { LanguagesContext } from "@/context/LanguagesContext";
import { useUser } from "@/core/user/useUser";
import { Spinner } from "@/dashboard/components/Community/Spinner";
import { FollowSection } from "@/dashboard/components/Profile/FollowSection";
import { UserAvatar } from "@/dashboard/components/UserAvatar";
import { languages } from "@/helpers/languages";
import { LoadingDots } from "@/landing/components/ui/LoadingDots";
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";

export const UserProfile = () => {
    const [searchParams] = useSearchParams();
    const userId = searchParams.get("userId");

    const { lang } = useContext(LanguagesContext);
    const { user, loading, error } = useUser(userId);

    if (!userId) {
        return <p className="text-center p-4">{languages[lang].profile.userNotValid}</p>;
    }
    if (error) {
        return (
            <div className="flex flex-col items-center p-4">
                <p className="text-red-600 mb-4">{error}</p>
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
                    {languages[lang].posts.loadingPosts}
                    <LoadingDots />
                </p>
            </div>
        );
    if (!user) return <p>{languages[lang].profile.userNotFound}</p>;

    return (
        <section className="p-2">
            <div className="bg-gradient-card p-4 shadow-lg rounded-xl text-sm w-full max-w-xs mx-auto">
                <div className="flex flex-col items-center gap-2">
                    <UserAvatar
                        src={user.avatar}
                        size="2xl"
                        status={user.isActive ? "online" : "offline"}
                        className="border-2 border-white"
                    />
                    <div className="text-center">
                        <p className="flex items-center justify-center gap-2 text-lg font-semibold text-primary">
                            {user.displayName ?? user.name}
                            {user.verified ? (
                                <img className="w-4" src={verified} alt="Verified icon" />
                            ) : (
                                <img className="w-4" src={notVerified} alt="Not verified icon" />
                            )}
                        </p>
                        <p className="text-xs text-muted">@{user.username}</p>
                        <p className="text-xs text-muted">
                            {languages[lang].profile.createdAt}:{" "}
                            {new Date(user.createdAt).toLocaleDateString()}
                        </p>
                        <p className="text-gradient mt-1">{user.email}</p>
                    </div>
                </div>
                {/* Datos adicionales */}
                <div className="mt-4 flex flex-col gap-2 text-left w-full">
                    {user.phoneNumber && (
                        <p className="flex items-center gap-2">
                            <span>📞</span> <p className="text-gradient">{user.phoneNumber}</p>
                        </p>
                    )}
                    {user.address && (
                        <div className="flex items-center gap-2 ">
                            <span>🏠</span> <p className="text-gradient">{user.address}</p>
                        </div>
                    )}
                    <div className="flex items-center gap-2">
                        <span>👤</span> <p className="text-primary font-semibold">Role:</p>{" "}
                        <span className="text-gradient">{user.role}</span>
                    </div>
                    <div className="flex items-center gap-2 ">
                        <span>🌐</span>{" "}
                        <p className="text-primary font-semibold">{languages[lang].profile.active}:</p>{" "}
                        <span className="text-gradient">{user.isActive ? "Online" : "Offline"}</span>
                    </div>
                </div>

                <FollowSection user={user} />
            </div>
        </section>
    );
};
