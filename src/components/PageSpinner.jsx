import { Text } from "@/components/ErrorBoundary/Text";
import { Spinner } from "@/dashboard/components/community/Spinner";
import { LoadingDots } from "@/landing/components/ui/LoadingDots";
import { useTranslate } from "@/translations/useTranslate";

export const PageSpinner = ({
    message,
    size = "xl",
    color = "primary",
    className = "",
    fullPage = false,
    containerClassName = "",
    showDots = false,
}) => {
    const { t } = useTranslate();
    const baseContainerClasses = "flex items-center justify-center";

    const containerClasses = fullPage
        ? `${baseContainerClasses} min-h-screen ${containerClassName}`
        : `${baseContainerClasses} py-12 ${containerClassName}`;

    return (
        <div className={containerClasses}>
            <div className="text-center flex flex-col items-center gap-2">
                <Spinner size={size} color={color} className={`mx-auto ${className}`} />
                {message && (
                    <Text weight="medium" color="muted" className="mt-4">
                        {message || t("page_spinner.default_message")} {showDots && <LoadingDots />}
                    </Text>
                )}
            </div>
        </div>
    );
};
