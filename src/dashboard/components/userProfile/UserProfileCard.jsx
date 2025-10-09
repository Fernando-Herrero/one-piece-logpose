import { FollowSection } from "@/dashboard/components/profile/FollowSection";
import { UserAdditionalInfo } from "@/dashboard/components/userProfile/UserAdditionalInfo";
import { UserBasicInfo } from "@/dashboard/components/userProfile/UserBasicInfo";
import { UserCoverAndAvatar } from "@/dashboard/components/userProfile/UserCoverAndAvatar";

export const UserProfileCard = ({ user, lang, verified, notVerified, languages }) => (
    <section className="bg-gradient-card shadow-lg rounded-xl text-sm w-full mx-auto z-0">
        <div className="flex flex-col items-center gap-2 sm:flex-row lg:flex-col">
            <UserCoverAndAvatar user={user} />
            <UserBasicInfo
                user={user}
                lang={lang}
                verified={verified}
                notVerified={notVerified}
                languages={languages}
            />
        </div>

        <div className="sm:flex lg:flex-col">
            <UserAdditionalInfo user={user} lang={lang} languages={languages} />
            <FollowSection user={user} className="px-4 pb-2 pt-4 sm:self-end lg:self-auto" />
        </div>
    </section>
);
