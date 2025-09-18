import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
    const { user } = useContext(AuthContext);

    if (!user) return <Navigate to="/home" />;

    return <Outlet />;
};
