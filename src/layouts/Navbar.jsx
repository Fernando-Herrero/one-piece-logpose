import { NavbarItems } from "@/components/features/NavbarItems";
import { languages } from "@/data/languages";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { LanguagesContext } from "../context/LanguagesContext";

const navItems = [
    { path: "/dashboard", label: "dashboard", isPrivate: true },
    { path: "/comunidad", label: "community", isPrivate: true },
    { path: "/serie", label: "serie", isPrivate: true },
    { path: "/cards", label: "cards", isPrivate: true },
    {
        path: "",
        label: "onepiece",
        children: [
            { path: "/characters", label: "characters" },
            { path: "/history", label: "history" },
            { path: "/map", label: "map" },
        ],
    },
    {
        path: "",
        label: "help",
        children: [
            { path: "/faq", label: "faq" },
            { path: "/contact", label: "contact" },
        ],
    },
];

export const Navbar = () => {
    const { lang } = useContext(LanguagesContext);
    const { user } = useContext(AuthContext);
    const chooseLang = languages[lang].navbar;

    return (
        <nav className="flex flex-col gap-2 md:flex-row md:gap-4">
            {!user && <NavbarItems chooseLang={chooseLang} navItems={navItems} />}

            {user &&
                navItems
                    .filter((item) => item.isPrivate && user)
                    .map(({ path, label }, index) => (
                        <NavLink key={`${label}-${index}`} className="" to={path}>
                            {chooseLang[label]}
                        </NavLink>
                    ))}
        </nav>
    );
};
