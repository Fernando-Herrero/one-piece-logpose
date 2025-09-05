// src/data/passwordFields.js
import { languages } from "./languages";

export const passwordFields = (lang, form, isVisible, isConfirmVisible) => [
    {
        id: "password",
        name: "password",
        label: "🔒 " + languages[lang].login.password,
        placeholder: languages[lang].login.registerPassword,
        value: form.password,
        isVisible: isVisible,
        toggleType: "password",
    },
    {
        id: "confirmPassword",
        name: "confirmPassword",
        label: "🔒 " + languages[lang].login.confirmPassword,
        placeholder: languages[lang].login.registerConfirm,
        value: form.confirmPassword,
        isVisible: isConfirmVisible,
        toggleType: "confirmPassword",
    },
];
