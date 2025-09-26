import { UserInfoItem } from "@/dashboard/components/userProfile/UserInforItem";

export const UserAdditionalInfo = ({ user, lang, languages }) => (
    <div className="mt-4 px-4 flex flex-col gap-2 text-left w-full">
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
