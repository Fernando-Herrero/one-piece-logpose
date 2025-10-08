import { languages } from "@/helpers/languages";
import { useState } from "react";

export const useLoginValidation = () => {
    const [error, setError] = useState(null);

    const validateLoginForm = (form, lang) => {
        if (!form.email) {
            setError(languages[lang].errorMessage.email);
            return false;
        }
        if (!form.password) {
            setError(languages[lang].errorMessage.password);
            return false;
        }
        return true;
    };

    return { error, setError, validateLoginForm };
};
