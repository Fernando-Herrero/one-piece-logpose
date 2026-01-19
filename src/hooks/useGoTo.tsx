import { useNavigate, type To } from "react-router-dom";

export const useGoTo = () => {
    const navigate = useNavigate();

    const goTo = (link: To) => {
        navigate(link);
    };

    return { goTo };
};
