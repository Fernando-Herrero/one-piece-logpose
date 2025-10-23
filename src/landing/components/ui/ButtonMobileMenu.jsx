import classNames from "classnames";

export const ButtonMobileMenu = ({ isOpen, toggleMenu }) => {
    return (
        <button
            className={classNames(
                "relative z-20 w-10 flex p-5 flex-col items-center cursor-pointer rounded",
                "transition hover:bg-orangeAce/10 md:hidden",
                { "rounded-full bg-orangeAce/10 hover:bg-orangeAce/20 border border-orangeAce/30": isOpen }
            )}
            onClick={toggleMenu}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
            <span
                className={classNames("block h-1 transition-all duration-300 ease-out transform absolute", {
                    "rotate-45 translate-y-0 w-4 bg-white": isOpen,
                    "rotate-0 -translate-y-1 w-6 bg-black": !isOpen,
                })}
            ></span>
            <span
                className={classNames(
                    "block h-1 bg-black transition-all duration-300 ease-out transform absolute",
                    {
                        "-rotate-45 w-4 bg-white": isOpen,
                        "rotate-0 translate-y-1 w-6 bg-black": !isOpen,
                    }
                )}
            ></span>
        </button>
    );
};
