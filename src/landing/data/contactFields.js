import { languages } from "@/helpers/languages";

export const contactFormFields = (form, lang) => [
    {
        label: languages[lang].login.registerName + ":",
        type: "text",
        name: "name",
        id: "name",
        placeholder: "Monkey D.",
        value: form.name,
    },
    {
        label: languages[lang].login.registerSurname + ":",
        type: "text",
        name: "surname",
        id: "surname",
        placeholder: "Luffy Roronoa",
        value: form.surname,
    },
    {
        label: languages[lang].login.registerEmail + ":",
        type: "email",
        name: "email",
        id: "email",
        placeholder: "luffy@grandline.com",
        value: form.email,
    },
    {
        label: languages[lang].contact.subject,
        type: "text",
        name: "subject",
        id: "subject",
        placeholder: "¿Sobre qué quieres hablar?",
        value: form.subject,
    },
];
