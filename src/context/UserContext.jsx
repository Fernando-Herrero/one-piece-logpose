import { createContext, useContext, useEffect, useRef, useState } from "react";
import { SagaContext } from "./SagaContext";
import { storage } from "../helpers/storage";
import { useStorage } from "../hooks/useStorage";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
	const savedUser = storage.get("user");
	const savedLoggedIn = storage.get("loggedIn");
	const savedAvatar = storage.get("avatar");

	const [user, setUser] = useState(savedUser || { id: "", username: "", password: "", experience: "" });
	const [avatar, setAvatar] = useState(savedAvatar || null);
	const [isLoggedIn, setIsLoggedIn] = useState(savedLoggedIn || false);

	const nextId = useRef(1);

	const { saga, setSaga } = useContext(SagaContext);

	useEffect(() => {
		const savedSaga = storage.get("saga");
		if (savedSaga && isLoggedIn) setSaga(savedSaga);
	}, []);

	useStorage("user", user);
	useStorage("loggedIn", isLoggedIn);
	useStorage("avatar", avatar);
	useStorage("saga", isLoggedIn ? saga : null);

	const login = (form) => {
		const existingUserData = storage.get(`user_${form.username}`);

		if (existingUserData) {
			setUser(existingUserData.userData);
			setIsLoggedIn(true);
			setSaga(existingUserData.sagaProgress);
			setAvatar(existingUserData.avatar);

			console.log(`✅ Usuario existente logueado: ${form.username}`);
			console.log(
				`📖 Progreso cargado: Saga ${existingUserData.sagaProgress.saga}, Capítulo ${existingUserData.sagaProgress.chapter}`
			);
		} else {
			const newUser = { ...form, id: `user_${Date.now() + nextId.current}`, password: "", experience: 0 };

			const initialSaga = { saga: 0, chapter: 0 };

			const userData = {
				userData: newUser,
				sagaProgress: initialSaga,
				avatar: null,
				createdAt: new Date().toISOString(),
			};

			storage.save(`user_${form.username}`, userData);
			setUser(newUser);
			setIsLoggedIn(true);
			setSaga(initialSaga);

			nextId.current += 1;

			console.log(`🆕 Nuevo usuario creado: ${form.username}`);
		}
	};

	const logout = () => {
		if (user.name) {
			const userData = {
				userData: user,
				sagaProgress: saga,
				avatar: avatar,
				lastLogin: new Date().toISOString(),
			};

			storage.save(`user_${user.username}`, userData);
		}
		setUser({ id: "", username: "", password: "", experience: "" });
		setAvatar(null);
		setIsLoggedIn(false);

		console.log("👋 Usuario desconectado (progreso guardado)");
	};

	const deleteUser = (username) => {
		storage.remove(`user_${username}`);

		console.log(`🗑️ Usuario ${username} eliminado del storage`);
	};

	return (
		<UserContext.Provider value={{ user, avatar, setAvatar, isLoggedIn, login, logout, deleteUser }}>
			{children}
		</UserContext.Provider>
	);
};
