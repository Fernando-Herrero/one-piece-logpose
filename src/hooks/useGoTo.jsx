import { useNavigate } from "react-router-dom";

export const useGoTo = () => {
    console.log("Render useGoTo");

    const navigate = useNavigate();

    const goTo = (link) => {
        navigate(link);
    };

    return { goTo };
};
