import { AccordionItem } from "@/landing/components/ui/AccordionItem";
import { Container } from "@/landing/components/ui/Container";
import { useTranslate } from "@/translations/useTranslate";

const FaqHelpPage = () => {
    const { t } = useTranslate();

    const faqData = [
        {
            title: t("faq.title_what_is"),
            text: t("faq.text_what_is"),
        },
        {
            title: t("faq.title_how_create_profile"),
            text: t("faq.text_how_create_profile"),
        },
        {
            title: t("faq.title_how_unlock_characters"),
            text: t("faq.text_how_unlock_characters"),
        },
        {
            title: t("faq.title_what_are_items"),
            text: t("faq.text_what_are_items"),
        },
        {
            title: t("faq.title_can_interact_users"),
            text: t("faq.text_can_interact_users"),
        },
        {
            title: t("faq.title_what_is_dashboard"),
            text: t("faq.text_what_is_dashboard"),
        },
        {
            title: t("faq.title_what_are_series_cards"),
            text: t("faq.text_what_are_series_cards"),
        },
        {
            title: t("faq.title_need_to_pay"),
            text: t("faq.text_need_to_pay"),
        },
        {
            title: t("faq.title_how_report_bug"),
            text: t("faq.text_how_report_bug"),
        },
        {
            title: t("faq.title_use_without_seen"),
            text: t("faq.text_use_without_seen"),
        },
        {
            title: t("faq.title_special_events"),
            text: t("faq.text_special_events"),
        },
    ];

    return (
        <Container className="pb-20 space-y-2 max-w-lg">
            {faqData.map(({ title, text }, index) => (
                <AccordionItem
                    key={`${title}-${index}`}
                    title={title}
                    className="card"
                    classHeader="font-family-pirate"
                >
                    <p className="text-gradient">{text}</p>
                </AccordionItem>
            ))}
        </Container>
    );
};

export default FaqHelpPage;
