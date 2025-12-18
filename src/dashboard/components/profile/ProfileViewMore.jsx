import { ToggleButton } from "@/components/ToggleButton";
import { EditableField } from "@/dashboard/components/profile/EditableField";
import { getExtendedProfileFields } from "@/dashboard/data/ProfileData/profileFields";
import { useToggle } from "@/hooks/useToggle";
import { useTranslate } from "@/translations/useTranslate";
import classNames from "classnames";
import { memo, useMemo } from "react";

export const ProfileViewMore = memo(({ user, editorProps }) => {
    const [isOpen, toggleBox] = useToggle();
    const { t } = useTranslate();
    const profileFields = useMemo(() => getExtendedProfileFields(user, t), [user, t]);

    return (
        <section className="min-w-fit rounded-xl border border-white py-1 px-2 transition">
            <header className="flex items-center justify-between cursor-pointer" onClick={toggleBox}>
                <p className="text-primary font-semibold sm:text-base">
                    {" "}
                    {isOpen ? t("profile.view_less") : t("profile.view_more")}
                </p>
                <ToggleButton isOpen={isOpen} />
            </header>
            <div
                className={classNames("grid transition-[grid-template-rows]", {
                    "[grid-template-rows:1fr]": isOpen,
                    "[grid-template-rows:0fr]": !isOpen,
                })}
            >
                <div
                    className={classNames("min-h-0 overflow-hidden flex flex-col gap-1", {
                        "p-1": isOpen,
                    })}
                >
                    {profileFields.map((fieldProps, index) => (
                        <EditableField
                            key={`${fieldProps.fieldName}-${index}`}
                            {...fieldProps}
                            {...editorProps}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
});
