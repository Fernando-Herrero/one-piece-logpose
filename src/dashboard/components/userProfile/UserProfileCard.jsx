import { FollowSection } from "@/dashboard/components/Profile/FollowSection";
import { UserAdditionalInfo } from "@/dashboard/components/userProfile/UserAdditionalInfo";
import { UserBasicInfo } from "@/dashboard/components/userProfile/UserBasicInfo";
import { UserCoverAndAvatar } from "@/dashboard/components/userProfile/UserCoverAndAvatar";

export const UserProfileCard = ({ user, lang, verified, notVerified, languages }) => (
    <section className="p-2">
        <div className="bg-gradient-card shadow-lg rounded-xl text-sm w-full max-w-xs mx-auto">
            <div className="flex flex-col items-center gap-2">
                <UserCoverAndAvatar user={user} />
                <UserBasicInfo
                    user={user}
                    lang={lang}
                    verified={verified}
                    notVerified={notVerified}
                    languages={languages}
                />
            </div>

            <UserAdditionalInfo user={user} lang={lang} languages={languages} />
            <FollowSection user={user} className="px-4 pb-2 pt-4" />
        </div>
    </section>
);
