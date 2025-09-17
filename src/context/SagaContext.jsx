import { storage } from "@/helpers/storage";
import { useStorage } from "@/hooks/useStorage";
import { createContext, useState } from "react";

export const SagaContext = createContext(null);

export const SagaProvider = ({ children }) => {
    const savedSaga = storage.get("saga");
    const [saga, setSaga] = useState(savedSaga || { saga: "", chapter: "" });

    useStorage("saga", saga);

    const nextChapter = () => {
        setSaga((prev) => ({ ...prev, chapter: prev.chapter + 1 }));
    };

    const nextSaga = () => {
        setSaga((prev) => ({ ...prev, saga: prev.saga + 1, chapter: 0 }));
    };

    return (
        <SagaContext.Provider value={{ saga, setSaga, nextChapter, nextSaga }}>
            {children}
        </SagaContext.Provider>
    );
};
