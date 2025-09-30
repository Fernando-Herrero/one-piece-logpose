import { ToggleButton } from "@/components/ToggleButton";
import { LanguagesContext } from "@/context/LanguagesContext";
import { EditableField } from "@/dashboard/components/Profile/EditableField";
import { getExtendedProfileFields } from "@/dashboard/data/ProfileData/profileFields";
import { languages } from "@/helpers/languages";
import { useToggle } from "@/hooks/useToggle";
import classNames from "classnames";
import { useContext } from "react";

export const ProfileViewMore = ({ user, editorProps }) => {
    const [isOpen, toggleBox] = useToggle();
    const { lang } = useContext(LanguagesContext);
    const profileFields = getExtendedProfileFields(user, lang);

    return (
        <section className="min-w-fit rounded-xl border border-white py-1 px-2 transition mx-2">
            <header className="flex items-center justify-between cursor-pointer" onClick={toggleBox}>
                <p className="text-primary font-semibold">{languages[lang].profile.viewMore}</p>
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
};
