export const contactFormFields = (form, t) => [
    {
        label: t("login.register_name") + ":",
        type: "text",
        name: "name",
        id: "name",
        placeholder: "Monkey D.",
        value: form.name,
    },
    {
        label: t("login.register_surname") + ":",
        type: "text",
        name: "surname",
        id: "surname",
        placeholder: "Luffy Roronoa",
        value: form.surname,
    },
    {
        label: t("login.register_email") + ":",
        type: "email",
        name: "email",
        id: "email",
        placeholder: "luffy@grandline.com",
        value: form.email,
    },
    {
        label: t("contact.subject"),
        type: "text",
        name: "subject",
        id: "subject",
        placeholder: "¿Sobre qué quieres hablar?",
        value: form.subject,
    },
];
