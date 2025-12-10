import { ButtonSec } from "@/components/ErrorBoundary/ButtonSec";
import { Heading } from "@/components/ErrorBoundary/Heading";
import { Text } from "@/components/ErrorBoundary/Text";
import { memo, useMemo } from "react";

export const PageError = memo(
    ({
        title = "Error al cargar los datos",
        message,
        icon = "⚠️",
        onRetry,
        retryText = "Reintentar",
        className = "",
        containerClassName = "",
        fullPage = false,
    }) => {
        const containerClasses = useMemo(() => {
            const baseContainerClasses = "flex items-center justify-center";
            return fullPage
                ? `${baseContainerClasses} min-h-screen ${containerClassName}`
                : `${baseContainerClasses} py-12 ${containerClassName}`;
        }, [fullPage, containerClassName]);

        return (
            <div className={containerClasses}>
                <div className={`flex flex-col items-center ${className}`}>
                    <Text size="4xl" className="mb-4" color="danger" as="div">
                        {icon}
                    </Text>

                    <Heading level={3} size="lg" color="danger" className="mb-2">
                        {title}
                    </Heading>

                    {message && (
                        <Text size="sm" color="muted" align="center" className="mb-6 max-w-md mx-auto">
                            {message}
                        </Text>
                    )}

                    {onRetry && (
                        <ButtonSec variant="danger" onClick={onRetry}>
                            {retryText}
                        </ButtonSec>
                    )}

                    <ButtonSec
                        variant="tertiary"
                        className="mt-4"
                        onClick={() => (window.location.href = "/")}
                    >
                        Volver al inicio
                    </ButtonSec>
                </div>
            </div>
        );
    }
);
