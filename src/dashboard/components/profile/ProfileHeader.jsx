import fallback from "@/assets/images/backgrounds/fallback-profile-header.jpg";
import { UserAvatar } from "@/dashboard/components/UserAvatar";
import { useGoTo } from "@/hooks/useGoTo";
import { useTranslate } from "@/translations/useTranslate";
import { memo } from "react";

export const ProfileHeader = memo(({ user, setCoverImg }) => {
    const { t } = useTranslate();
    const { goTo } = useGoTo();

    return (
        <div className="relative w-full flex flex-col items-center">
            <button
                type="button"
                onClick={() => setCoverImg(true)}
                aria-label={t("profile.set_cover_img")}
                className="relative group max-h-52 w-full overflow-hidden border-none bg-transparent p-0 cursor-pointer"
            >
                {user?.coverImage ? (
                    <img
                        src={user.coverImage}
                        alt="background profile image"
                        className="w-full h-full object-cover brightness-50 rounded-tl-xl rounded-tr-xl"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = fallback;

                            showModal({
                                message: t("modal.error_background_image_profile"),
                                confirmText: t("modal.default_confirm_text"),
                            });
                        }}
                    />
                ) : (
                    <img
                        src={fallback}
                        alt="One piece background"
                        className="w-full h-full object-cover brightness-50 rounded-tl-xl rounded-tr-xl"
                    />
                )}
            </button>

            <div className={`${user?.coverImage ? "absolute top-10" : "relative"}`}>
                <button
                    type="button"
                    onClick={() => goTo("/dashboard/profile/avatar")}
                    aria-label={t("profile.change_avatar")}
                    className="relative group border-none bg-transparent p-0 cursor-pointer rounded-full"
                >
                    <UserAvatar
                        src={user.avatar}
                        size="2xl"
                        status={user.isActive ? "online" : "offline"}
                        className="border-2 border-white"
                    />
                </button>
            </div>
        </div>
    );
});
