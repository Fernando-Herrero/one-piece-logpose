import { useContext } from "react";
import { AnimationTitle } from "../components/ui/AnimationTitle";
import { Container } from "../components/ui/Container";
import { LanguagesContext } from "../context/LanguagesContext";

export const HomePage = () => {
    const { lang } = useContext(LanguagesContext);

    return (
        <div className="relative z-5 h-full">
            <Container className="pt-20">
                <header className="flex flex-col items-center text-center gap-1 max-w-lg">
                    <AnimationTitle
                        text="One Piece"
                        time={600000}
                        time2={5000}
                        className="font-family-title text-title text-accent shadow-title"
                    />
                    <AnimationTitle
                        text="LogPose"
                        time={600001}
                        time2={5001}
                        className="font-family-title text-subtitle font-bold text-[#c9a066] text-shadow-[4px_4px_2px_#3b2f2f] tracking-wider -mt-8"
                    />
                </header>

                <p>
                    La Experiencia Definitiva de One Piece ¡Sumérgete en el mundo de One Piece como nunca
                    antes! Nuestra web está diseñada para que los fans disfruten, interactúen y sigan la
                    historia de manera personalizada, todo desde un Dashboard único y lleno de
                    funcionalidades. Tu Dashboard Personal En tu Dashboard podrás: Ver tu perfil y
                    personalizar tu avatar con tus personajes favoritos. A medida que avances en la historia,
                    nuevos personajes se irán desbloqueando. Controlar tu tiempo en la web, con estadísticas
                    de minutos vistos y tu progreso general. Acceder al ranking de usuarios, donde podrás
                    comparar tus logros, nivel y tiempo invertido con otros fans de la serie. Red Social al
                    Estilo “Titter” Exprésate libremente en nuestra red social interna: Habla sobre la serie,
                    comparte teorías o simplemente comenta lo que quieras. Interactúa con otros fans, haz
                    amigos y descubre nuevas perspectivas sobre One Piece. Sección de Episodios y Recompensas
                    Sigue la serie a tu ritmo y desbloquea episodios según tu progreso. Recibe cartas
                    coleccionables de tus personajes favoritos, barcos, armas y objetos icónicos del mundo de
                    One Piece. Comparte tus colecciones y presume tus logros dentro de la comunidad. Una
                    Experiencia Integral Nuestra web no solo es un lugar para ver One Piece, es tu mundo
                    personal dentro de la historia: desde seguir tu progreso hasta interactuar con la
                    comunidad, desbloquear contenido exclusivo y coleccionar recuerdos de tus aventuras
                    favoritas. ¡Únete ahora y conviértete en parte de la tripulación más grande del mundo de
                    One Piece!
                </p>
            </Container>
            ;
        </div>
    );
};
