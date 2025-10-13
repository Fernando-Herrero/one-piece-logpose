import { Button } from "@/components/Button";
import { AuthContext } from "@/context/AuthContext";
import { LanguagesContext } from "@/context/LanguagesContext";
import { VerifiedForm } from "@/dashboard/components/verified/VerifiedForm";
import { languages } from "@/helpers/languages";
import { useContext, useState } from "react";

export const Verified = ({ onCancel }) => {
    const { isVerified } = useContext(AuthContext);
    const { lang } = useContext(LanguagesContext);
    const [success, setSuccess] = useState(false);

    if (isVerified || success) {
        return (
            <div className="bg-sunny rounded-xl p-8 w-80 flex flex-col items-center gap-4 text-center">
                <p className="text-primary font-semibold">{languages[lang].premium.verified}</p>
                <Button onClick={onCancel}>{languages[lang].premium.close}</Button>
            </div>
        );
    }

    return (
        <div className="bg-sunny rounded-xl p-8 max-w-[80vw] flex flex-col items-center gap-4 text-center">
            <h2 className="text-xl font-semibold text-primary">⭐ {languages[lang].premium.title}</h2>
            <p className="text-gray-600">{languages[lang].premium.verify}</p>

            <VerifiedForm onSuccess={() => setSuccess(true)} onCancel={onCancel} />

            <button onClick={onCancel} className="text-muted text-sm underline mt-2 hover:text-gray-700">
                {languages[lang].premium.cancel}
            </button>
        </div>
    );
};
