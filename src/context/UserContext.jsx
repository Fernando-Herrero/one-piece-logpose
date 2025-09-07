import { createContext, useContext, useEffect, useState } from "react";
import { storage } from "../helpers/storage";
import { SagaContext } from "./SagaContext";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const savedUser = storage.get("existingUser");
    const userIsLoggedIn = storage.get("isLoggedIn");
    const [user, setUser] = useState(
        savedUser?.nakamaData || { id: "", username: "", password: "", experience: 0 }
    );
    const [isLoggedIn, setIsloggedIn] = useState(userIsLoggedIn || false);

    const { setSaga } = useContext(SagaContext);

    useEffect(() => {
        if (!savedUser?.nakamaData || !savedUser?.sagaProgress) return;
        if (!setSaga) {
            console.error("SagaContext no está disponible");
            return;
        }

        setUser(savedUser.nakamaData);
        setSaga(savedUser.sagaProgress);
    }, [setSaga]);

    const login = (form) => {
        const existingUserData = storage.get(`user_${form.username}`);

        //seria neceasrio con las vsalidaciones previas de login?
        if (!existingUserData?.nakamaData || !existingUserData?.sagaProgress) {
            console.error("Datos de usuario inválidos en login");
            return false;
        }

        setUser(existingUserData.nakamaData);
        if (setSaga) {
            setSaga(existingUserData.sagaProgress);
        }
        setIsloggedIn(true);

        storage.save("existingUser", existingUserData);
        storage.save("isLoggedIn", true);
        storage.remove("loginInputs");
        storage.remove("registerInputs");
    };

    const logout = () => {
        setIsloggedIn(false);
        setUser({ id: "", username: "", password: "", experience: 0 });
        if (setSaga) {
            setSaga({ saga: 0, chapter: 0 });
        }

        storage.remove("existingUser");
        storage.remove("isLoggedIn");
    };

    const deleteUser = () => {
        const currentUsername = user?.username;

        if (currentUsername) {
            console.error("No hay usuario para eliminar");
            return;
        }

        setUser({ id: "", username: "", password: "", experience: 0 });
        if (setSaga) {
            setSaga({ saga: 0, chapter: 0 });
        }
        setIsloggedIn(false);

        storage.remove(`user_${currentUsername}`);
        storage.remove("existingUser");
        storage.remove("isLoggedIn");
    };

    return (
        <UserContext.Provider value={{ user, login, isLoggedIn, logout, deleteUser }}>
            {children}
        </UserContext.Provider>
    );
};
