import { Overlay } from "@/components/Overlay";
import { PostProvider } from "@/context/PostContext";
import { UserProvider } from "@/context/userContext";
import { AppShell } from "@/dashboard/components/AppShell";
import { AvatarSection } from "@/dashboard/components/Profile/AvatarSection";
import { Comment } from "@/dashboard/pages/Comment";
import { Community } from "@/dashboard/pages/Community";
import { FollowersCard } from "@/dashboard/pages/FollowersCard";
import { Post } from "@/dashboard/pages/Post";
import { PostPage } from "@/dashboard/pages/PostPage";
import { Profile } from "@/dashboard/pages/Profile";
import { Settings } from "@/dashboard/pages/Settings";
import { UserProfile } from "@/dashboard/pages/UserProfile";
import { Navigate, Route, Routes } from "react-router-dom";

export const Dashboard = () => {
    return (
        <AppShell>
            <Routes>
                <Route index element={<Navigate to="profile" replace />} />

                <Route path="/profile" element={<Profile />}>
                    <Route
                        path="avatar"
                        element={
                            <Overlay>{(handleClose) => <AvatarSection onCancel={handleClose} />}</Overlay>
                        }
                    />
                </Route>
                <Route
                    path="/community"
                    element={
                        <PostProvider>
                            <Community />
                        </PostProvider>
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
                    <Route
                        path="postPage"
                        element={<Overlay>{(handleClose) => <PostPage onCancel={handleClose} />}</Overlay>}
                    />
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
                </Route>
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </AppShell>
    );
};
