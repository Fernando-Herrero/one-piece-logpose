export const ErrorState = ({ error, onRetry, errorText }) => (
    <div className="flex flex-col items-center p-4">
        <p className="text-red-600 mb-4">{error.message || "Error desconocido"}</p>
        <button onClick={onRetry} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            {errorText}
        </button>
    </div>
);
