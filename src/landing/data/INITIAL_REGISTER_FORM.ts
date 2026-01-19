export type RegisterForm = {
    name: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
    role: "user" | "admin";
    avatar: string;
};

export const INITIAL_REGISTER_FORM: RegisterForm = {
    name: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    role: "user",
    avatar: "",
};
