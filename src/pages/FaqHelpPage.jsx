import { AccordionItem } from "@/components/ui/AccordionItem";
import { Container } from "@/components/ui/Container";
const faqData = [
    {
        title: "¿Qué es esta app de One Piece?",
        text: "Es una red social inspirada en Twitter, pero ambientada en el mundo de One Piece. Puedes seguir los capítulos, desbloquear personajes, barcos e ítems, y gestionar todo desde tu propio Dashboard.",
    },
    {
        title: "¿Cómo creo mi perfil?",
        text: "Desde el Dashboard, ve a la sección 'Perfil'. Allí puedes personalizar tu avatar, nombre de usuario y biografía pirata.",
    },
    {
        title: "¿Cómo desbloqueo personajes?",
        text: "Los personajes se desbloquean siguiendo capítulos de la serie o completando retos dentro de la app. Cada avance en la historia te dará acceso a nuevos nakamas.",
    },
    {
        title: "¿Qué son los ítems?",
        text: "Los ítems son objetos coleccionables inspirados en el mundo de One Piece, como Frutas del Diablo o tesoros. Te permiten personalizar tu experiencia y mejorar tu perfil.",
    },
    {
        title: "¿Puedo interactuar con otros usuarios?",
        text: "¡Sí! Puedes seguir a otros piratas, dar 'me gusta' a sus publicaciones, comentar y compartir teorías sobre One Piece.",
    },
    {
        title: "¿Qué es el Dashboard?",
        text: "El Dashboard es tu base personal. Desde allí manejas tu perfil, ves tus personajes desbloqueados, barcos, ítems, cartas de la serie y controlas tu progreso.",
    },
    {
        title: "¿Qué son las cartas de la serie?",
        text: "Son representaciones coleccionables de capítulos, escenas y personajes. Al avanzar en la historia, desbloqueas nuevas cartas para tu colección.",
    },
    {
        title: "¿Necesito pagar para usar la app?",
        text: "La app es gratuita. Algunas funciones adicionales o coleccionables premium pueden estar disponibles como compras opcionales.",
    },
    {
        title: "¿Cómo reporto un problema o bug?",
        text: "En el Dashboard encontrarás la sección 'Ayuda'. Desde ahí puedes reportar errores o sugerir mejoras.",
    },
    {
        title: "¿Puedo usar la app sin haber visto One Piece?",
        text: "¡Claro! Aunque está diseñada para fans, también puede servirte como una guía divertida para seguir la serie y descubrir sus personajes poco a poco.",
    },
    {
        title: "¿Habrá eventos especiales?",
        text: "Sí. Periódicamente lanzamos eventos temáticos (como el aniversario de One Piece o sagas destacadas) que permiten desbloquear contenido único.",
    },
];

export const FaqHelpPage = () => {
    return (
        <Container className="py-25 space-y-2 max-w-lg">
            {faqData.map(({ title, text }, index) => (
                <AccordionItem key={`${title}-${index}`} title={title} content={text} />
            ))}
        </Container>
    );
};
