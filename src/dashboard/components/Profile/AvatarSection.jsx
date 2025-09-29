import cross from "@/assets/icons/cross-close.svg";
import { AvatarSelected } from "@/components/AvatarSelected";
import { Button } from "@/components/Button";
import { AuthContext } from "@/context/AuthContext";
import { LanguagesContext } from "@/context/LanguagesContext";
import { useAuth } from "@/core/auth/useAuth";
import { languages } from "@/helpers/languages";
import { useAvatar } from "@/hooks/useAvatar";
import { useContext } from "react";

export const AvatarSection = ({ onCancel }) => {
    const { selectedAvatar } = useAvatar();
    const { user } = useContext(AuthContext);
    const { updatedProfile } = useAuth();
    const { lang } = useContext(LanguagesContext);

    const saveAvatarProfile = async () => {
        if (selectedAvatar && user) {
            await updatedProfile(user, { avatar: selectedAvatar });
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
                {languages[lang].profile.changeAvatar}
            </Button>
        </section>
    );
};
