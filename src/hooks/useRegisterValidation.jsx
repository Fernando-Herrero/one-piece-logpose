import { AvatarContext } from "@/context/AvatarContext";
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

    const validateEmptyField = (value, fieldName, t) => {
        if (!value || value.trim() === "") {
            setError(t(`error_message.${fieldName}`) || `${fieldName} is required`);
            return true;
        }
        return false;
    };

    const validateFieldLength = (value, fieldName, length, t) => {
        if (value.trim().length < length) {
            setError(t(`error_message.${fieldName}`) || `${fieldName} has a minimum of ${length} characters`);
            return true;
        }
        return false;
    };

    const validateRegisterForm = (form, t) => {
        if (validateEmptyField(form.name, "name", t)) return true;
        if (validateEmptyField(form.lastName, "lastName", t)) return true;
        if (validateEmptyField(form.email, "email", t)) return true;
        if (validateEmptyField(form.username, "registerUsername", t)) return true;
        if (validateEmptyField(form.password, "registerPassword", t)) return true;
        if (validateEmptyField(form.confirmPassword, "confirmPassword", t)) return true;

        if (validateFieldLength(form.name, "nameLength", 2, t)) return true;
        if (validateFieldLength(form.lastName, "lastNameLength", 2, t)) return true;
        if (validateFieldLength(form.username, "usernameLength", 3, t)) return true;
        if (validateFieldLength(form.password, "passwordLength", 6, t)) return true;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email.trim())) {
            setError(t("error_message.email_format") || "Please enter a valid email address");
            return true;
        }

        if (isEmailRegistered(form.email.trim())) {
            setError(t("error_message.email_exists") || "This email is already registered");
            return true;
        }

        if (form.password !== form.confirmPassword) {
            setError(t("error_message.password_match") || "Passwords do not match");
            return true;
        }

        const existingUser = storage.get(`user_${form.username}`);
        if (existingUser) {
            setError(t("error_message.user_exists") || "Username already exists. Please choose another one.");
            return true;
        }

        if (!selectedAvatar) {
            setError(t("error_message.selected_avatar"));
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
