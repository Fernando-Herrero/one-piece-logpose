import { Container } from "@/landing/components/ui/Container";
import { LanguageSelector } from "@/translations/LanguageSelector";
import { useTranslate } from "@/translations/useTranslate";

export const Footer = () => {
    const { t } = useTranslate();
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-linePrimary py-2 relative bg-secondary">
            <Container className="flex flex-col items-center text-center gap-1">
                <div className="hidden md:flex">
                    <LanguageSelector placement="top" align="center" />
                </div>

                <div className="flex flex-col gap-0.5 text-xs">
                    <p>{t("footer.disclaimer")}</p>
                    <p>
                        &copy; {year} {t("footer.copyright")}
                    </p>
                </div>
            </Container>
        </footer>
    );
};
