import "./LoginForm.css";

export const LoginForm = () => {
    
	return (
		<form className="login-form">
			<label>
				Username:
				<input type="text" />
			</label>

			<label>
				Password:
				<input type="password" name="" id="" />
			</label>

			<labe>
				<input type="checkbox" />
			</labe>

			<p className="register-message">
				*Aun no estas registrado? <a href="#">Registrate</a>
			</p>
		</form>
	);
};
