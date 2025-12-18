import { useState } from "react";

export const useLoginValidation = () => {
    const [error, setError] = useState(null);

    const validateLoginForm = (form, t) => {
        if (!form.email) {
            setError(t("error_message.email"));
            return false;
        }
        if (!form.password) {
            setError(t("error_message.password"));
            return false;
        }
        return true;
    };

    return { error, setError, validateLoginForm };
};
