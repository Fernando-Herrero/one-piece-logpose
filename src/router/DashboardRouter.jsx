export const DashboardRouter = () => {
    return (
        <div className="min-h-screen overflow-y-auto">
            <main>
                <Routes>
                    <Route
                        path="/"
                        element={user ? <Navigate to="/dashboard/profile" replace /> : <HomePage />}
                    />
                    <Route element={<PrivateRoute />}>
                        <Route path="/dashboard/*" element={<Dashboard />} />
                        {/* <Route path="/main" element={<MainPage />} /> */}
                    </Route>

                    <Route path="*" element={<Navigate to="/dashboard/profile" replace />} />
                </Routes>
            </main>

            {isOpen && <Overlay>{(handleClose) => <Modal {...modalData} onCancel={handleClose} />}</Overlay>}
        </div>
    );
};
