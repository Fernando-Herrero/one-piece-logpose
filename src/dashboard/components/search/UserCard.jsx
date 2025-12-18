import { UserArticle } from "@/dashboard/components/UserArticle";

export const UserCard = ({ user, t }) => {
    return <UserArticle {...user} createdAtLabel={t("profile.created_at")} />;
};
