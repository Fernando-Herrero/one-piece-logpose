import { Button } from "@/components/Button";
import { AuthContext } from "@/context/AuthContext";
import { UserContext } from "@/context/UserContext";
import { useNotifications } from "@/core/notifications/useNotifications";
import { useUser } from "@/core/user/useUser";
import { FollowSection } from "@/dashboard/components/profile/FollowSection";
import { UserAdditionalInfo } from "@/dashboard/components/userProfile/UserAdditionalInfo";
import { UserBasicInfo } from "@/dashboard/components/userProfile/UserBasicInfo";
import { UserCoverAndAvatar } from "@/dashboard/components/userProfile/UserCoverAndAvatar";
import { useContext } from "react";

export const UserProfileCard = ({ user, lang, verified, notVerified, languages }) => {
    const { followUser, unfollowUser } = useUser();
    const { notification } = useNotifications();
    const { user: authUser } = useContext(AuthContext);
    const { setUser } = useContext(UserContext);

    const userAuthId = authUser?.id || authUser?._id;
    const profileUserId = user?.id || user?._id;
    const imAlreadyFollowing = authUser?.following.includes(profileUserId);

    const follow = async (userId) => {
        await followUser(userId);
        await notification({
            type: "follow",
            to: userId,
            from: userAuthId,
        });
    };

    const handleFollow = async (userId) => {
        if (imAlreadyFollowing) {
            await unfollowUser(userId);
            // setUser((prev) => ({
            //     ...prev,
            //     followers: prev.followers.filter((id) => id !== userAuthId),
            // }));
        } else {
            await followUser(userId);
            // setUser((prev) => ({
            //     ...prev,
            //     followers: [...(prev.followers || []), userAuthId],
            // }));
        }
    };

    return (
        <section className="bg-gradient-card shadow-lg rounded-xl text-sm w-full mx-auto z-0 border border-white/30">
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-0 lg:flex-col">
                <UserCoverAndAvatar user={user} />
                <UserBasicInfo
                    user={user}
                    lang={lang}
                    verified={verified}
                    notVerified={notVerified}
                    languages={languages}
                />
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col">
                <UserAdditionalInfo user={user} lang={lang} languages={languages} />

                <div className="flex flex-col justify-between sm:flex-2">
                    <FollowSection user={user} className="px-4 pb-2 pt-4 sm:self-start lg:self-auto" />
                    <Button
                        className="mb-4 mx-auto text-center sm:mb-8 lg:mb-4"
                        onClick={() => handleFollow(profileUserId)}
                    >
                        {imAlreadyFollowing
                            ? languages[lang].profile.unfollowUser
                            : languages[lang].profile.followUser}
                    </Button>
                </div>
            </div>
        </section>
    );
};
