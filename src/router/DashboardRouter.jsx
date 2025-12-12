import { Modal } from "@/components/Modal";
import { Overlay } from "@/components/Overlay";
import { Dashboard } from "@/dashboard/pages/Dashboard";
import { PrivateRoute } from "@/landing/components/features/PrivateRoute";
import { Navigate, Route, Routes } from "react-router-dom";

export const DashboardRouter = ({ isOpen, modalData, lang }) => {
    console.log("Render DshboardRouter");

    return (
        <div className="min-h-screen overflow-y-auto">
            <main>
                <Routes>
                    <Route element={<PrivateRoute />}>
                        <Route path="/dashboard/*" element={<Dashboard lang={lang} />} />
                    </Route>

                    <Route path="*" element={<Navigate to="/dashboard/profile" replace />} />
                </Routes>
            </main>

            {isOpen && <Overlay>{(handleClose) => <Modal {...modalData} onCancel={handleClose} />}</Overlay>}
        </div>
    );
};
