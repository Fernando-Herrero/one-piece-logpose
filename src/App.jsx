import { useContext } from "react";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { Overlay } from "./components/Overlay/Overlay";
import { ModalContext } from "./context/ModalContext";
import { UserContext } from "./context/userContext";

export const App = () => {
	const { modalContent, closeModal } = useContext(ModalContext);
	const { isLoggedIn } = useContext(UserContext);

	return (
		<>
			<LoginPage />
			<Footer />

			{modalContent && (
				<Overlay isOpen={true} onClose={closeModal}>
					{modalContent.component}
				</Overlay>
			)}
		</>
	);
};
