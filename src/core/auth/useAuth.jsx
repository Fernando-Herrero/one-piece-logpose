import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { registerApi } from "./auth.api";
import { saveTokenInLocalStorage, saveUserInLocalStorage } from "./auth.service";

export const useAuth = () => {
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const goTo = (link) => {
        navigate(link);
    };

    const register = async (user) => {
        console.log("Registrando usuario", user);

        const authData = await registerApi(user);

        if (authData) {
            saveTokenInLocalStorage(authData.token);
            saveUserInLocalStorage(authData.user);
            setUser(authData.user);
            goTo("/");
        }
    };

    return { register };
};
