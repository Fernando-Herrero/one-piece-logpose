import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

export const PrivateRoute = () => {
    const { isLoggedIn } = useContext(AuthContext);

    if (!isLoggedIn) return <Navigate to="/login" />;

    return <Outlet />;
};
