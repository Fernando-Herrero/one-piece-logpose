import arrow from "@/assets/icons/right-arrow.svg";
import { Link } from "react-router-dom";

export const MenuItem = ({ as = "button", to, onClick, href, children, onClose }) => {
    const baseClasses = "flex justify-between w-full text-start cursor-pointer drop-item-style group";
    const arrowIcon = (
        <img className="w-4 transition-transform group-hover:translate-x-1" src={arrow} alt="Right arrow" />
    );

    const handleClick = (event) => {
        if (onClick) onClick(event);
        if (onClose) onClose();
    };

    if (as === "link") {
        return (
            <Link className={baseClasses} to={to} onClick={handleClick}>
                <p className="underline-hover text-gradient">{children}</p>
                {arrowIcon}
            </Link>
        );
    }

    if (as === "a") {
        return (
            <a
                className={baseClasses}
                href={href || "http://example.com/help"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
            >
                <p className="text-gradient">{children}</p>
                {arrowIcon}
            </a>
        );
    }

    return (
        <button className={baseClasses} onClick={handleClick}>
            <p className="w-fit underline-hover text-gradient">{children}</p>
            {arrowIcon}
        </button>
    );
};
