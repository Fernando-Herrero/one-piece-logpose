import { FOLLOW_CONFIG } from "@/dashboard/components/followListComponents/FOLLOW_CONFIG";
import { languages } from "@/helpers/languages";

export const EmptyState = ({ type, lang }) => (
    <p className="text-linePrimary text-center p-4">
        {languages[lang].profile[FOLLOW_CONFIG[type].emptyKey]}
    </p>
);
