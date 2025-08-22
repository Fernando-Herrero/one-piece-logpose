import { useContext } from "react";
import { languages } from "../../pages/languages";
import { LoginForm } from "./LoginForm/LoginForm";
import "./LoginPage.css";
import { LanguagesContext } from "../../context/LanguagesContext";

export const LoginPage = () => {
	const { lang } = useContext(LanguagesContext);
	
	return (
		<section className="login-container container">
			<div className="login-text">
				<h1>One Piece</h1>
				<h2>LogPose</h2>
				<p>{languages[lang].login.summary}</p>
			</div>

			<LoginForm />
		</section>
	);
};
