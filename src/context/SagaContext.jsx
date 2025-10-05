import { AuthContext } from "@/context/AuthContext";
import { createContext, useContext, useEffect, useState } from "react";

export const SagaContext = createContext(null);

export const SagaProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [saga, setSaga] = useState({ currentSaga: 0, episode: 0 });

    useEffect(() => {
        if (user?.sagaProgress) {
            setSaga(user.sagaProgress);
        }
    }, [user]);

    console.log("Mi saga actual es", saga);

    const nextChapter = () => {
        setSaga((prev) => ({ ...prev, episode: prev.episode + 1 }));
    };

    const nextSaga = () => {
        setSaga((prev) => ({ ...prev, currentSaga: prev.currentSaga + 1 }));
    };

    return (
        <SagaContext.Provider value={{ saga, setSaga, nextChapter, nextSaga }}>
            {children}
        </SagaContext.Provider>
    );
};
