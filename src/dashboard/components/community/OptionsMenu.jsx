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
import { ItemOptionsMenu } from "@/dashboard/components/community/ItemOptionsMenu";
import { languages } from "@/helpers/languages";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useGoTo } from "@/hooks/useGoTo";
import { useToggle } from "@/hooks/useToggle";
import { memo, useCallback, useContext, useMemo } from "react";

export const OptionsMenu = memo(({ id, userId, view, basePath = "/dashboard/community" }) => {
    const { user, isAdmin } = useContext(AuthContext);
    const [isOpen, toggleMenu, closeMenu] = useToggle();
    const { lang } = useContext(LanguagesContext);
    const { deletePost } = usePosts();
    const { followUser, unfollowUser } = useUser();
    const { goTo } = useGoTo();

    const menuRef = useClickOutside(toggleMenu, isOpen);

    const amIUser = user?.id === userId?.id || user?._id === userId?.id;
    const alreadyFollow = user?.following?.includes(userId?.id);

    const buildPostPageUrl = useMemo(() => {
        const params = new URLSearchParams();
        params.append("postId", id);
        params.append("userId", userId?.id);
        return `${basePath}/postPage?${params.toString()}`;
    }, [id, userId?.id, basePath]);

    const handleFollow = useCallback(() => followUser(userId?.id), [followUser, userId?.id]);
    const handleUnfollow = useCallback(() => unfollowUser(userId?.id), [unfollowUser, userId?.id]);
    const handleDelete = useCallback(() => deletePost(id), [deletePost, id]);

    return (
        <div className="relative text-xs" ref={menuRef}>
            <button
                type="button"
                className="flex w-6 cursor-pointer"
                onClick={toggleMenu}
                aria-label="Open Menu"
            >
                <img className="w-full" src={dots} alt="Dots Menu" />
            </button>

            <DropDown open={isOpen} onClose={closeMenu} size="sm" className="mt-0">
                {isOpen && (
                    <>
                        {!amIUser && (
                            <ItemOptionsMenu
                                onClick={() => goTo(`/dashboard/userProfile?userId=${userId?.id}`)}
                                content={languages[lang].posts.viewProfile}
                                icon={profileIcon}
                            />
                        )}

                        {(amIUser || isAdmin) && (
                            <ItemOptionsMenu
                                onClick={handleDelete}
                                content={languages[lang].posts.deletePost}
                                icon={trash}
                            />
                        )}

                        {!amIUser &&
                            (alreadyFollow ? (
                                <ItemOptionsMenu
                                    onClick={handleUnfollow}
                                    content={languages[lang].posts.unfollow}
                                    icon={minus}
                                />
                            ) : (
                                <ItemOptionsMenu
                                    onClick={handleFollow}
                                    content={languages[lang].posts.follow}
                                    icon={plus}
                                />
                            ))}

                        {view && (
                            <ItemOptionsMenu
                                onClick={() => {
                                    toggleMenu();
                                    goTo(buildPostPageUrl());
                                }}
                                content={languages[lang].posts.viewPost}
                                icon={viewPost}
                                view={view}
                            />
                        )}
                    </>
                )}
            </DropDown>
        </div>
    );
});
