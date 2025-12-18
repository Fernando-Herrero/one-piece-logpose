import { useEffect, useState } from "react";

export const useFetchData = (fetchFunction) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (loading) return;
            try {
                setLoading(true);
                setError(null);

                const result = await fetchFunction();
                setData(result);
            } catch (error) {
                console.error("Error al obtener mis posts", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
};
