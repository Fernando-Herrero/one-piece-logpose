/**
 * Crea un conjunto de funciones para manejar storage (localStorage o sessionStorage).
 * @param {Storage} storageType - El tipo de storage (localStorage o sessionStorage)
 * @returns {Object} Objeto con métodos para manejar el storage
 */
const storageHandler = (storageType) => {
    /**
     * Recupera un valor del storage.
     * @param {string} key Clave con la que se buscará en el storage.
     * @returns {*} El valor parseado si existe, o null si no existe o hay error.
     */
    const get = (key) => {
        if (!key || typeof key !== "string") return null;

        try {
            const data = storageType.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error(
                `Error al obtener datos de ${
                    storageType === localStorage ? "localStorage" : "sessionStorage"
                } con la clave "${key}":`,
                error
            );
            return null;
        }
    };
    /**
     * Guarda un valor en el storage.
     * @param {string} key Clave con la que se guardará en el storage.
     * @param {*} data Puede ser cualquier tipo serializable (objeto, array, etc.).
     */
    const save = (key, data) => {
        if (!key || typeof key !== "string") return;

        try {
            storageType.setItem(key, JSON.stringify(data));
        } catch (error) {
            console.error(
                `Error al guardar datos en ${
                    storageType === localStorage ? "localStorage" : "sessionStorage"
                } con la clave "${key}":`,
                error
            );
        }
    };
    /**
     * Elimina un valor del storage.
     * @param {string} key Clave que se desea eliminar del storage.
     */
    const remove = (key) => {
        if (!key || typeof key !== "string") return;

        try {
            storageType.removeItem(key);
        } catch (error) {
            console.error(
                `Error al eliminar datos de ${
                    storageType === localStorage ? "localStorage" : "sessionStorage"
                } con la clave "${key}":`,
                error
            );
        }
    };
    /**
     * Limpia por completo el storage.
     */
    const clear = () => {
        try {
            storageType.clear();
        } catch (error) {
            console.error(
                `Error al limpiar todo el ${
                    storageType === localStorage ? "localStorage" : "sessionStorage"
                }:`,
                error
            );
        }
    };
    /**
     * Verifica si una clave existe en el storage.
     * @param {string} key Clave a verificar.
     * @returns {boolean} True si existe, false si no.
     */
    const exists = (key) => {
        if (!key || typeof key !== "string") return false;
        return storageType.getItem(key) !== null;
    };
    /**

	 * Obtiene todas las claves del storage.
	 * @returns {string[]} Array con todas las claves.
	 */
    const getAllKeys = () => {
        try {
            return Object.keys(storageType);
        } catch (error) {
            console.error(
                `Error al obtener todas las claves de ${
                    storageType === localStorage ? "localStorage" : "sessionStorage"
                }:`,
                error
            );
            return [];
        }
    };

    return {
        get,
        save,
        remove,
        clear,
        exists,
        getAllKeys,
    };
};

// Crear instancias para cada tipo de storage
export const local = storageHandler(window.localStorage);
export const session = storageHandler(window.sessionStorage);

// Mantener compatibilidad con el código existente
export const storage = local;

// /**
//  * Recupera un valor del localStorage.
//  * @param {string} key Clave con la que se buscará en el localStorage.
//  * @returns {*} El valor parseado si existe, o null si no existe o hay error.
//  */
// const getDataFromStorage = (key) => {
//     if (!key || typeof key !== "string") return null;

//     try {
//         const data = localStorage.getItem(key);
//         return data ? JSON.parse(data) : null;
//     } catch (error) {
//         console.error(`Error al obtener datos de localStorage con la clave "${key}":`, error);
//         return null;
//     }
// };

// /**
//  * Guarda un valor en el localStorage.
//  * @param {string} key Clave con la que se guardará en el localStorage.
//  * @param {*} data Puede ser cualquier tipo serializable (objeto, array, etc.).
//  */
// const saveDataInStorage = (key, data) => {
//     if (!key || typeof key !== "string") return;

//     try {
//         localStorage.setItem(key, JSON.stringify(data));
//     } catch (error) {
//         console.error(`Error al guardar datos en localStorage con la clave "${key}":`, error);
//     }
// };

// /**
//  * Elimina un valor del localStorage.
//  * @param {string} key Clave que se desea eliminar del localStorage.
//  */
// const removeDataFromStorage = (key) => {
//     if (!key || typeof key !== "string") return;

//     try {
//         localStorage.removeItem(key);
//     } catch (error) {
//         console.error(`Error al eliminar datos de localStorage con la clave "${key}":`, error);
//     }
// };

// /**
//  * Limpia por completo el localStorage.
//  */
// const clearAllStorage = () => {
//     try {
//         localStorage.clear();
//     } catch (error) {
//         console.error("Error al limpiar todo el localStorage:", error);
//     }
// };

// export const storage = {
//     get: getDataFromStorage,
//     save: saveDataInStorage,
//     remove: removeDataFromStorage,
//     clear: clearAllStorage,
// };
