import notification from "@/assets/icons/notification-icon.svg";
import logo from "@/assets/images/one-piece-logo.webp";
import { Search } from "@/dashboard/components/Header/Search";
import { UserMenu } from "@/dashboard/components/Header/UserMenu";

export const DashboardNavbar = () => {
    return (
        <header className="fixed flex items-center w-full py-2 px-4 border-b-2 border-primary bg-gradient-primary backdrop-blur-md z-30">
            <div className="w-16 mr-auto">
                <img className="w-full" src={logo} alt="One Piece logo" />
            </div>

            <div className="flex items-center gap-2">
                <Search />
                <div className="w-5">
                    <img className="w-full" src={notification} alt="Bell icon" />
                </div>
                <UserMenu />
            </div>
        </header>
    );
};
