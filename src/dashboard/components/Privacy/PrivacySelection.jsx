import { AuthContext } from "@/context/AuthContext";
import { useAuth } from "@/core/auth/useAuth";
import { ToggleSwitch } from "@/dashboard/components/Privacy/ToggleSwitch";
import { useTranslate } from "@/translations/useTranslate";
import { useContext, useEffect, useState } from "react";

export const PrivacySelection = () => {
    const { user } = useContext(AuthContext);
    const { updatedProfile } = useAuth();
    const { t } = useTranslate();
    const [privacy, setPrivacy] = useState({
        showPosts: true,
        showLikes: true,
        showBookmarked: true,
        showComments: true,
    });
    const [loadingKey, setLoadingKey] = useState(null);

    const toggleItems = [
        { key: "showPosts", label: "Posts" },
        { key: "showLikes", label: t("profile.likes") },
        { key: "showBookmarked", label: t("profile.bookmarks") },
        { key: "showComments", label: t("profile.comments") },
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
        <div className="flex flex-col gap-2 w-2/3 sm:w-2/4">
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
