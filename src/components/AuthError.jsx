import { ButtonSec } from "@/components/ErrorBoundary/ButtonSec";
import { Heading } from "@/components/ErrorBoundary/Heading";
import { Text } from "@/components/ErrorBoundary/Text";

export const AuthError = ({ error, onRetry, onClear }) => {
    if (!error) return null;

    return (
        <div className="bg-red-50 border border-red-200 rounded-md p-4 m-4">
            <div className="flex items-center">
                <div className="shrink-0">
                    <svg className="text-red-400 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <div className="ml-2">
                    <Heading level={3} size="sm" color="danger" className="text-red-600 mb-1">
                        Error de autenticación
                    </Heading>
                    <Text size="sm" color="danger" className="text-red-600 mb-4">
                        {error}
                    </Text>
                    <div className="flex gap-2">
                        {onRetry && (
                            <ButtonSec variant="outline" size="sm" onClick={onRetry}>
                                Reintentar
                            </ButtonSec>
                        )}
                        {onClear && (
                            <ButtonSec variant="outline" size="sm" onClick={onClear}>
                                Cerrar
                            </ButtonSec>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
