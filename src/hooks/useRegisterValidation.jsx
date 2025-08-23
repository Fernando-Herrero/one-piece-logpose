import { useState } from "react";
import { languages } from "../pages/languages";
import { storage } from "../helpers/storage";

export const useRegisterValidation = () => {
	const [error, setError] = useState(null);

	const validateRegisterForm = (form, lang) => {
		if (!form.name || form.name.trim() === "") {
			setError(languages[lang].errorMessage.name || "Name is required");
			return true;
		}

		if (!form.surname || form.surname.trim() === "") {
			setError(languages[lang].errorMessage.surname || "Surname is required");
			return true;
		}

		if (!form.email || form.email.trim() === "") {
			setError(languages[lang].errorMessage.email || "Email is required");
			return true;
		}

		if (!form.username || form.username.trim() === "") {
			setError(languages[lang].errorMessage.registrUsername);
			return true;
		}

		if (!form.password || form.password.trim() === "") {
			setError(languages[lang].errorMessage.registerPassword);
			return true;
		}

		if (!form.confirmPassword || form.confirmPassword.trim() === "") {
			setError(languages[lang].errorMessage.confirmPassword || "Please confirm your password");
			return true;
		}

		if (!form.language || form.language.trim() === "") {
			setError(languages[lang].errorMessage.language || "Please select a language");
			return true;
		}

		if (form.username.trim().length < 3) {
			setError(languages[lang].errorMessage.usernameLength);
			return true;
		}

		if (form.password.trim().length < 6) {
			setError(languages[lang].errorMessage.passwordLength);
			return true;
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(form.email.trim())) {
			setError(languages[lang].errorMessage.emailFormat || "Please enter a valid email address");
			return true;
		}

		if (form.password !== form.confirmPassword) {
			setError(languages[lang].errorMessage.passwordMatch || "Passwords do not match");
			return true;
		}

		const existingUser = storage.get(`user_${form.username}`);
		if (existingUser) {
			setError(languages[lang].errorMessage.userExists || "Username already exists. Please choose another one.");
			return true;
		}

		//ME SERVIRA PARA CUANDO TENGA QUE VALIDAR LA EDAD
		// const birthDate = new Date(form.date);
		// const today = new Date();
		// const age = today.getFullYear() - birthDate.getFullYear();
		// const monthDiff = today.getMonth() - birthDate.getMonth();

		// if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
		// 	age--;
		// }

		// if (age < 18) {
		// 	setError(languages[lang].errorMessage.minAge || "You must be at least 18 years old to register");
		// 	return true;
		// }

		setError(null);
		return false;
	};

	const clearError = () => {
		setError(null);
	};

	return { error, validateRegisterForm, clearError };
};
