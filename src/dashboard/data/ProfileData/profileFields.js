import { languages } from "@/helpers/languages";

export const getProfileFields = (user, lang) => [
    {
        label: languages[lang].profile.name,
        value: user?.displayName,
        fieldName: "displayName",
        placeholder: languages[lang].profile.inputDIsplayname,
        emptyText: languages[lang].profile.emptyDisplayName,
    },
    {
        label: "Username",
        value: user?.username ? `@${user.username}` : "",
        fieldName: "username",
        readOnly: true,
    },
    {
        label: languages[lang].profile.email,
        value: user?.email,
        fieldName: "email",
        emptyText: languages[lang].profile.emptyEmail,
        readOnly: true,
    },
];

export const getExtendedProfileFields = (user, lang) => [
    {
        label: languages[lang].profile.name,
        value: user?.name,
        fieldName: "name",
        placeholder: "",
        emptyText: "",
        readOnly: true,
    },
    {
        label: languages[lang].profile.lastName,
        value: user?.lastName,
        fieldName: "lastName",
        placeholder: "",
        emptyText: "",
        readOnly: true,
    },
    {
        label: languages[lang].profile.address,
        value: user?.address,
        fieldName: "address",
        placeholder: languages[lang].profile.inputAddress,
        emptyText: languages[lang].profile.inputAddress,
    },
    {
        label: languages[lang].profile.phone,
        value: user?.phoneNumber,
        fieldName: "phoneNumber",
        type: "tel",
        placeholder: languages[lang].profile.phone,
        emptyText: languages[lang].profile.phone,
    },
    {
        label: "Role",
        value: user?.role,
        fieldName: "role",
        emptyText: "",
        readOnly: true,
    },
    {
        label: languages[lang].profile.createdAt,
        value: user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : null,
        fieldName: "createdAt",
        emptyText: "",
        readOnly: true,
    },
];
