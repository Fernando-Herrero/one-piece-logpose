import dots from "@/assets/icons/dots-menu-icon.svg";
import minus from "@/assets/icons/minus-icon.svg";
import plus from "@/assets/icons/plus-icon.svg";
import profileIcon from "@/assets/icons/profile-icon.svg";
import trash from "@/assets/icons/trash-icon.svg";
import viewPost from "@/assets/icons/view-post-icon.svg";
import { DropDown } from "@/components/Dropdown";
import { AuthContext } from "@/context/AuthContext";
import { LanguagesContext } from "@/context/LanguagesContext";
import { usePosts } from "@/core/posts/usePosts";
import { useUser } from "@/core/user/useUser";
import { languages } from "@/helpers/languages";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useGoTo } from "@/hooks/useGoTo";
import { useToggle } from "@/hooks/useToggle";
import { useContext } from "react";

export const OptionsMenu = ({ id, userId }) => {
    const { user } = useContext(AuthContext);
    const [isOpen, toggleMenu, closeMenu] = useToggle();
    const { lang } = useContext(LanguagesContext);
    const { deletePost } = usePosts();
    const { followUser, unfollowUser } = useUser();
    const { goTo } = useGoTo();

    const menuRef = useClickOutside(toggleMenu, isOpen);

    const ItemOptionsMenu = ({ onClick, content, icon }) => {
        const className = "flex items-center justify-between w-full cursor-pointer drop-item-style group";
        const subClass = "underline-hover text-gradient";

        return (
            <button onClick={onClick} className={className}>
                <p className={subClass}>{content}</p>
                <img className="w-4" src={icon} alt="Profile icon" />
            </button>
        );
    };

    const amIUser = user.id === userId.id;
    const alreadyFollow = user.following.includes(userId.id);

    return (
        <div className="relative" ref={menuRef}>
            <button
                type="button"
                className="flex w-6 cursor-pointer"
                onClick={toggleMenu}
                aria-label="Open Menu"
            >
                <img className="w-full" src={dots} alt="Dots Menu" />
            </button>

            <DropDown open={isOpen} onClose={closeMenu} size="sm" className="mt-0">
                {!amIUser && (
                    <ItemOptionsMenu
                        onClick={() => goTo(`/dashboard/userProfile?userId=${userId.id}`)}
                        content={languages[lang].posts.viewProfile}
                        icon={profileIcon}
                    />
                )}

                {amIUser && (
                    <ItemOptionsMenu
                        onClick={() => deletePost(id)}
                        content={languages[lang].posts.deletePost}
                        icon={trash}
                    />
                )}

                {!amIUser &&
                    (alreadyFollow ? (
                        <ItemOptionsMenu
                            onClick={() => unfollowUser(userId.id)}
                            content={languages[lang].posts.unfollow}
                            icon={minus}
                        />
                    ) : (
                        <ItemOptionsMenu
                            onClick={() => followUser(userId.id)}
                            content={languages[lang].posts.follow}
                            icon={plus}
                        />
                    ))}

                <ItemOptionsMenu
                    onClick={() => {
                        toggleMenu();
                        goTo(`/dashboard/community/postPage?postId=${id}`);
                    }}
                    content={languages[lang].posts.viewPost}
                    icon={viewPost}
                />
            </DropDown>
        </div>
    );
};
