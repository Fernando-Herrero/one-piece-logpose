import notification from "@/assets/icons/notification-icon.svg";
import logo from "@/assets/images/one-piece-logo.webp";
import { Search } from "@/dashboard/components/header/Search";
import { UserMenu } from "@/dashboard/components/header/UserMenu";

export const DashboardNavbar = () => {
    return (
        <header className="fixed flex items-center w-full py-2 px-4 border-b-2 border-primary bg-gradient-primary backdrop-blur-sm z-30 md:px-8">
            <div className="w-16 mr-auto md:w-24">
                <img className="w-full" src={logo} alt="One Piece logo" />
            </div>

            <div className="flex items-center gap-2">
                <Search />
                <div className="w-5 md:w-7">
                    <img className="w-full" src={notification} alt="Bell icon" />
                </div>
                <UserMenu />
            </div>
        </header>
    );
};
