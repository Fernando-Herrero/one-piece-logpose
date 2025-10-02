import { AuthContext } from "@/context/AuthContext";
import { LanguagesContext } from "@/context/LanguagesContext";
import { useAuth } from "@/core/auth/useAuth";
import { EditableField } from "@/dashboard/components/Profile/EditableField";
import { FollowSection } from "@/dashboard/components/Profile/FollowSection";
import { ProfileHeader } from "@/dashboard/components/Profile/ProfileHeader";
import { ProfileViewMore } from "@/dashboard/components/Profile/ProfileViewMore";
import { getProfileFields } from "@/dashboard/data/ProfileData/profileFields";
import { languages } from "@/helpers/languages";
import { useProfileEditor } from "@/hooks/useProfileEditor";
import { useContext, useState } from "react";

export const ProfileArticle = () => {
    const { user, loading, error } = useContext(AuthContext);
    const { updatedProfile } = useAuth();
    const editorProps = useProfileEditor(user, updatedProfile);
    const { lang } = useContext(LanguagesContext);

    if (!user) return <p>{languages[lang].profile.noUser}</p>;
    if (loading)
        return (
            <div className="flex flex-col items-center gap-1">
                <Spinner className="mx-auto mt-5" />{" "}
                <p className="text-gradient dark:text-black">
                    {languages[lang].profile.loadingProfile}
                    <LoadingDots />
                </p>
            </div>
        );
    if (error) return <p className="text-red-700">{error}</p>;

    const [coverImg, setCoverImg] = useState(false);
    const basicFields = getProfileFields(user, lang, coverImg);

    return (
        <article className="text-sm card gap-1 bg-gradient-card transition max-w-sm">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col items-center gap-2">
                    <ProfileHeader user={user} setCoverImg={setCoverImg} />

                    <div className="flex flex-col items-center text-center">
                        {basicFields.map((fieldProps, index) => (
                            <EditableField
                                key={`${fieldProps.fieldName}-${index}`}
                                user={user}
                                {...fieldProps}
                                {...editorProps}
                            />
                        ))}
                    </div>
                </div>

                <ProfileViewMore user={user} editorProps={editorProps} />

                <FollowSection user={user} className="px-2 pb-2" basePath="/dashboard/profile" />
            </div>
        </article>
    );
};
