// src/data/passwordFields.js

export const passwordFields = (t, form, isVisible, isConfirmVisible) => [
    {
        id: "password",
        name: "password",
        label: "🔒 " + t("login.password"),
        placeholder: t("login.register_password"),
        value: form.password,
        isVisible: isVisible,
        toggleType: "password",
    },
    {
        id: "confirmPassword",
        name: "confirmPassword",
        label: "🔒 " + t("login.confirm_password"),
        placeholder: t("login.register_confirm"),
        value: form.confirmPassword,
        isVisible: isConfirmVisible,
        toggleType: "confirmPassword",
    },
];
