import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useFetch } from "../../hooks/useFecth.jsx";
import { Header } from "../../layouts/Header.jsx";
import { SagasLayout } from "../../layouts/SagasLayout.jsx";

const urls = {
    sagas: "https://api.api-onepiece.com/v2/sagas/en",
    chapters: "https://api.api-onepiece.com/v2/chapters/en",
    fruits: "https://api.api-onepiece.com/v2/fruits/en",
    swords: "https://api.api-onepiece.com/v2/swords/en",
    hakis: "https://api.api-onepiece.com/v2/hakis/en",
    characters: "https://api.api-onepiece.com/v2/characters/en",
    boats: "https://api.api-onepiece.com/v2/boats/en",
    arcs: "https://api.api-onepiece.com/v2/arcs/en",
    locations: "https://api.api-onepiece.com/v2/locates/en",
};

export const MainPage = () => {
    const { data, loading, error } = useFetch(urls.sagas);

    useEffect(() => {
        if (data) console.log("Datos recibidos:", data);
    }, [data]);

    return (
        <>
            <Header />
            <SagasLayout />
            <Outlet />
        </>
    );
};
