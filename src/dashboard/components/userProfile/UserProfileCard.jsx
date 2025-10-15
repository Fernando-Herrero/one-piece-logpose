import { Button } from "@/components/Button";
import { AuthContext } from "@/context/AuthContext";
import { useUser } from "@/core/user/useUser";
import { FollowSection } from "@/dashboard/components/profile/FollowSection";
import { UserAdditionalInfo } from "@/dashboard/components/userProfile/UserAdditionalInfo";
import { UserBasicInfo } from "@/dashboard/components/userProfile/UserBasicInfo";
import { UserCoverAndAvatar } from "@/dashboard/components/userProfile/UserCoverAndAvatar";
import { useContext } from "react";

export const UserProfileCard = ({ user, lang, verified, notVerified, languages }) => {
    const profileUserId = user?.id || user?._id;
    const { user: authUser } = useContext(AuthContext);
    const { followUser, unfollowUser } = useUser();
    const imAlreadyFollowing = authUser?.following.includes(profileUserId);

    const handleFollow = (userId) => {
        imAlreadyFollowing ? unfollowUser(userId) : followUser(userId);
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

                <div className="flex flex-col justify-between sm:flex-1 sm:items-start">
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
