import { UserInfoItem } from "@/dashboard/components/userProfile/UserInforItem";
import { useDevice } from "@/hooks/useDevice";

export const UserAdditionalInfo = ({ user, lang, languages }) => {
    const { isMobile, isTablet } = useDevice();

    return (
        <div className="flex flex-col gap-2 text-left w-full sm:flex-1">
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
