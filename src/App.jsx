import "./App.css";
import { Footer } from "./layouts/Footer/Footer";
import { Overlay } from "./components/Overlay/Overlay";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { RegisterForm } from "./pages/LoginPage/RegisterForm/RegisterForm";

export const App = () => {
	return (
		<>
			<main>
				<Routes>
					<Route path="/" element={<Navigate to="/login" />} />
					<Route path="/login" element={<LoginPage />}>
						<Route
							path="register"
							element={
								<Overlay>
									<RegisterForm />
								</Overlay>
							}
						/>
					</Route>
					<Route path="*" element={<Navigate to="/login" />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
};
