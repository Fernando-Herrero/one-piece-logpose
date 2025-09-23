import { AuthContext } from "@/context/AuthContext";
import { LanguagesContext } from "@/context/LanguagesContext";
import { useAuth } from "@/core/auth/useAuth";
import { EditableField } from "@/dashboard/components/Profile/EditableField";
import { ProfileViewMore } from "@/dashboard/components/Profile/ProfileViewMore";
import { getProfileFields } from "@/dashboard/data/ProfileData/profileFields";
import { languages } from "@/helpers/languages";
import { useProfileEditor } from "@/hooks/useProfileEditor";
import { useContext } from "react";

export const ProfileArticle = () => {
    const { user } = useContext(AuthContext);
    const { updatedProfile } = useAuth();
    const editorProps = useProfileEditor(user, updatedProfile);
    const { lang } = useContext(LanguagesContext);

    if (!user) return <p>{LanguagesContext[lang].profile.noUser}</p>;

    const basicFields = getProfileFields(user, lang);

    return (
        <article className="text-sm p-2 card gap-1 bg-gradient-card">
            <div className="flex flex-col gap-2 text-xs">
                {basicFields.map((fieldProps, index) => (
                    <EditableField
                        key={`${fieldProps.fieldName}-${index}`}
                        {...fieldProps}
                        {...editorProps}
                    />
                ))}

                <ProfileViewMore user={user} editorProps={editorProps} />

                <p>
                    <strong className="text-primary font-semibold">
                        {languages[lang].profile.followers}:
                    </strong>{" "}
                    {user.followers.length > 0 ? (
                        <span className="text-gradient">{user.followers.join(", ")}</span>
                    ) : (
                        <span className="text-xs text-gray-600 italic">
                            {languages[lang].profile.notFollowersYet}
                        </span>
                    )}
                </p>

                <p>
                    <strong className="text-primary font-semibold">
                        {languages[lang].profile.following}:
                    </strong>{" "}
                    {user.following.length > 0 ? (
                        <span className="text-gradient">{user.following.join(", ")}</span>
                    ) : (
                        <span className="text-xs text-gray-600 italic">
                            {languages[lang].profile.notFollowingYet}
                        </span>
                    )}
                </p>
            </div>
        </article>
    );
};
