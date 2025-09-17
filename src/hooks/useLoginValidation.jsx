import { AvatarContext } from "@/context/AvatarContext";
import { languages } from "@/helpers/languages";
import { storage } from "@/helpers/storage";
import { useContext, useState } from "react";

export const useLoginValidation = () => {
    const [error, setError] = useState(null);
    const { selectedAvatar } = useContext(AvatarContext);

    const validateForm = (form, lang) => {
        const getUser = storage.get(`user_${form.username}`);

        if (!getUser) {
            setError(languages[lang].errorMessage.username);
            return true;
        }

        if (getUser.nakamaData.password !== form.password) {
            setError(languages[lang].errorMessage.password);
            return true;
        }

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
