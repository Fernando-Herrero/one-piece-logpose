import { useNavigate } from "react-router-dom";

export const useGoTo = () => {
    const navigate = useNavigate();

    const goTo = (link) => {
        navigate(link);
    };

    return { goTo };
};
