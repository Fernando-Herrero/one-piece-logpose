import { AuthContext } from "@/context/AuthContext";
import { LanguagesContext } from "@/context/LanguagesContext";
import { useAuth } from "@/core/auth/useAuth";
import { EditableField } from "@/dashboard/components/Profile/EditableField";
import { FollowSection } from "@/dashboard/components/Profile/FollowSection";
import { ProfileViewMore } from "@/dashboard/components/Profile/ProfileViewMore";
import { UserAvatar } from "@/dashboard/components/UserAvatar";
import { getProfileFields } from "@/dashboard/data/ProfileData/profileFields";
import { languages } from "@/helpers/languages";
import { useGoTo } from "@/hooks/useGoTo";
import { useProfileEditor } from "@/hooks/useProfileEditor";
import { useContext } from "react";

export const ProfileArticle = () => {
    const { user } = useContext(AuthContext);
    const { updatedProfile } = useAuth();
    const editorProps = useProfileEditor(user, updatedProfile);
    const { lang } = useContext(LanguagesContext);
    const { goTo } = useGoTo();

    if (!user) return <p>{LanguagesContext[lang].profile.noUser}</p>;

    const basicFields = getProfileFields(user, lang);

    return (
        <article className="text-sm p-2 card gap-1 bg-gradient-card transition">
            <div className="flex flex-col gap-2 text-xs">
                <div className="flex items-center gap-4">
                    <div className="relative group">
                        <UserAvatar
                            src={user.avatar}
                            size="xl"
                            status={user.isActive ? "online" : "offline"}
                        />
                        <button
                            className="hidden absolute p-2 rounded-xl cursor-pointer bg-sunny whitespace-nowrap group-hover:block"
                            onClick={() => goTo("/dashboard/profile/avatar")}
                        >
                            <span className="text-gradient">{languages[lang].profile.changeAvatar}</span>
                        </button>
                    </div>

                    <div className="flex flex-col justify-between gap-1">
                        {basicFields.map((fieldProps, index) => (
                            <EditableField
                                key={`${fieldProps.fieldName}-${index}`}
                                {...fieldProps}
                                {...editorProps}
                            />
                        ))}
                    </div>
                </div>

                <ProfileViewMore user={user} editorProps={editorProps} />

                <FollowSection user={user} />
            </div>
        </article>
    );
};
