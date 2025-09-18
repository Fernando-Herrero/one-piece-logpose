import axios from "axios";
import { getTokenFromLocalStorage } from "../auth/auth.service";

const baseURL = "https://react-students-api-eleven-code.vercel.app/api";
// const baseURL = "http://localhost:4000";

export const api = axios.create({
    baseURL,
    timeout: 10 * 1000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

api.interceptors.request.use(
    (config) => {
        const token = getTokenFromLocalStorage();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            console.error("Error interceptor:", error.response);
        } else if (error.request) {
            console.error("Error interceptor request:", error.request);
        } else {
            console.error("Error interceptor message:", error.message);
        }
        return Promise.reject(error);
    }
);
