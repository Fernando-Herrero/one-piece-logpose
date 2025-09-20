import { languages } from "@/helpers/languages";

export const registerFields = (lang, form) => [
    {
        label: "📝 " + languages[lang].login.registerName + ":",
        type: "text",
        name: "name",
        id: "name",
        placeholder: languages[lang].login.registerNameMessage,
        value: form.name,
    },
    {
        label: "📝 " + languages[lang].login.registerSurname + ":",
        type: "text",
        name: "lastName",
        id: "lastName",
        placeholder: languages[lang].login.registerSurnameMessage,
        value: form.lastName,
    },
    {
        label: "✉️ " + languages[lang].login.registerEmail + ":",
        type: "email",
        name: "email",
        id: "email",
        placeholder: languages[lang].login.registerEmailMessage,
        value: form.email,
    },
    {
        label: "👤 Username:",
        type: "text",
        name: "username",
        id: "username",
        placeholder: languages[lang].login.registerUsername,
        value: form.username,
    },
];
