import classNames from "classnames";
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
        <div className="fixed inset-0 flex items-center justify-center z-100" onClick={handleClose}>
            <div className={`absolute inset-0 bg-black/90 duration-300`}></div>

            <div
                className={classNames(
                    "relative max-w-[350px] w-[80vw] rounded-2xl bg-white transform transition-all duration-300 sm:min-w-md",
                    {
                        "translate-y-0 opacity-100": show,
                        "translate-y-full opacity-0": !show,
                    }
                )}
                onClick={(event) => event.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};
