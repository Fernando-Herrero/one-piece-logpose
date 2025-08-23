import { createContext, useContext, useEffect, useState } from "react";
import { storage } from "../helpers/storage";
import { SagaContext } from "./SagaContext";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
	const savedUser = storage.get("existingUser");
	const userIsLoggedIn = storage.get("isLoggedIn");
	const [user, setUser] = useState(savedUser || { id: "", username: "", password: "", experience: 0 });
	const [isLoggedIn, setIsloggedIn] = useState(userIsLoggedIn || false);

	const { setSaga } = useContext(SagaContext);

	useEffect(() => {
		if (savedUser) {
			setUser(savedUser.nakamaData);
			setSaga(savedUser.sagaProgress);
		}
	}, []);

	const login = (form) => {
		const existingUserData = storage.get(`user_${form.username}`);

		setUser(existingUserData.nakamaData);
		setSaga(existingUserData.sagaProgress);
		setIsloggedIn(true);

		storage.save("existingUser", existingUserData);
		storage.save("isLoggedIn", true);

		storage.remove("loginInputs");
		storage.remove("registerInputs");
	};

	const logout = () => {
		if (isLoggedIn === true) {
			setIsloggedIn(false);
			setUser({ id: "", username: "", password: "", experience: 0 });
			setSaga({ saga: 0, chapter: 0 });

			storage.remove("existingUser");
			storage.remove("isLoggedIn");
		}
	};

	const deleteUser = () => {
		if (savedUser) {
			setUser({ id: "", username: "", password: "", experience: 0 });
			setSaga({ saga: 0, chapter: 0 });
			setIsloggedIn(false);

			storage.remove(`user_${savedUser.nakamaData.username}`);
			storage.remove("existingUser");
			storage.remove("isLoggedIn");
		}
	};

	return (
		<UserContext.Provider value={{ user, login, isLoggedIn, logout, deleteUser }}>{children}</UserContext.Provider>
	);
};
