import { createContext, useState } from "react";

export const LanguagesContext = createContext(null);

export const LanguagesContextProvider = ({ children }) => {
	const [lang, setLang] = useState("es");

	const handleLang = (value) => {
		setLang(value);
	};

	return <LanguagesContext value={{ lang }}>{children}</LanguagesContext>;
};
