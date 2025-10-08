import { AvatarContext } from "@/context/AvatarContext";
import { languages } from "@/helpers/languages";
import { storage } from "@/helpers/storage";
import { useContext, useState } from "react";

export const useRegisterValidation = () => {
    const [error, setError] = useState(null);
    const { selectedAvatar } = useContext(AvatarContext);

    const isEmailRegistered = (email) => {
        try {
            const normalizedEmail = email.toLowerCase();

            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith("user_")) {
                    const userData = storage.get(key);
                    if (userData?.nakamaData?.email?.toLowerCase() === normalizedEmail) {
                        return true;
                    }
                }
            }
            return false;
        } catch (error) {
            console.error("Error checking email registration:", error);
            return false;
        }
    };

    const validateEmptyField = (value, fieldName, lang) => {
        if (!value || value.trim() === "") {
            setError(languages[lang].errorMessage[fieldName] || `${fieldName} is required`);
            return true;
        }
        return false;
    };

    const validateFieldLength = (value, fieldName, length, lang) => {
        if (value.trim().length < length) {
            setError(
                languages[lang].errorMessage[fieldName] ||
                    `${fieldName} has a minimum of ${length} characters`
            );
            return true;
        }
        return false;
    };

    const validateRegisterForm = (form, lang) => {
        if (validateEmptyField(form.name, "name", lang)) return true;
        if (validateEmptyField(form.lastName, "lastName", lang)) return true;
        if (validateEmptyField(form.email, "email", lang)) return true;
        if (validateEmptyField(form.username, "registerUsername", lang)) return true;
        if (validateEmptyField(form.password, "registerPassword", lang)) return true;
        if (validateEmptyField(form.confirmPassword, "confirmPassword", lang)) return true;

        if (validateFieldLength(form.name, "nameLength", 2, lang)) return true;
        if (validateFieldLength(form.lastName, "lastNameLength", 2, lang)) return true;
        if (validateFieldLength(form.username, "usernameLength", 3, lang)) return true;
        if (validateFieldLength(form.password, "passwordLength", 6, lang)) return true;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email.trim())) {
            setError(languages[lang].errorMessage.emailFormat || "Please enter a valid email address");
            return true;
        }

        if (isEmailRegistered(form.email.trim())) {
            setError(languages[lang].errorMessage.emailExists || "This email is already registered");
            return true;
        }

        if (form.password !== form.confirmPassword) {
            setError(languages[lang].errorMessage.passwordMatch || "Passwords do not match");
            return true;
        }

        const existingUser = storage.get(`user_${form.username}`);
        if (existingUser) {
            setError(
                languages[lang].errorMessage.userExists ||
                    "Username already exists. Please choose another one."
            );
            return true;
        }

        if (!selectedAvatar) {
            setError(languages[lang].errorMessage.selectedAvatar);
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
