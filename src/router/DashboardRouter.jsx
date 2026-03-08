import { ErrorBoundary } from "@/components/ErrorBoundary/ErrorBoundary";
import { PageError } from "@/components/ErrorBoundary/PageError";
import { Modal } from "@/components/Modal";
import { Overlay } from "@/components/Overlay";
import { Dashboard } from "@/dashboard/pages/Dashboard";
import { PrivateRoute } from "@/landing/components/features/PrivateRoute";
import { Navigate, Route, Routes } from "react-router-dom";

export const DashboardRouter = ({ isOpen, modalData, t }) => {
    return (
        <div className="min-h-screen overflow-y-auto">
            <main>
                <ErrorBoundary
                    t={t}
                    fallback={
                        <PageError
                            title={t("pageError.dashboard.title")}
                            message={t("pageError.dashboard.message")}
                            onRetry={() => window.location.reload()}
                            fullPage
                        />
                    }
                >
                    <Routes>
                        <Route element={<PrivateRoute />}>
                            <Route path="/dashboard/*" element={<Dashboard t={t} />} />
                        </Route>

                        <Route path="*" element={<Navigate to="/dashboard/profile" replace />} />
                    </Routes>
                </ErrorBoundary>
            </main>

            {isOpen && (
                <Overlay>
                    {(handleClose) => (
                        <Modal {...modalData} onCancel={modalData.onCancel ? handleClose : undefined} />
                    )}
                </Overlay>
            )}
        </div>
    );
};
