import rightArrow from "@/assets/icons/right-arrow.svg";
import { NavWithChildren } from "@/landing/components/features/NavWithChildren";

export const NavbarItems = ({ navItems, chooseLang, toggleMenu }) => {
    return navItems
        .filter((item) => !item.isPrivate)
        .map((item, index) => {
            if (item.children) {
                return (
                    <NavWithChildren
                        key={`${item.label}-${index}`}
                        item={item}
                        chooseLang={chooseLang}
                        index={index}
                        toggleMenu={toggleMenu}
                    />
                );
            }

            return (
                <NavLink key={`${item.label}-${index}`} to={item.path}>
                    <p>{chooseLang[item.label]}</p>
                    <img src={rightArrow} alt="Right arrow icon" />
                </NavLink>
            );
        });
};
