import { getUserFromLocalStorage } from "@/core/auth/auth.service";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const user = getUserFromLocalStorage();
        if (user) {
            setUser(user);
            console.log(user);
        }
    }, []);

    return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};
