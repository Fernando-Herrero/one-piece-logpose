import { LanguagesContext } from "@/context/LanguagesContext";
import { languages } from "@/helpers/languages";
import { useContext, useState } from "react";

const luhnCheck = (num) => {
    const digits = num.replace(/\D/g, "");
    let sum = 0;
    let shouldDouble = false;

    for (let i = digits.length - 1; i >= 0; i--) {
        let d = parseInt(digits.charAt(i), 10);
        if (shouldDouble) {
            d *= 2;
            if (d > 9) d -= 9;
        }
        sum += d;
        shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
};

export const useCardValidation = () => {
    const { lang } = useContext(LanguagesContext);

    const validators = {
        name: (value) => {
            if (!value.trim()) return languages[lang].premium.errorName;
            return "";
        },
        number: (value) => {
            const digits = value.replace(/\s+/g, "");
            if (!/^\d{13,19}$/.test(digits)) return languages[lang].premium.errorNumber;
            if (!luhnCheck(digits)) return languages[lang].premium.errorNumber;
            return "";
        },
        expiry: (value) => {
            const match = value.match(/^(\d{1,2})\/(\d{2})$/);
            if (!match) return languages[lang].premium.errorExpiryFormat;
            const mm = parseInt(match[1]);
            const yy = parseInt(match[2]);
            if (mm < 1 || mm > 12) return languages[lang].premium.errorExpiryMonth;

            const now = new Date();
            const fullYear = 2000 + yy;
            const expiryDate = new Date(fullYear, mm - 1, 1);
            if (expiryDate < now) return languages[lang].premium.errorExpiryExpired;
            return "";
        },
        cvv: (value) => {
            if (!/^\d{3,4}$/.test(value)) return languages[lang].premium.errorCvv;
            return "";
        },
    };

    const [errors, setErrors] = useState({
        name: "",
        number: "",
        expiry: "",
        cvv: "",
    });

    const validateField = (field, value) => {
        const error = validators[field]?.(value) ?? "";
        setErrors((prev) => ({ ...prev, [field]: error }));
        return error === "";
    };

    const validateAll = (fields) => {
        const newErrors = Object.keys(validators).reduce((acc, field) => {
            acc[field] = validators[field](fields[field]);
            return acc;
        }, {});
        setErrors(newErrors);
        return Object.values(newErrors).every((e) => e === "");
    };

    const isValid = (field, value) => validators[field]?.(value) === "";

    return {
        errors,
        validateField,
        validateAll,
        isValid,
    };
};
