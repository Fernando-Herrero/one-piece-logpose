import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Overlay = ({ children }) => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setTimeout(() => navigate(".."), 300);
    };

    useEffect(() => {
        setShow(true);

        const handleEscape = (event) => {
            if (event.key === "Escape") handleClose();
        };

        window.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center" onClick={handleClose}>
            <div
                className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                    show ? "opacity-95" : "opacity-0"
                }`}
            ></div>

            <div
                className={`relative max-w-[350px] w-[80vw] transform transition-all duration-300 ${
                    show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                }`}
                onClick={(event) => event.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};
