import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { UserContextProvider } from "./context/userContext.jsx";
import { SagaContextProvider } from "./context/SagaContext.jsx";
import { LanguagesContextProvider } from "./context/LanguagesContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { AvatarContextProvider } from "./context/AvatarContext.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<LanguagesContextProvider>
				<SagaContextProvider>
					<AvatarContextProvider>
						<UserContextProvider>
							<App />
						</UserContextProvider>
					</AvatarContextProvider>
				</SagaContextProvider>
			</LanguagesContextProvider>
		</BrowserRouter>
	</StrictMode>
);
