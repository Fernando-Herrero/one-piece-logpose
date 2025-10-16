import { Overlay } from "@/components/Overlay";
import { NotificationsProvider } from "@/context/NotificationsContext";
import { UserProvider } from "@/context/UserContext";
import { AppShell } from "@/dashboard/components/AppShell";
import { AvatarSection } from "@/dashboard/components/profile/AvatarSection";
import { FollowersCard } from "@/dashboard/components/profile/FollowersCard";
import { FollowingCard } from "@/dashboard/components/profile/FollowingCard";
import { Cards } from "@/dashboard/pages/Cards";
import { Comment } from "@/dashboard/pages/Comment";
import { Community } from "@/dashboard/pages/Community";
import { Notifications } from "@/dashboard/pages/Notifications";
import { Post } from "@/dashboard/pages/Post";
import { PostPage } from "@/dashboard/pages/PostPage";
import { Profile } from "@/dashboard/pages/Profile";
import { Purchases } from "@/dashboard/pages/Purchases";
import { SearchResults } from "@/dashboard/pages/SearchResults";
import { Serie } from "@/dashboard/pages/Serie";
import { Settings } from "@/dashboard/pages/Settings";
import { UserProfile } from "@/dashboard/pages/UserProfile";
import { Verified } from "@/dashboard/pages/Verified";
import { Navigate, Route, Routes } from "react-router-dom";

export const Dashboard = () => {
    return (
        <AppShell>
            <Routes>
                <Route index element={<Navigate to="/dashboard/profile" replace />} />

                <Route path="/profile" element={<Profile />}>
                    <Route
                        path="avatar"
                        element={
                            <Overlay>{(handleClose) => <AvatarSection onCancel={handleClose} />}</Overlay>
                        }
                    />
                    <Route
                        path="followers"
                        element={
                            <Overlay>{(handleClose) => <FollowersCard onCancel={handleClose} />}</Overlay>
                        }
                    />
                    <Route
                        path="followings"
                        element={
                            <Overlay>{(handleClose) => <FollowingCard onCancel={handleClose} />}</Overlay>
                        }
                    />
                    <Route path="postPage" element={<Overlay>{<PostPage />}</Overlay>} />
                </Route>

                <Route
                    path="/community"
                    element={
                        // <PostProvider>
                        <Community />
                        /* </PostProvider> */
                    }
                >
                    <Route
                        path="post"
                        element={<Overlay>{(handleClose) => <Post onCancel={handleClose} />}</Overlay>}
                    />
                    <Route
                        path="comment"
                        element={<Overlay>{(handleClose) => <Comment onCancel={handleClose} />}</Overlay>}
                    />
                    <Route path="postPage" element={<Overlay>{<PostPage />}</Overlay>} />
                </Route>

                <Route
                    path="/userProfile"
                    element={
                        <UserProvider>
                            <UserProfile />
                        </UserProvider>
                    }
                >
                    <Route
                        path="followers"
                        element={
                            <Overlay>{(handleClose) => <FollowersCard onCancel={handleClose} />}</Overlay>
                        }
                    />
                    <Route
                        path="followings"
                        element={
                            <Overlay>{(handleClose) => <FollowingCard onCancel={handleClose} />}</Overlay>
                        }
                    />
                    <Route path="postPage" element={<Overlay>{<PostPage />}</Overlay>} />
                </Route>

                <Route path="/serie" element={<Serie />} />

                <Route path="/cards" element={<Cards />} />

                <Route path="/search" element={<SearchResults />} />

                <Route path="/settings" element={<Settings />}>
                    <Route
                        path="premium"
                        element={<Overlay>{(handleClose) => <Verified onCancel={handleClose} />}</Overlay>}
                    />
                </Route>

                <Route
                    path="/notifications"
                    element={
                        <NotificationsProvider>
                            <Notifications />
                        </NotificationsProvider>
                    }
                />

                <Route path="/purchases" element={<Purchases />} />
            </Routes>
        </AppShell>
    );
};
