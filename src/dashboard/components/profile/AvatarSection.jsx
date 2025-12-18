import cross from "@/assets/icons/cross-close.svg";
import { AvatarSelected } from "@/components/AvatarSelected";
import { Button } from "@/components/Button";
import { AuthContext } from "@/context/AuthContext";
import { useAuth } from "@/core/auth/useAuth";
import { useAvatar } from "@/hooks/useAvatar";
import { useTranslate } from "@/translations/useTranslate";
import { memo, useContext } from "react";

const AvatarSection = memo(({ onCancel }) => {
    const { selectedAvatar, setSelectedAvatar } = useAvatar();
    const { user } = useContext(AuthContext);
    const { updatedProfile } = useAuth();
    const { t } = useTranslate();

    const saveAvatarProfile = async () => {
        if (selectedAvatar && user) {
            await updatedProfile(user, { avatar: selectedAvatar });
            setSelectedAvatar(null);
            onCancel();
        }
    };

    return (
        <section className="flex flex-col gap-4">
            <button
                onClick={onCancel}
                className="w-8  mx-auto cursor-pointer transition duration-300 ease-out hover:scale-110"
            >
                <img src={cross} alt="Cross icon" />
            </button>
            <AvatarSelected className="bg-sunny p-2 rounded-xl w-[90vw] max-w-fit" />
            <Button type="submit" onClick={saveAvatarProfile}>
                {t("profile.change_avatar")}
            </Button>
        </section>
    );
});

export default AvatarSection;
