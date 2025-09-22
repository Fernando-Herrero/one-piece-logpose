import { api } from "@/core/http/axios";

export const getPostsApi = async () => {
    try {
        console.log("Recibiendo posts de la api");
        const response = await api.get("/posts");
        console.log("respuesta de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al recibir posts");
        throw error;
    }
};

export const createPostApi = async (post) => {
    try {
        console.log("posteando post a la api");
        const response = await api.post("/posts", post);
        console.log("respuesta de la api", response);

        return response;
    } catch (error) {
        console.error("Error al postear el post", error);
        throw error;
    }
};
