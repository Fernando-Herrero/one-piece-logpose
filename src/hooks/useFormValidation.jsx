import { useState } from "react";
import { languages } from "../pages/languages";

export const useFormValidation = () => {
	const [error, setError] = useState(null);

	const validateForm = (form, lang) => {
		if (!form.username || form.username.trim() === "") {
			setError(languages[lang].errorMessage.username);
			return true;
		}

		if (!form.password || form.password.trim() === "") {
			setError(languages[lang].errorMessage.password);
			return true;
		}

		if (form.username.trim().length < 3) {
			setError(languages[lang].errorMessage.usernameLength);
			return true;
		}

		if (form.username.trim().length < 6) {
			setError(languages[lang].errorMessage.passwordLength);
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
