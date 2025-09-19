import lens from "@/assets/icons/lens-icon.svg";
import notification from "@/assets/icons/notification-icon.svg";
import logo from "@/assets/images/one-piece-logo.webp";
import { LanguagesContext } from "@/context/LanguagesContext";
import { ModalContext } from "@/context/ModalContext";
import { useAuth } from "@/core/auth/useAuth";
import { UserMenu } from "@/dashboard/components/header/UserMenu";
import { languages } from "@/helpers/languages";
import { useToggle } from "@/hooks/useToggle";
import { useContext } from "react";

export const DashboardNavbar = () => {
    const { lang } = useContext(LanguagesContext);
    const { showModal, hideModal } = useContext(ModalContext);
    const { logout } = useAuth();
    const { isOpen, toggleBox } = useToggle();

    const handleLogOut = () => {
        showModal({
            message: languages[lang].modal.logOutMessage,
            onConfirm: () => {
                logout();
                hideModal();
            },
            onCancel: hideModal,
            confirmText: languages[lang].modal.confirmLogOut,
        });
    };

    return (
        <header className="fixed flex items-center w-full py-2 px-4 border-b-2 border-primary bg-gradient-primary backdrop-blur-md z-index-10">
            <div className="w-16 mx-auto">
                <img className="w-full" src={logo} alt="One Piece logo" />
            </div>

            <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-orange-100 rounded-full border border-gray-400 flex items-center justify-center transition hover:scale-105">
                    <img className="w-4" src={lens} alt="magnifying glass icon" />
                </div>
                <div className="w-5">
                    <img className="w-full" src={notification} alt="Bell icon" />
                </div>
                <UserMenu />
            </div>
        </header>
    );
};
