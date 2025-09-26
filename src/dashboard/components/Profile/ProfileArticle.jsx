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
import { useContext, useState } from "react";

export const ProfileArticle = () => {
    const { user } = useContext(AuthContext);
    const { updatedProfile } = useAuth();
    const editorProps = useProfileEditor(user, updatedProfile);
    const { lang } = useContext(LanguagesContext);
    const { goTo } = useGoTo();

    if (!user) return <p>{LanguagesContext[lang].profile.noUser}</p>;

    const [coverImg, setCoverImg] = useState(false);
    const basicFields = getProfileFields(user, lang, coverImg);

    return (
        <article className="text-sm card gap-1 bg-gradient-card transition">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col items-center gap-2">
                    <div className="relative w-full flex flex-col items-center">
                        <div className="relative group">
                            {user?.coverImage ? (
                                <img
                                    src={user.coverImage}
                                    alt="Cover"
                                    className="w-full h-full object-cover brightness-50 rounded-tl-xl rounded-tr-xl"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full text-gray-500 italic">
                                    No cover image
                                </div>
                            )}
                            <button
                                className="hidden absolute right-0 p-2 rounded-xl cursor-pointer bg-sunny whitespace-nowrap group-hover:block z-10"
                                onClick={() => setCoverImg(true)}
                            >
                                <span className="text-gradient">
                                    {languages[lang].profile.changeCoverImg}
                                </span>
                            </button>
                        </div>

                        <div className="absolute top-10">
                            <div className="relative group">
                                <UserAvatar
                                    src={user.avatar}
                                    size="2xl"
                                    status={user.isActive ? "online" : "offline"}
                                    className="border-2 border-white"
                                />
                                <button
                                    className="hidden absolute p-2 rounded-xl cursor-pointer bg-sunny whitespace-nowrap group-hover:block z-10"
                                    onClick={() => goTo("/dashboard/profile/avatar")}
                                >
                                    <span className="text-gradient">
                                        {languages[lang].profile.changeAvatar}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-center">
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
