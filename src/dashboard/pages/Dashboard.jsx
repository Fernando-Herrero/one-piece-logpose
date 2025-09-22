import { Overlay } from "@/components/Overlay";
import { usePosts } from "@/core/posts/usePosts";
import { AppShell } from "@/dashboard/components/AppShell";
import { Community } from "@/dashboard/pages/Community";
import { Post } from "@/dashboard/pages/Post";
import { Profile } from "@/dashboard/pages/Profile";
import { Navigate, Route, Routes } from "react-router-dom";

export const Dashboard = () => {
    const { createPost, setError, error } = usePosts();
    return (
        <AppShell>
            <Routes>
                <Route index element={<Navigate to="profile" replace />} />

                <Route path="/profile" element={<Profile />} />
                <Route path="/community" element={<Community />}>
                    <Route
                        path="post"
                        element={<Overlay>{(handleClose) => <Post onCancel={handleClose} />}</Overlay>}
                    />
                </Route>
            </Routes>
        </AppShell>
    );
};
