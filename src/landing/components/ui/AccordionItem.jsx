import { useToggle } from "@/hooks/useToggle";
import { ToggleButton } from "@/landing/components/ui/ToggleButton";
import classNames from "classnames";

export const AccordionItem = ({ title, content, className = "" }) => {
    const [open, toggleAccordion] = useToggle();

    return (
        <section className="flex flex-col p-4 rounded-xl bg-gradient-primary shadow-default">
            <header className="flex itmes-center justify-between cursor-pointer" onClick={toggleAccordion}>
                <p className="text-xl font-bold font-family-pirate">{title}</p>
                <ToggleButton isOpen={open} />
            </header>

            <div
                className={classNames("grid transition-[grid-template-rows] duration-300", {
                    "pt-4 [grid-template-rows:1fr]": open,
                    "[grid-template-rows:0fr]": !open,
                })}
            >
                <div className="min-h-0 overflow-hidden">{content}</div>
            </div>
        </section>
    );
};
