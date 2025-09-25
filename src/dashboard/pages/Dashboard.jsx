import { Overlay } from "@/components/Overlay";
import { AppShell } from "@/dashboard/components/AppShell";
import { AvatarSection } from "@/dashboard/components/Profile/AvatarSection";
import { Comment } from "@/dashboard/pages/Comment";
import { Community } from "@/dashboard/pages/Community";
import { Post } from "@/dashboard/pages/Post";
import { Profile } from "@/dashboard/pages/Profile";
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
                <Route path="/community" element={<Community />}>
                    <Route
                        path="post"
                        element={<Overlay>{(handleClose) => <Post onCancel={handleClose} />}</Overlay>}
                    />
                    <Route
                        path="comment"
                        element={<Overlay>{(handleClose) => <Comment onCancel={handleClose} />}</Overlay>}
                    />
                </Route>
                <Route path="/userProfile" element={<UserProfile />} />
            </Routes>
        </AppShell>
    );
};
