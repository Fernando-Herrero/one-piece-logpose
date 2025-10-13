import { AuthContext } from "@/context/AuthContext";
import { LanguagesContext } from "@/context/LanguagesContext";
import { useAuth } from "@/core/auth/useAuth";
import { RenderInputCard } from "@/dashboard/components/verified/RenderInputCard";
import { languages } from "@/helpers/languages";
import { useCardValidation } from "@/hooks/useCardValidation";
import classNames from "classnames";
import { useContext, useState } from "react";

export const VerifiedForm = ({ onSuccess, onCancel }) => {
    const { user } = useContext(AuthContext);
    const { updatedProfile } = useAuth();
    const { validateAll, validateField, isValid, errors } = useCardValidation();
    const { lang } = useContext(LanguagesContext);

    const [form, setForm] = useState({
        name: "",
        number: "",
        expiry: "",
        cvv: "",
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }));
        validateField(field, value);
    };

    const handlePayment = async () => {
        setSubmitted(true);
        if (!validateAll(form)) return;

        setLoading(true);
        setTimeout(async () => {
            try {
                await updatedProfile(user, { verified: true });
                onSuccess?.();
            } catch (error) {
                console.error("Error updating profile:", error);
            } finally {
                setLoading(false);
                onCancel();
            }
        }, 1500);
    };

    return (
        <div className="flex flex-col gap-3">
            <RenderInputCard
                label="Nombre en la tarjeta"
                field="name"
                value={form.name}
                onChange={(val) => handleChange("name", val)}
                placeholder="Nombre Apellido"
                error={errors.name}
                isValid={isValid}
                submitted={submitted}
            />
            <RenderInputCard
                label="Número de tarjeta"
                field="number"
                value={form.number}
                onChange={(val) => handleChange("number", val)}
                placeholder="1234 5678 9012 3456"
                error={errors.number}
                isValid={isValid}
                submitted={submitted}
            />
            <div className="flex gap-3">
                <div className="w-fit">
                    {" "}
                    <RenderInputCard
                        label="Expiración (MM/AA)"
                        field="expiry"
                        value={form.expiry}
                        onChange={(val) => handleChange("expiry", val)}
                        placeholder="08/26"
                        error={errors.expiry}
                        isValid={isValid}
                        submitted={submitted}
                    />
                </div>

                <RenderInputCard
                    label="CVV"
                    field="cvv"
                    value={form.cvv}
                    onChange={(val) => handleChange("cvv", val)}
                    placeholder="123"
                    error={errors.cvv}
                    isValid={isValid}
                    submitted={submitted}
                />
            </div>

            <button
                onClick={handlePayment}
                disabled={loading}
                className={classNames(
                    "mt-4 px-4 py-2 rounded-xl font-medium text-white transition cursor-pointer",
                    loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                )}
            >
                {loading ? languages[lang].premium.loading : `${languages[lang].premium.payVerify} 💳`}
            </button>
        </div>
    );
};
