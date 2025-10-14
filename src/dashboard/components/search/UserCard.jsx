import { UserArticle } from "@/dashboard/components/UserArticle";
import { languages } from "@/helpers/languages";

export const UserCard = ({ user, lang }) => {
    return <UserArticle {...user} createdAtLabel={languages[lang].profile.createdAt} />;
};
