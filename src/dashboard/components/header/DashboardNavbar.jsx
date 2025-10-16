import notification from "@/assets/icons/notification-icon.svg";
import logo from "@/assets/images/one-piece-logo.webp";
import { NotificationsCountContext } from "@/context/NotificationsCountContext";
import { UserMenu } from "@/dashboard/components/header/UserMenu";
import { Search } from "@/dashboard/components/search/Search";
import { useGoTo } from "@/hooks/useGoTo";
import { useContext } from "react";

export const DashboardNavbar = () => {
    const { notisCount } = useContext(NotificationsCountContext);
    const { goTo } = useGoTo();

    return (
        <header className="fixed flex items-center w-full py-2 px-4 border-b-2 border-primary bg-gradient-primary backdrop-blur-sm z-30 md:px-8">
            <div className="w-16 mr-auto md:w-24">
                <img className="w-full" src={logo} alt="One Piece logo" />
            </div>

            <div className="flex items-center gap-2">
                <Search />
                <button
                    className="relative cursor-pointer bg-sunny rounded-full p-1 group"
                    onClick={() => goTo("/dashboard/notifications")}
                >
                    <img
                        className="w-5 transition-transform group-hover:scale-110 md:w-7"
                        src={notification}
                        alt="Bell icon"
                    />
                    <div className="absolute rounded-full flex items-center justify-center top-0 right-1 md:right-2">
                        {" "}
                        <span className="inline-block text-center text-[10px] text-primary font-bold">
                            {notisCount?.count}
                        </span>
                    </div>
                </button>
                <UserMenu />
            </div>
        </header>
    );
};
