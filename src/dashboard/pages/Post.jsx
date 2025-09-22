import { LanguagesContext } from "@/context/LanguagesContext";
import { languages } from "@/helpers/languages";
import { useDevice } from "@/hooks/useDevice";
import { Button } from "@/landing/components/ui/Button";
import { useContext } from "react";

export const Post = ({ onCancel }) => {
    const { lang } = useContext(LanguagesContext);
    const { isMobile } = useDevice();

    return (
        <div className="bg-white rounded-xl overflow-hidden">
            <form
                className={`bg-gradient-primary flex flex-col items-center justify-between p-2 min-h-96 ${
                    isMobile ? "min-w-80" : ""
                }`}
            >
                <label className="w-full">
                    <textarea
                        name="post"
                        id="post"
                        maxLength={280}
                        placeholder={languages[lang].posts.areaTextPost}
                        className="bg-orange-100 p-2 min-h-80 w-full rounded-xl"
                    ></textarea>
                </label>
                <div className="flex items-center gap-1">
                    <Button variant="danger" onClick={onCancel}>
                        {languages[lang].modal.cancelText}
                    </Button>
                    <Button variant="submit">{languages[lang].contact.button}</Button>
                </div>
            </form>
        </div>
    );
};
