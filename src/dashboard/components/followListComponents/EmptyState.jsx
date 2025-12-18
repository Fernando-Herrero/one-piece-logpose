import { FOLLOW_CONFIG } from "@/dashboard/components/followListComponents/FOLLOW_CONFIG";

export const EmptyState = ({ type, t }) => (
    <p className="text-linePrimary text-center p-4">{t(`profile.${FOLLOW_CONFIG[type].emptyKey}`)}</p>
);
