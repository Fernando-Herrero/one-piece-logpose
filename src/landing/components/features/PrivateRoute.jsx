import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
    const { isLoggedIn } = useContext(AuthContext);

    if (!isLoggedIn) return <Navigate to="/login" />;

    return <Outlet />;
};
