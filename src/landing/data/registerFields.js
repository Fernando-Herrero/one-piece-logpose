export const registerFields = (t, form) => [
    {
        label: "📝 " + t("login.register_name") + ":",
        type: "text",
        name: "name",
        id: "name",
        placeholder: t("login.register_name_placeholder"),
        value: form.name,
    },
    {
        label: "📝 " + t("login.register_surname") + ":",
        type: "text",
        name: "lastName",
        id: "lastName",
        placeholder: t("login.register_surname_placeholder"),
        value: form.lastName,
    },
    {
        label: "✉️ " + t("login.register_email") + ":",
        type: "email",
        name: "email",
        id: "email",
        placeholder: t("login.register_email_placeholder"),
        value: form.email,
    },
    {
        label: "👤 Username:",
        type: "text",
        name: "username",
        id: "username",
        placeholder: t("login.register_username_placeholder"),
        value: form.username,
    },
];
