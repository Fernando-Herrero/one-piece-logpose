import { SagasLayout } from "@/dashboard/pages/SagasLayout.jsx";
import { useFetch } from "@/hooks/useFetch.jsx";
import { Header } from "@/layouts/Header.jsx";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const urls = {
    sagas: "https://api.api-onepiece.com/v2/sagas/en",
    fruits: "https://api.api-onepiece.com/v2/fruits/en",
    swords: "https://api.api-onepiece.com/v2/swords/en",
    hakis: "https://api.api-onepiece.com/v2/hakis/en",
    characters: "https://api.api-onepiece.com/v2/characters/en",
    boats: "https://api.api-onepiece.com/v2/boats/en",
};

export const MainPage = () => {
    const { data, loading, error } = useFetch(urls.fruits);

    useEffect(() => {
        if (data) console.log(data);
    }, [data]);

    return (
        <>
            <Header />
            <SagasLayout />
            <Outlet />
        </>
    );
};
