import rightArrow from "@/assets/icons/right-arrow.svg";
import { NavWithChildren } from "@/components/features/NavWithChildren";

export const NavbarItems = ({ navItems, chooseLang, isPrivate = false }) => {
    return navItems
        .filter((item) => (isPrivate ? item.isPrivate : !item.isPrivate))
        .map((item, index) => {
            if (item.children) {
                return (
                    <NavWithChildren
                        key={`${item.label}-${index}`}
                        item={item}
                        chooseLang={chooseLang}
                        index={index}
                    />
                );
            }

            return (
                <NavLink key={`${item.label}-${index}`} className="" to={item.path}>
                    <p>{chooseLang[item.label]}</p>
                    <img src={rightArrow} alt="Right arrow icon" />
                </NavLink>
            );
        });
};
