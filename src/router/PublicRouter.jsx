export const PublicRouter = () => {
    return (
        <div className="min-h-dvh grid grid-rows-[1fr_auto] font-family-body text-sm overflow-x-hidden overflow-y-auto">
            <ErrorBoundary
                fallback={
                    <PageError
                        title="Oops! Algo salió mal"
                        message="Ha ocurrido un error en la sección pública. Recarga la página o inténtalo más tarde."
                        onRetry={() => window.location.reload()}
                        fullPage
                    />
                }
            >
                <Header />

                <main className="flex flex-col justify-center pt-24">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route
                            path="/login"
                            element={
                                <Overlay>
                                    <LoginPage />
                                </Overlay>
                            }
                        />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/faq" element={<FaqHelpPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/characters" element={<CharactersPage />} />
                        <Route path="/history" element={<HistoryPage />} />
                        <Route
                            path="/map"
                            element={
                                <Overlay>
                                    <MapSection />
                                </Overlay>
                            }
                        />

                        <Route path="/dashboard/*" element={<Navigate to="/" replace />} />

                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>
                <Footer />
            </ErrorBoundary>
            {isOpen && (
                <Overlay>
                    <Modal {...modalData} />
                </Overlay>
            )}
            )
        </div>
    );
};
