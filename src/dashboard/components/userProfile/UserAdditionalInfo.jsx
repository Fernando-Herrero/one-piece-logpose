import { UserInfoItem } from "@/dashboard/components/userProfile/UserInforItem";
import { useDevice } from "@/hooks/useDevice";
import classNames from "classnames";

export const UserAdditionalInfo = ({ user, lang, languages }) => {
    const { isMobile, isTablet } = useDevice();

    return (
        <div
            className={classNames(
                "mt-4 px-4 flex flex-col gap-2 text-left w-full sm:flex-1 sm:pb-6 lg:pb-0 lg:px-6",
                {
                    "px-6": isMobile,
                    "px-8 ": isTablet,
                }
            )}
        >
            {user.phoneNumber && <UserInfoItem icon="📞" value={user.phoneNumber} />}
            {user.address && <UserInfoItem icon="🏠" value={user.address} />}
            <UserInfoItem icon="📧" value={user.email} />
            <UserInfoItem icon="👤" label="Role" value={user.role} showLabel={true} />
            <UserInfoItem
                icon="🌐"
                label={languages[lang].profile.active}
                value={user.isActive ? "Online" : "Offline"}
                showLabel={true}
            />
        </div>
    );
};
