import { AvatarContext } from "@/context/AvatarContext";
import { languages } from "@/helpers/languages";
import { useContext, useState } from "react";

export const useLoginValidation = () => {
    const [error, setError] = useState(null);
    const { selectedAvatar } = useContext(AvatarContext);

    const validateForm = (lang) => {
        if (!selectedAvatar) {
            setError(languages[lang].errorMessage.selectedAvatar);
            return true;
        }

        setError(null);
        return false;
    };

    const clearError = () => {
        setError(null);
    };

    // const setCostumError = (errorMessage) => {
    // 	setError(errorMessage);
    // };

    return { error, validateForm, clearError };
};
