import { DropDown } from "@/components/Dropdown";
import { AuthContext } from "@/context/AuthContext";
import { ModalContext } from "@/context/ModalContext";
import { useAuth } from "@/core/auth/useAuth";
import { MenuItem } from "@/dashboard/components/header/MenuItem";
import { UserAvatar } from "@/dashboard/components/UserAvatar";
import { UserBarProgress } from "@/dashboard/components/UserBarProgress";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useDevice } from "@/hooks/useDevice";
import { useGoTo } from "@/hooks/useGoTo";
import { useToggle } from "@/hooks/useToggle";
import { useTranslate } from "@/translations/useTranslate";
import { useContext } from "react";

export const UserMenu = () => {
    const [isOpen, toggleMenu, closeMenu] = useToggle();
    const { logout } = useAuth();
    const { user } = useContext(AuthContext);
    const menuRef = useClickOutside(toggleMenu, isOpen);
    const { t } = useTranslate();
    const { showModal, hideModal } = useContext(ModalContext);
    const { goTo } = useGoTo();
    const { isMobileXs, isMobile, isTablet } = useDevice();

    const handleLogOut = () => {
        closeMenu();
        showModal({
            message: t("modal.logout_message"),
            onConfirm: () => {
                logout();
                hideModal();
            },
            onCancel: hideModal,
            confirmText: t("modal.confirm_logout"),
        });
    };

    return (
        <div className=" relative" ref={menuRef}>
            <button
                type="button"
                className="flex h-6 rounded-full focus-ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 cursor-pointer md:h-8"
                onClick={toggleMenu}
                aria-label="Open user Menu"
            >
                <UserAvatar
                    src={user.avatar}
                    status={user.isActive ? "online" : "offline"}
                    size={isMobileXs || isMobile || isTablet ? "xs" : "sm"}
                />
            </button>

            <DropDown open={isOpen} onClose={closeMenu} size="sm" className="divide-y divide-gray-400">
                <div className="pb-2 flex flex-col items-center">
                    <span className="py-0.5 px-2 block text-sm text-primary">
                        {user?.displayName ?? user?.email}
                    </span>
                    <span className="py-0.5 px-2 block text-xs text-gradient">@{user?.username}</span>
                    <UserBarProgress experience={user?.experience} className="h-2" />
                </div>
                <div className="flex flex-col pt-2 text-xs">
                    <MenuItem
                        as="link"
                        to={"/dashboard/profile"}
                        children={t("navbar.profile")}
                        onClose={toggleMenu}
                    />
                    <MenuItem onClick={handleLogOut} children={t("navbar.logout")} onClose={toggleMenu} />
                    <MenuItem as="a" children={t("navbar.help")} onClose={toggleMenu} />
                    <MenuItem
                        onClick={() => goTo("/dashboard/settings")}
                        children={t("navbar.settings")}
                        onClose={toggleMenu}
                    />
                </div>
            </DropDown>
        </div>
    );
};
