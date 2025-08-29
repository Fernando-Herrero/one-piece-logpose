import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { UserContextProvider } from "./context/userContext.jsx";
import { SagaContextProvider } from "./context/SagaContext.jsx";
import { LanguagesContextProvider } from "./context/LanguagesContext.jsx";
import { ModalContextProvider } from "./context/ModalContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<ModalContextProvider>
				<LanguagesContextProvider>
					<SagaContextProvider>
						<UserContextProvider>
							<App />
						</UserContextProvider>
					</SagaContextProvider>
				</LanguagesContextProvider>
			</ModalContextProvider>
		</BrowserRouter>
	</StrictMode>
);
