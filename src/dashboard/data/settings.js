import { languages } from "@/helpers/languages";

export const settingsMenu = (lang, goTo) => [
    {
        emoji: "🔒",
        title: languages[lang].settings.titleSecurity,
        text: languages[lang].settings.textSecurity,
    },
    {
        emoji: "💰",
        title: languages[lang].settings.titleMonetisation,
        text: languages[lang].settings.textMonetisation,
    },
    {
        emoji: "⭐",
        title: languages[lang].settings.titlePremium,
        text: languages[lang].settings.textPremium,
        onClick: () => goTo("/dashboard/settings/premium"),
    },
    {
        emoji: "🕒",
        title: languages[lang].settings.titleTimeline,
        text: languages[lang].settings.textTimeline,
    },
    {
        emoji: "🛡️",
        title: languages[lang].settings.titlePrivacy,
        text: languages[lang].settings.textPrivacy,
        onClick: () => goTo("/dashboard/settings/privacy"),
    },
    {
        emoji: "🔔",
        title: languages[lang].settings.titleNotifications,
        text: languages[lang].settings.textNotifications,
    },
    {
        emoji: "♿",
        title: languages[lang].settings.titleAccessibility,
        text: languages[lang].settings.textAccessibility,
    },
    {
        emoji: "📚",
        title: languages[lang].settings.titleResources,
        text: languages[lang].settings.textResources,
    },
];
