import { AuthContext } from "@/context/AuthContext";
import { LanguagesContext } from "@/context/LanguagesContext";
import { useAuth } from "@/core/auth/useAuth";
import { ToggleSwitch } from "@/dashboard/components/Privacy/ToggleSwitch";
import { languages } from "@/helpers/languages";
import { useContext, useEffect, useState } from "react";

export const PrivacySelection = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const { updatedProfile } = useAuth();
    const { lang } = useContext(LanguagesContext);
    const [privacy, setPrivacy] = useState({
        showPosts: true,
        showLikes: true,
        showBookmarked: true,
        showComments: true,
    });
    const [loadingKey, setLoadingKey] = useState(null);

    const toggleItems = [
        { key: "showPosts", label: "Posts" },
        { key: "showLikes", label: languages[lang].profile.likes },
        { key: "showBookmarked", label: languages[lang].profile.bookmarks },
        { key: "showComments", label: languages[lang].profile.comments },
    ];

    const handleToggle = async (key) => {
        setLoadingKey(key);
        const updated = { ...privacy, [key]: !privacy[key] };
        setPrivacy(updated);
        try {
            await updatedProfile(user, { privacy: updated });
        } catch (error) {
            console.error(error);
        } finally {
            setLoadingKey(null);
        }
    };

    useEffect(() => {
        if (user?.privacy) setPrivacy(user.privacy);
    }, [user]);

    return (
        <div className="flex flex-col gap-2 w-2/4">
            {toggleItems.map(({ key, label }) => (
                <div key={key} className="flex items-center justify-between gap-2">
                    <p className="text-primary">{label}</p>
                    <ToggleSwitch
                        isOn={privacy[key]}
                        handleToggle={() => handleToggle(key)}
                        isLoading={loadingKey === key}
                    />
                </div>
            ))}
        </div>
    );
};
