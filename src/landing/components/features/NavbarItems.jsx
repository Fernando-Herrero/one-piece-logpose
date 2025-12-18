import rightArrow from "@/assets/icons/right-arrow.svg";
import { NavWithChildren } from "@/landing/components/features/NavWithChildren";

export const NavbarItems = ({ navItems, t, toggleMenu }) => {
    return navItems
        .filter((item) => !item.isPrivate)
        .map((item, index) => {
            if (item.children) {
                return (
                    <NavWithChildren
                        key={`${item.label}-${index}`}
                        item={item}
                        t={t}
                        index={index}
                        toggleMenu={toggleMenu}
                    />
                );
            }

            return (
                <NavLink key={`${item.label}-${index}`} to={item.path}>
                    <p>{t(`navbar.${item.label}`)}</p>
                    <img src={rightArrow} alt="Right arrow icon" />
                </NavLink>
            );
        });
};
