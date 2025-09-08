import { useContext } from "react";
import { NavLink } from "react-router-dom";
import rightArrow from "../assets/icons/right-arrow.svg";
import { LanguagesContext } from "../context/LanguagesContext";
import { languages } from "../data/languages";

export const Navbar = () => {
    const { lang } = useContext(LanguagesContext);

    return (
        <nav className="flex flex-col md:flex-row md:gap-4">
            <NavLink
                className="flex items-center justify-between rounded p-1 transition hover:bg-secondary/20 md:hover:bg-secondary/40"
                to="/main"
            >
                <p>{languages[lang].navbar.home}</p>{" "}
                <img className="w-4 md:hidden" src={rightArrow} alt="icon arrow rigth" />
            </NavLink>

            <NavLink
                className="flex items-center justify-between rounded p-1 transition hover:bg-secondary/20 md:hover:bg-secondary/40"
                to="/main/cards"
            >
                <p>{languages[lang].navbar.cards}</p>{" "}
                <img className="w-4 md:hidden" src={rightArrow} alt="icon arrow rigth" />
            </NavLink>
            <NavLink
                className="flex items-center justify-between rounded p-1 transition hover:bg-secondary/20"
                to="/main/profile"
            >
                <p>{languages[lang].navbar.profile}</p>{" "}
                <img className="w-4 md:hidden" src={rightArrow} alt="icon arrow rigth" />
            </NavLink>
            <NavLink
                className="flex items-center justify-between rounded p-1 transition hover:bg-secondary/20"
                to="/main/avatar"
            >
                <p>{languages[lang].navbar.avatar}</p>{" "}
                <img className="w-4 md:hidden" src={rightArrow} alt="icon arrow rigth" />
            </NavLink>
        </nav>
    );
};
