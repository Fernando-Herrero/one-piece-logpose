import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { UserContextProvider } from "./context/userContext.jsx";
import { SagaContextProvider } from "./context/SagaContext.jsx";
import { LanguagesContextProvider } from "./context/LanguagesContext.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<LanguagesContextProvider>
			<UserContextProvider>
				<SagaContextProvider>
					<App />
				</SagaContextProvider>
			</UserContextProvider>
		</LanguagesContextProvider>
	</StrictMode>
);
