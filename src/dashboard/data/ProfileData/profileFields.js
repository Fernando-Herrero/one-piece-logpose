export const getProfileFields = (user, t, coverImg) => [
    {
        value: user?.displayName,
        fieldName: "displayName",
        placeholder: t("profile.input_displayname"),
        emptyText: t("profile.empty_displayname"),
    },
    {
        value: user?.username ? `@${user.username}` : "",
        fieldName: "username",
        readOnly: true,
    },
    {
        value: user?.bio,
        fieldName: "bio",
        placeholder: t("profile.input_bio"),
        emptyText: t("profile.empty_bio"),
    },
    {
        value: user?.coverImage,
        fieldName: "coverImage",
        placeholder: t("profile.input_cover_image"),
        emptyText: t("profile.empty_cover_image"),
        changeCoverImg: coverImg,
    },
];

export const getExtendedProfileFields = (user, t) => [
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
        emptyText: t("profile.empty_email"),
        readOnly: true,
    },
    {
        label: "🏠",
        value: user?.address,
        fieldName: "address",
        placeholder: t("profile.input_address"),
        emptyText: t("profile.input_address"),
    },
    {
        label: "📞",
        value: user?.phoneNumber,
        fieldName: "phoneNumber",
        type: "tel",
        placeholder: t("profile.phone"),
        emptyText: t("profile.phone"),
    },
    {
        label: `🛡️ Role:`,
        value: user?.role,
        fieldName: "role",
        emptyText: "",
        readOnly: true,
    },
    {
        label: `📅 ${t("profile.created_at")}:`,
        value: user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : null,
        fieldName: "createdAt",
        emptyText: "",
        readOnly: true,
    },
];
