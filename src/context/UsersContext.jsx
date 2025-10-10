import { useUser } from "@/core/user/useUser";
import { createContext, useState } from "react";

export const UsersContext = createContext(null);

export const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { getUsers } = useUser();

    console.log("Los users bonitos", users);

    const fetchUsers = async () => {
        if (loading) return;
        try {
            setLoading(true);
            setError(null);

            const data = await getUsers();
            console.log(data);
            setUsers(data);
        } catch (error) {
            console.error("Error al obtener todos los usuarios", error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <UsersContext.Provider value={{ users, loading, error, fetchUsers }}>
            {children}
        </UsersContext.Provider>
    );
};
