import { useContext, useState } from "react";
import "./LoginForm.css";
import { languages } from "../../../pages/languages";
import { LanguagesContext } from "../../../context/LanguagesContext";
import Eye from "../../../assets/icons/eye-solid-full.svg";
import EyeSlash from "../../../assets/icons/eye-slash-solid-full.svg";
import { useToggle } from "../../../hooks/useToggle";
import { UserContext } from "../../../context/userContext";
import { useFormValidation } from "../../../hooks/useFormValidation";
import { storage } from "../../../helpers/storage";

const emptyUser = { id: "", username: "", password: "", experience: "" };

export const LoginForm = () => {
	const savedForm = storage.get("inputs");

	const { lang } = useContext(LanguagesContext);
	const { login } = useContext(UserContext);
	const [isVisible, toggleVisible] = useToggle();
	const [form, setForm] = useState(savedForm || emptyUser);
	const { error, validateForm, clearError } = useFormValidation();

	const handleInputForm = ({ target: { name, value } }) => {
		clearError();
		setForm((prev) => {
			const newForm = { ...prev, [name]: value };
			storage.save("inputs", newForm);
			return newForm;
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const validationError = validateForm(form, lang);
		if (validationError) return;

		login(form);
	};

	return (
		<form className="login-form" onSubmit={handleSubmit}>
			<label className="login-label-input">
				Username:
				<input
					type="text"
					name="username"
					id="username"
					autoComplete="off"
					placeholder={languages[lang].login.username}
					value={form.username}
					onChange={handleInputForm}
				/>
			</label>

			<label className="login-label-input">
				Password:
				<div className="login-input-button">
					<input
						type={isVisible ? "text" : "password"}
						name="password"
						id="password"
						autoComplete="off"
						placeholder={languages[lang].login.password}
						value={form.password}
						onChange={handleInputForm}
					/>
					<button className="eye-btn" type="button" onClick={toggleVisible}>
						<img src={isVisible ? Eye : EyeSlash} alt={isVisible ? "Hide password" : "Show password"} />
					</button>
				</div>
			</label>

			<p className="register-message">
				{languages[lang].login.notRegistered}{" "}
				<a className="registered-link" href="#">
					{languages[lang].login.registered}
				</a>
			</p>

			<button type="submit" className="login-btn">
				Login
			</button>

			{error && <p className="error-message">{error}</p>}
		</form>
	);
};
