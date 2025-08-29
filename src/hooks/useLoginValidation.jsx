import { useState } from "react";
import { storage } from "../helpers/storage";
import { languages } from "../data/languages";

export const useLoginValidation = () => {
	const [error, setError] = useState(null);

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
