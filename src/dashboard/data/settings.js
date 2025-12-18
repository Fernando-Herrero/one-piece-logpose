export const settingsMenu = (t, goTo) => [
    {
        emoji: "🔒",
        title: t("settings.title_security"),
        text: t("settings.text_security"),
    },
    {
        emoji: "💰",
        title: t("settings.title_monetisation"),
        text: t("settings.text_monetisation"),
    },
    {
        emoji: "⭐",
        title: t("settings.title_premium"),
        text: t("settings.text_premium"),
        onClick: () => goTo("/dashboard/settings/premium"),
    },
    {
        emoji: "🕒",
        title: t("settings.title_timeline"),
        text: t("settings.text_timeline"),
    },
    {
        emoji: "🛡️",
        title: t("settings.title_privacy"),
        text: t("settings.text_privacy"),
        onClick: () => goTo("/dashboard/settings/privacy"),
    },
    {
        emoji: "🔔",
        title: t("settings.title_notifications"),
        text: t("settings.text_notifications"),
    },
    {
        emoji: "♿",
        title: t("settings.title_accessibility"),
        text: t("settings.text_accessibility"),
    },
    {
        emoji: "📚",
        title: t("settings.title_resources"),
        text: t("settings.text_resources"),
    },
];
