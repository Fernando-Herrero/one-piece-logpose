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

        return response.data;
    } catch (error) {
        console.error("Error al postear el post", error);
        throw error;
    }
};

export const deletePostApi = async (id) => {
    try {
        console.log("Eliminando post", id);
        const response = await api.delete(`/posts/${id}`);
        console.log("respuesta de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al eliminar posst", error);
        throw error;
    }
};

export const likePostApi = async (id) => {
    try {
        console.log("Cambiando like al post", id);
        const response = await api.post(`/posts/${id}/like`);
        console.log("respues de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al dar like al post", error);
        throw error;
    }
};

export const bookmarkPostApi = async (id) => {
    try {
        console.log("Cambiando bookmark al post", id);
        const response = await api.post(`/posts/${id}/bookmark`);
        console.log("respues de la api", response);

        return response.data;
    } catch (error) {
        console.error("Error al guardar el post", error);
        throw error;
    }
};
