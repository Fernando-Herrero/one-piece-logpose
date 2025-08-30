import { useContext } from "react";
import { languages } from "../../data/languages";
import "./LoginPage.css";
import { LanguagesContext } from "../../context/LanguagesContext";
import { Outlet } from "react-router-dom";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { AvatarSelected } from "../../components/avatarSelected/AvatarSelected";

export const LoginPage = () => {
	const { lang } = useContext(LanguagesContext);

	return (
		<section className="login-container container">
			<header className="login-text">
				<h1>One Piece</h1>
				<h2>LogPose</h2>
				<p>{languages[lang].login.summary}</p>
			</header>

			<LoginForm />
			<AvatarSelected />
			<Outlet />
		</section>
	);
};
