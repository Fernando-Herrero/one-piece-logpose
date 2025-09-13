import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { Cards } from "../components/ui/Cards";

gsap.registerPlugin(ScrollTrigger);

const items = [
    {
        title: "⭐️ ¿Qué somos?",
        text: "Una web completa donde los usuarios podrán seguir su serie favorita, desbloquear recompensas y conectar con otros fans en tiempo real a través de una red social integrada. Además, podrán consultar todas las estadísticas de su perfil en tiempo real y compararlas con las de otros usuarios.",
    },
    {
        title: "🎯 Dashboard Personal",
        text: "Cada usuario cuenta con un panel personalizado donde podrá ver todos los aspectos importantes que necesite: notificaciones en tiempo real de la que se convertirá en su red social favorita, el último capítulo visto, y el progreso de su serie favorita. Además, podrá consultar el tiempo total en la app y su actividad reciente, así como acceder a recompensas desbloqueadas, como cartas de personajes, barcos, armas o ítems exclusivos. Este centro de control personal incentiva la participación y fideliza al usuario.",
    },
    {
        title: "💬 Red Social Integrada Inspirada en Twitter",
        text: "La app permite a los usuarios: Publicar comentarios, análisis y opiniones. Interactuar con otros fans mediante likes, comentarios y reposts. Seguir a otros usuarios y descubrir contenido interesante. Esto convierte la app en una comunidad activa, donde los usuarios participan y comparten experiencias.",
    },
    {
        title: "📚 Contenido Organizado",
        text: "Acceso a capítulos y arcos de manera estructurada y cronológica. Desbloqueo gradual de contenido a medida que avanzan. Incentivos constantes para consumir más contenido y coleccionar recompensas.",
    },
    {
        title: "🏆 Gamificación y Rankings",
        text: "El progreso se recompensa con un sistema de experiencia y niveles: Cada capítulo visto genera puntos de experiencia. Los usuarios ascienden a niveles jerárquicos según su avance. Recompensas coleccionables que motivan a continuar viendo contenido. Rankings globales que fomentan la competitividad y la interacción entre usuarios.",
    },
    {
        title: "📱 Mobile-First Experience",
        text: "Diseñada para ser totalmente accesible desde dispositivos móviles, garantizando: Navegación fluida y rápida. Experiencia optimizada para cualquier tamaño de pantalla. Alta retención de usuarios gracias a su diseño intuitivo.",
    },
];

export const BackUpPage = () => {
    const cardsRef = useRef([]);
    cardsRef.current = [];

    const addToRefs = (el) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    useEffect(() => {
        cardsRef.current.forEach((card, index) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 120, scale: 0.6 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    delay: index * 0.05,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 95%",
                    },
                }
            );
        });
    }, []);

    return (
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {items.map(({ title, text }, index) => (
                <Cards key={`${title}-${index}`} title={title} text={text} ref={addToRefs} />
            ))}
        </section>
    );
};
