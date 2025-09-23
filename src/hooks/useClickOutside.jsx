import { useEffect, useRef } from "react";

/**
 * Hook para detectar clicks fuera de un elemento
 * @param {Function} callback - Función que se ejecuta cuando se hace click fuera
 * @param {boolean} isActive - Si está activo o no (opcional, por defecto true)
 * @returns {Object} - Ref que debe ser asignado al elemento
 */
export const useClickOutside = (callback, isActive = true) => {
    const ref = useRef(null);

    useEffect(() => {
        if (!isActive) return;

        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [callback, isActive]);

    return ref;
};
