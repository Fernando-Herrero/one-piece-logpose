import { Overlay } from "@/components/Overlay";
import { PageSpinner } from "@/components/PageSpinner";
import { UserProvider } from "@/context/UserContext";
import { AppShell } from "@/dashboard/components/AppShell";
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Profile = lazy(() => import("@/dashboard/pages/Profile"));
const AvatarSection = lazy(() => import("@/dashboard/components/profile/AvatarSection"));
const FollowersCard = lazy(() => import("@/dashboard/components/profile/FollowersCard"));
const FollowingCard = lazy(() => import("@/dashboard/components/profile/FollowingCard"));
const PostPage = lazy(() => import("@/dashboard/pages/PostPage"));
const Community = lazy(() => import("@/dashboard/pages/Community"));
const Post = lazy(() => import("@/dashboard/pages/Post"));
const Comment = lazy(() => import("@/dashboard/pages/Comment"));
const UserProfile = lazy(() => import("@/dashboard/pages/UserProfile"));
const Serie = lazy(() => import("@/dashboard/pages/Serie"));
const Cards = lazy(() => import("@/dashboard/pages/Cards"));
const SearchResults = lazy(() => import("@/dashboard/pages/SearchResults"));
const Settings = lazy(() => import("@/dashboard/pages/Settings"));
const Verified = lazy(() => import("@/dashboard/pages/Verified"));
const Privacy = lazy(() => import("@/dashboard/pages/Privacy"));
const Notifications = lazy(() => import("@/dashboard/pages/Notifications"));
const Purchases = lazy(() => import("@/dashboard/pages/Purchases"));

export const Dashboard = ({ t }) => {
    return (
        <Suspense fallback={<PageSpinner message={t("profile.loading_profile")} fullPage showDots />}>
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

                    <Route path="/community" element={<Community />}>
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
                                <Overlay>
                                    {(handleClose) => <FollowersCard onCancel={handleClose} view={false} />}
                                </Overlay>
                            }
                        />
                        <Route
                            path="followings"
                            element={
                                <Overlay>
                                    {(handleClose) => <FollowingCard onCancel={handleClose} view={false} />}
                                </Overlay>
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
                            element={
                                <Overlay>{(handleClose) => <Verified onCancel={handleClose} />}</Overlay>
                            }
                        />
                        <Route
                            path="privacy"
                            element={<Overlay>{(handleClose) => <Privacy onCancel={handleClose} />}</Overlay>}
                        />
                    </Route>

                    <Route path="/notifications" element={<Notifications />} />

                    <Route path="/purchases" element={<Purchases />} />
                </Routes>
            </AppShell>
        </Suspense>
    );
};
