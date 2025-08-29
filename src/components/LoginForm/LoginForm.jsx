import { useContext, useState } from "react";
import "./LoginForm.css";
import { languages } from "../../data/languages";
import { LanguagesContext } from "../../context/LanguagesContext";
import Eye from "../../assets/icons/eye-solid-full.svg";
import EyeSlash from "../../assets/icons/eye-slash-solid-full.svg";
import { useToggle } from "../../hooks/useToggle";
import { UserContext } from "../../context/userContext";
import { useLoginValidation } from "../../hooks/useLoginValidation";
import { storage } from "../../helpers/storage";
import { Link } from "react-router-dom";

const emptyUser = { id: "", username: "", password: "", experience: "" };

export const LoginForm = () => {
	const savedForm = storage.get("loginInputs");
	const [form, setForm] = useState(savedForm || emptyUser);

	const [isVisible, toggleVisible] = useToggle();
	const { error, validateForm, clearError } = useLoginValidation();

	const { lang } = useContext(LanguagesContext);
	const { login } = useContext(UserContext);

	const handleInputForm = ({ target: { name, value } }) => {
		clearError();
		setForm((prev) => {
			const newForm = { ...prev, [name]: value };
			storage.save("loginInputs", newForm);
			return newForm;
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const validationError = validateForm(form, lang);
		if (validationError) return;

		login(form);
	};

	return (
		<form className="login-form" onSubmit={handleSubmit}>
			<label className="login-label-input">
				Username:
				<input
					className="no-focus bg-white"
					type="text"
					name="username"
					autoComplete="off"
					placeholder={languages[lang].login.username}
					value={form.username}
					onChange={handleInputForm}
				/>
			</label>

			<label className="login-label-input">
				{languages[lang].login.password}
				<div className="login-input-button">
					<input
						className="no-focus bg-white"
						type={isVisible ? "text" : "password"}
						name="password"
						autoComplete="off"
						placeholder={languages[lang].login.passwordMessage}
						value={form.password}
						onChange={handleInputForm}
					/>
					<button className="eye-btn" type="button" onClick={toggleVisible}>
						<img src={isVisible ? EyeSlash : Eye} alt={isVisible ? "Hide password" : "Show password"} />
					</button>
				</div>
			</label>

			<p className="register-message">
				{languages[lang].login.notRegistered}{" "}
				<Link className="registered-link" to="/login/register">
					{languages[lang].login.registered}
				</Link>
			</p>

			<button type="submit" className="submit-btn">
				Login
			</button>

			{error && <p className="error-message">{error}</p>}
		</form>
	);
};
