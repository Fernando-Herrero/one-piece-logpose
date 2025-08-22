import { createContext, useState } from "react";

export const SagaContext = createContext(null);

export const SagaContextProvider = ({ children }) => {
	const [saga, setSaga] = useState({ saga: "", chapter: "" });

	return <SagaContext value={{ saga }}>{children}</SagaContext>;
};
