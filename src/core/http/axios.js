import axios from "axios";

const baseURL = "https://react-students-api-eleven-code.vercel.app/api";
// const baseURL = "http://localhost:4000";

export const api = axios.create({
    baseURL,
    timeout: 10 * 1000,
    headers: {
        "Content-Type": "aplication/json",
        Accept: "application/json",
    },
});

api.interceptors.request.use((config) => {});
