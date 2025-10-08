import { languages } from "@/helpers/languages";

export const getProfileFields = (user, lang, coverImg) => [
    {
        value: user?.displayName,
        fieldName: "displayName",
        placeholder: languages[lang].profile.inputDIsplayname,
        emptyText: languages[lang].profile.emptyDisplayName,
    },
    {
        value: user?.username ? `@${user.username}` : "",
        fieldName: "username",
        readOnly: true,
    },
    {
        value: user?.bio,
        fieldName: "bio",
        placeholder: languages[lang].profile.inputBio,
        emptyText: languages[lang].profile.emptyBio,
    },
    {
        value: user?.coverImage,
        fieldName: "coverImage",
        placeholder: languages[lang].profile.inputCoverImage,
        emptyText: languages[lang].profile.emptyCoverImage,
        changeCoverImg: coverImg,
    },
];

export const getExtendedProfileFields = (user, lang) => [
    {
        label: "👤",
        value: `${user?.name ?? ""} ${user?.lastName ?? ""}`,
        fieldName: "name",
        placeholder: "",
        emptyText: "",
        readOnly: true,
    },

    {
        label: "📧",
        value: user?.email,
        fieldName: "email",
        emptyText: languages[lang].profile.emptyEmail,
        readOnly: true,
    },
    {
        label: "🏠",
        value: user?.address,
        fieldName: "address",
        placeholder: languages[lang].profile.inputAddress,
        emptyText: languages[lang].profile.inputAddress,
    },
    {
        label: "📞",
        value: user?.phoneNumber,
        fieldName: "phoneNumber",
        type: "tel",
        placeholder: languages[lang].profile.phone,
        emptyText: languages[lang].profile.phone,
    },
    {
        label: `🛡️ Role:`,
        value: user?.role,
        fieldName: "role",
        emptyText: "",
        readOnly: true,
    },
    {
        label: `📅 ${languages[lang].profile.createdAt}:`,
        value: user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : null,
        fieldName: "createdAt",
        emptyText: "",
        readOnly: true,
    },
];
