import { languages } from "../../pages/languages";
import { LoginForm } from "./LoginForm/LoginForm";
import "./LoginPage.css";

export const LoginPage = () => {
	return (
		<section className="login-container">
			<div className="login-text">
				<h1>One Piece</h1>
				<h2>LogPose</h2>
				<p></p>
			</div>

			<LoginForm />
		</section>
	);
};
