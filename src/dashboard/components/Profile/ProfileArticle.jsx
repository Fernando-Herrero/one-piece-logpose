import { AuthContext } from "@/context/AuthContext";
import { LanguagesContext } from "@/context/LanguagesContext";
import { useAuth } from "@/core/auth/useAuth";
import { EditableField } from "@/dashboard/components/profile/EditableField";
import { FollowSection } from "@/dashboard/components/profile/FollowSection";
import { ProfileHeader } from "@/dashboard/components/profile/ProfileHeader";
import { ProfileViewMore } from "@/dashboard/components/profile/ProfileViewMore";
import { getProfileFields } from "@/dashboard/data/ProfileData/profileFields";
import { languages } from "@/helpers/languages";
import { useDevice } from "@/hooks/useDevice";
import { useProfileEditor } from "@/hooks/useProfileEditor";
import classNames from "classnames";
import { useContext, useState } from "react";

export const ProfileArticle = () => {
    const { user, loading, error } = useContext(AuthContext);
    const { updatedProfile } = useAuth();
    const editorProps = useProfileEditor(user, updatedProfile);
    const { lang } = useContext(LanguagesContext);

    if (!user) return <p className="text-linePrimary text-center pt-10">{languages[lang].profile.noUser}</p>;
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
    if (error) return <p className="text-linePrimary text-center pt-10">{error}</p>;

    const [coverImg, setCoverImg] = useState(false);
    const basicFields = getProfileFields(user, lang, coverImg);
    const { isMobile, isTablet } = useDevice();

    return (
        <article className="text-sm card gap-1 bg-gradient-card transition">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col items-center gap-2">
                    <ProfileHeader user={user} setCoverImg={setCoverImg} />

                    <div
                        className={classNames("flex flex-col items-center text-center p-1 max-w-xs", {
                            "px-6": isMobile,
                            "px-8": isTablet,
                        })}
                    >
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
