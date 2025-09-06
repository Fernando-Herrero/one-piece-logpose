import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Overlay = ({ children }) => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    console.log("Overlay renderizado, show:", show);

    useEffect(() => {
        setShow(true);
    }, []);

    const handleClose = () => {
        setShow(false);
        setTimeout(() => navigate(".."), 300);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center" onClick={handleClose}>
            <div
                className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                    show ? "opacity-95" : "opacity-0"
                }`}
            ></div>

            <div
                className={`relative max-w-[350px] w-[80vw] transform transition-transform duration-300 ${
                    show ? "translate-y-0" : "translate-y-8"
                }`}
                onClick={(event) => event.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};
