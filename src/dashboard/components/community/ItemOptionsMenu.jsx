import { memo } from "react";

export const ItemOptionsMenu = memo(({ onClick, content, icon }) => {
    const className = "flex items-center justify-between w-full cursor-pointer drop-item-style group";
    const subClass = "underline-hover text-gradient";

    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
    };

    return (
        <button type="button" onClick={handleClick} className={className}>
            <p className={subClass}>{content}</p>
            <img className="w-4" src={icon} alt="Menu icon" />
        </button>
    );
});
