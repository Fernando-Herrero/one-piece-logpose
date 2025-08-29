import { useContext, useState } from "react";
import "./RegisterForm.css";
import { registerForm } from "../../../data/registerForm";
import { useToggle } from "../../../hooks/useToggle";
import { languages } from "../../../data/languages";
import { LanguagesContext } from "../../../context/LanguagesContext";
import Eye from "../../../assets/icons/eye-solid-full.svg";
import EyeSlash from "../../../assets/icons/eye-slash-solid-full.svg";
import { storage } from "../../../helpers/storage";
import { useRegisterValidation } from "../../../hooks/useRegisterValidation";
import { ModalContext } from "../../../context/ModalContext";

export const RegisterForm = () => {
	const savedForm = storage.get("registerInputs");
	const [form, setForm] = useState(savedForm || registerForm);
	const { name, surname, username, email, language, password, confirmPassword } = form;
	const [isChecked, setIsChecked] = useState(false);

	const [isVisible, toggleVisible] = useToggle();
	const [isConfirmVisible, toggleConfirmVisible] = useToggle();
	const { error, validateRegisterForm, clearError } = useRegisterValidation();

	const { lang, setLang } = useContext(LanguagesContext);
	const { closeModal } = useContext(ModalContext);

	const handleRegisterInputs = ({ target: { name, value } }) => {
		clearError();
		setForm((prev) => {
			const newForm = { ...prev, [name]: value };
			storage.save("registerInputs", newForm);
			return newForm;
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const validationError = validateRegisterForm(form, lang);
		if (validationError) return;

		const completeUser = {
			id: crypto.randomUUID(),
			...form,
		};

		const userWithSaga = {
			nakamaData: completeUser,
			sagaProgress: { saga: 0, chapter: 0 },
		};

		storage.save(`user_${form.username}`, userWithSaga);
		storage.remove("registerInputs");

		setForm(registerForm);
		setIsChecked(false);

		closeModal();

		console.log("ID generada:", crypto.randomUUID());
		console.log("Usuario completo", userWithSaga);
	};

	return (
		<form className="register-form" onSubmit={handleSubmit}>
			<h3>{languages[lang].login.registerTitle}</h3>

			<label className="login-label-input">
				📝 {languages[lang].login.registerName}:
				<input
					className="no-focus"
					type="text"
					name="name"
					id="name"
					autoComplete="off"
					placeholder={languages[lang].login.registerNameMessage}
					value={name}
					onChange={handleRegisterInputs}
				/>
			</label>

			<label className="login-label-input">
				📝 {languages[lang].login.registerSurname}:
				<input
					className="no-focus"
					type="text"
					name="surname"
					id="surname"
					autoComplete="off"
					placeholder={languages[lang].login.registerSurnameMessage}
					value={surname}
					onChange={handleRegisterInputs}
				/>
			</label>

			<label className="login-label-input">
				✉️ {languages[lang].login.registerEmail}:
				<input
					className="no-focus"
					type="email"
					name="email"
					id="email"
					autoComplete="off"
					placeholder={languages[lang].login.registerEmailMessage}
					value={email}
					onChange={handleRegisterInputs}
				/>
			</label>

			<label className="login-label-input">
				🌍 {languages[lang].login.registerLang}:
				<select
					className="no-focus register-languages"
					name="language"
					value={language}
					onChange={handleRegisterInputs}
				>
					<option value="">--{languages[lang].login.registerSelectLang}--</option>
					<option value="es">Español 🇪🇸</option>
					<option value="en">English 🇬🇧</option>
				</select>
			</label>

			<label className="login-label-input">
				👤 Username:
				<input
					className="no-focus"
					type="text"
					name="username"
					id="username"
					autoComplete="off"
					placeholder={languages[lang].login.registerUsername}
					value={username}
					onChange={handleRegisterInputs}
				/>
			</label>

			<label className="login-label-input">
				🔒 {languages[lang].login.registerPassword}:
				<div className="login-input-button">
					<input
						className="no-focus"
						type={isVisible ? "text" : "password"}
						name="password"
						id="password"
						autoComplete="off"
						placeholder={languages[lang].login.password}
						value={password}
						onChange={handleRegisterInputs}
					/>
					<button className="eye-btn" type="button" onClick={toggleVisible}>
						<img src={isVisible ? EyeSlash : Eye} alt={isVisible ? "Hide password" : "Show password"} />
					</button>
				</div>
			</label>

			<label className="login-label-input">
				🔒 {languages[lang].login.registerPassword}:
				<div className="login-input-button">
					<input
						className="no-focus"
						type={isConfirmVisible ? "text" : "password"}
						name="confirmPassword"
						id="confirmPassword"
						autoComplete="off"
						placeholder={languages[lang].login.passwordConfirm}
						value={confirmPassword}
						onChange={handleRegisterInputs}
					/>
					<button className="eye-btn" type="button" onClick={toggleConfirmVisible}>
						<img
							src={isConfirmVisible ? EyeSlash : Eye}
							alt={isConfirmVisible ? "Hide password" : "Show password"}
						/>
					</button>
				</div>
			</label>

			<label className="register-checked">
				<div className="register-checked-terms">
					<input
						required
						className="no-focus"
						type="checkbox"
						name="checked"
						id="checked"
						checked={isChecked}
						onChange={(event) => setIsChecked(event.target.checked)}
					/>

					<p>Acepto los términos y condiciones y la política de privacidad.</p>
				</div>
				<span className="terms-message">
					* Al registrarte aceptas nuestros Términos y Condiciones y reconoces haber leído nuestra Política de
					Privacidad. Nos comprometemos a proteger tus datos personales y a utilizarlos únicamente para
					proporcionarte el servicio. No compartiremos tu información con terceros sin tu consentimiento.
					Puedes solicitar la eliminación de tu cuenta en cualquier momento.
				</span>
			</label>

			{error && <p className="error-message">{error}</p>}

			<button type="submit" className="submit-btn">
				{languages[lang].login.registerSubmit}
			</button>
		</form>
	);
};
