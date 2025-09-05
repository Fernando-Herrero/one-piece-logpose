import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Overlay = ({ children }) => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    const handleClose = () => {
        setShow(true);
        setTimeout(() => navigate(".."), 300);
    };

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
                show ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleClose}
        >
            <div
                className={`max-w-[350px] w-[80vw] transform transition-transform duration-300 ${
                    show ? "translate-y-0" : "translate-y-8"
                }`}
                onClick={(event) => event.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};
