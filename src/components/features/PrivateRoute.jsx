import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export const PrivateRoute = () => {
    const { isLoggedIn } = useContext(UserContext);

    if (!isLoggedIn) return <Navigate to="/login" />;

    return <Outlet />;
};
