import { useContext } from "react";
import { NavLink } from "react-router-dom";
import rightArrow from "../assets/icons/right-arrow.svg";
import { AuthContext } from "../context/authContext";
import { LanguagesContext } from "../context/LanguagesContext";
import { languages } from "../data/languages";

const navItems = [
    { path: "/dashboard", label: "dashboard", isPrivate: true },
    { path: "/main/comunidad", label: "community", isPrivate: true },
    { path: "/main/serie", label: "serie", isPrivate: true },
    { path: "/main/cards", label: "cards", isPrivate: true },
    { path: "/main/onepiece", label: "onepiece" },
    { path: "/main/characters", label: "characters" },
    { path: "/main/help", label: "help" },
];

export const Navbar = () => {
    const { lang } = useContext(LanguagesContext);
    const { user } = useContext(AuthContext);

    return (
        <nav className="flex flex-col md:flex-row md:gap-4">
            {navItems
                .filter((item) => {
                    if (!item.isPrivate) return item;
                    if (item.isPrivate && user) return item.isPrivate;
                    return null;
                })
                .map((item) => (
                    <NavLink
                        key={item.path}
                        className="text-lg text-black flex items-center justify-between rounded p-1 transition hover:bg-orangeAce/10 hover:-translate-y-0.5"
                        to={item.path}
                    >
                        <p>{languages[lang].navbar[item.label]}</p>
                        <img className="w-4 md:hidden" src={rightArrow} alt="icon arrow right" />
                    </NavLink>
                ))}
        </nav>
    );
};
