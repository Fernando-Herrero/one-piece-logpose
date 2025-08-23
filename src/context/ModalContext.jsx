import { createContext, useEffect, useState } from "react";
import { storage } from "../helpers/storage";
import { RegisterForm } from "../components/LoginPage/RegisterForm/RegisterForm";

export const ModalContext = createContext(null);

export const ModalContextProvider = ({ children }) => {
	const [modalContent, setModalContent] = useState(null);

	useEffect(() => {
		try {
			const isOpen = storage.get("modalOpen") === true;
			const modalType = storage.get("modalType");

			if (isOpen && modalType === "register") setModalContent({ component: <RegisterForm />, type: "register" });
		} catch (error) {
			console.error("Error loading modal:", error);
			storage.remove("modalOpen");
			storage.remove("modalType");
		}
	}, []);

	const openModal = (component, type) => {
		setModalContent({ component, type });
		storage.save("modalOpen", true);
		storage.save("modalType", type);
	};

	const closeModal = () => {
		setModalContent(null);
		storage.remove("modalOpen");
		storage.remove("modalType");
	};

	useEffect(() => {
		return () => {
			if (modalContent) {
				storage.remove("modalOpen");
				storage.remove("modalType");
			}
		};
	}, [modalContent]);

	return <ModalContext.Provider value={{ modalContent, openModal, closeModal }}>{children}</ModalContext.Provider>;
};
