import { ToggleButton } from "@/components/ToggleButton";
import { LanguagesContext } from "@/context/LanguagesContext";
import { UsersContext } from "@/context/UsersContext";
import { UsersListContent } from "@/dashboard/components/UsersListContent";
import { languages } from "@/helpers/languages";
import { useToggle } from "@/hooks/useToggle";
import classNames from "classnames";
import { useContext, useState } from "react";

export const UsersWrapper = () => {
    const { users, loading, error, fetchUsers } = useContext(UsersContext);
    const { lang } = useContext(LanguagesContext);
    const [isOpen, toggleBox] = useToggle();
    const [headerExpanded, setHeaderExpanded] = useState(false);

    const handleOpen = () => {
        if (!isOpen) {
            setHeaderExpanded(true);
            fetchUsers();
        } else {
            setTimeout(() => {
                setHeaderExpanded(false);
            }, 300);
        }
        toggleBox();
    };

    return (
        <section
            className={classNames("fixed top-20 right-2 z-25 flex flex-col transition-all duration-300", {
                "w-2xs": headerExpanded,
                "w-fit": !headerExpanded,
            })}
        >
            <header
                className={classNames(
                    "bg-lineDark text-white p-2 rounded-xl cursor-pointer transition-all duration-300",
                    {
                        "rounded-bl-none rounded-br-none w-full": headerExpanded,
                        "w-fit self-end": !headerExpanded,
                    }
                )}
            >
                <div onClick={handleOpen} className="flex items-center gap-4 justify-between w-full">
                    <p className="whitespace-nowrap">{languages[lang].profile.viewUsers}</p>
                    <ToggleButton isOpen={isOpen} />
                </div>
            </header>

            <div
                className={classNames(
                    "grid bg-sunny rounded-bl-xl rounded-br-xl transition-[grid-template-rows] duration-300 ease-in-out",
                    {
                        "[grid-template-rows:1fr] p-1": isOpen,
                        "[grid-template-rows:0fr] p-0": !isOpen,
                    }
                )}
            >
                <div className="min-h-0 overflow-hidden">
                    <div className="overflow-y-auto max-h-[70vh] p-2">
                        {error ? (
                            <p className="text-linePrimary text-center p-4">{error}</p>
                        ) : users?.length === 0 && !loading ? (
                            <p className="text-linePrimary text-center p-4">
                                {languages[lang].profile.noUsers}
                            </p>
                        ) : (
                            <UsersListContent
                                users={users}
                                loading={loading}
                                createdAtLabel={languages[lang].profile.createdAt}
                                skeletonCount={8}
                                limit={20}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
