import { useContext } from "react";
import { NavLink } from "react-router-dom";
import rightArrow from "../assets/icons/right-arrow.svg";
import { LanguagesContext } from "../context/LanguagesContext";
import { languages } from "../data/languages";

const navItems = [
    { path: "/main", label: "home" },
    { path: "/main/cards", label: "cards" },
    { path: "/main/profile", label: "profile" },
    { path: "/main/avatar", label: "avatar" },
];

export const Navbar = () => {
    const { lang } = useContext(LanguagesContext);

    return (
        <nav className="flex flex-col md:flex-row md:gap-4">
            {navItems.map((item) => (
                <NavLink
                    key={item.path}
                    className="flex items-center justify-between rounded p-1 transition hover:bg-secondary/20 md:hover:bg-orangeAce/20"
                    to={item.path}
                >
                    <p>{languages[lang].navbar[item.label]}</p>
                    <img className="w-4 md:hidden" src={rightArrow} alt="icon arrow right" />
                </NavLink>
            ))}
        </nav>
    );
};
