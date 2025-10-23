import { AuthContext } from "@/context/AuthContext";
import { getUsersApi } from "@/core/user/user.api";
import { createContext, useContext, useEffect, useState } from "react";

export const UsersContext = createContext(null);

export const UsersProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        if (loading) return;
        try {
            setLoading(true);
            setError(null);

            const data = await getUsersApi();
            setUsers(data);
        } catch (error) {
            console.error("Error al obtener todos los usuarios", error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user) {
            fetchUsers();
        }
    }, [user]);

    return (
        <UsersContext.Provider value={{ users, setUsers, loading, error, setError }}>
            {children}
        </UsersContext.Provider>
    );
};
