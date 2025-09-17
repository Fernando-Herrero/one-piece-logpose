const episodes = [
    {
        id: 1,
        name: "I'm Luffy! The Man Who's Gonna Be King of the Pirates!",
        description:
            "Un misterioso joven emerge de un barril en medio del océano. Cuando un crucero es atacado por los piratas de Alvida, conoce a un chico llamado Coby que sueña con ser marine.",
        arc: "Romance Dawn",
        achievements: {
            characters: ["Monkey D. Luffy", "Alvida", "koby"],
            items: [],
            fruits: ["Gomu Gomu no Mi"],
            swords: [],
            boats: ["Alvida's ship"],
        },
        experiece: 100,
    },
    {
        id: 2,
        name: "Enter the Great Swordsman! Pirate Hunter Roronoa Zoro!",
        description:
            "Luffy y Coby llegan a Shell Town donde conocen al famoso cazador de piratas Roronoa Zoro, quien está atado como prisionero del corrupto Capitán Morgan.",
        arc: "Romance Dawn",
        achievements: {
            characters: ["Roronoa Zoro", "Captain Morgan", "Helmeppo"],
            items: [],
            fruits: [],
            swords: ["Wado Ichimonji"],
            boats: [],
        },
        experiece: 100,
    },
    {
        id: 3,
        name: "Morgan vs. Luffy! Who's This Beautiful Young Woman?",
        description:
            "Luffy y Zoro enfrentan al tiránico Capitán Morgan en Shell Town. Una misteriosa ladrona observa la batalla desde las sombras.",
        arc: "Romance Dawn",
        achievements: {
            characters: ["Nami"],
            items: [],
            fruits: [],
            swords: [],
            boats: [],
        },
        experiece: 500,
    },
    {
        id: 4,
        name: "Luffy's Past! The Red-Haired Shanks Appears!",
        description:
            "Se revela cómo Luffy obtuvo sus poderes y su sombrero de paja a través de un flashback de su infancia con el pirata Shanks. La tripulación llega a Orange Town.",
        arc: "Orange Town",
        achievements: {
            characters: ["Shanks", "Buggy", "Higuma", "Chouchou"],
            items: ["Straw Hat"],
            fruits: [],
            swords: [],
            boats: ["Red Force"],
        },
        experiece: 100,
    },
    {
        id: 5,
        name: "A Terrifying Mysterious Power! Captain Buggy, the Clown Pirate!",
        description:
            "La tripulación se enfrenta a Buggy el Payaso, un peligroso pirata con poderes de fruta del diablo que aterroriza Orange Town.",
        arc: "Orange Town",
        achievements: {
            characters: ["Mohji", "Richie", "Cabaji"],
            items: ["Buggy Ball", "Buggy's cannon"],
            fruits: ["Bara Bara no Mi"],
            swords: [],
            boats: ["Big Top (Buggy's ship)"],
        },
        experiece: 100,
    },
    {
        id: 6,
        name: "Desperate Situation! Beast Tamer Mohji vs. Luffy!",
        description:
            "Luffy protege a un perro fiel y su tienda de comida para mascotas enfrentándose al domador de bestias Mohji y su león Richie.",
        arc: "Orange Town",
        achievements: {
            characters: [],
            items: [],
            fruits: [],
            swords: [],
            boats: [],
        },
        experiece: 100,
    },
    {
        id: 7,
        name: "Epic Showdown! Swordsman Zoro vs. Acrobat Cabaji!",
        description:
            "Zoro demuestra su habilidad como espadachín enfrentándose al acróbata Cabaji de los piratas de Buggy a pesar de estar herido.",
        arc: "Orange Town",
        achievements: {
            characters: [],
            items: ["Acrobatic unicycle"],
            fruits: [],
            swords: [],
            boats: [],
        },
        experiece: 100,
    },
    {
        id: 8,
        name: "Who's the Lucky One? The Devil Fruit Power Showdown!",
        description:
            "Enfrentamiento final entre Luffy y Buggy. Los poderes de las frutas del diablo chocan mientras el destino de Orange Town se decide.",
        arc: "Orange Town",
        achievements: {
            characters: ["Boodle"],
            items: [],
            fruits: [],
            swords: [],
            boats: [],
        },
        experiece: 500,
    },
    {
        id: 9,
        name: "The Honorable Liar? Captain Usopp!",
        description:
            "La tripulación llega a Syrup Village buscando un barco. Conocen a Usopp, un joven mentiroso que cuenta historias fantasiosas a los niños del pueblo.",
        arc: "Syrup Village",
        achievements: {
            characters: ["Usopp", "Kaya", "Onion", "Pepper", "Carrot", "Merry"],
            items: ["Slingshot", "Usopp's bag of tricks"],
            swords: [],
            boats: [],
            fruits: [],
        },
        experiece: 100,
    },
    {
        id: 10,
        name: "The Weirdest Guy Ever! Jango the Hypnotist!",
        description:
            "Un extraño hipnotizador llamado Jango llega al pueblo. Se revela una conspiración que involucra al mayordomo de Kaya y un plan siniestro.",
        arc: "Syrup Village",
        achievements: {
            characters: ["Jango", "Kuro"],
            items: ["Hypnosis rings", "Jango's chakram"],
            swords: [],
            boats: [],
            fruits: [],
        },
        experiece: 100,
    },
    {
        id: 11,
        name: "Expose the Plot! Pirate Butler, Captain Kuro!",
        description:
            "Se revela que Klahadore es en realidad el temido Capitán Kuro. Usopp descubre el plan para asesinar a Kaya y robar su fortuna.",
        arc: "Syrup Village",
        achievements: {
            characters: [],
            items: ["Cat Claws"],
            swords: [],
            boats: [],
            fruits: [],
        },
        experiece: 100,
    },
    {
        id: 12,
        name: "Clash with the Black Cat Pirates! The Great Battle on the Slope!",
        description:
            "Comienza la batalla decisiva en la pendiente norte. Los Sombrero de Paja y Usopp se enfrentan a los Piratas del Gato Negro.",
        arc: "Syrup Village",
        achievements: {
            characters: ["Sham", "Buchi", "Nyaban Brothers"],
            items: [],
            swords: [],
            boats: ["Black Cat Pirate's ship"],
            fruits: [],
        },
        experiece: 100,
    },
    {
        id: 13,
        name: "The Terrifying Duo! Meowban Brothers vs. Zoro!",
        description:
            "Zoro se enfrenta a los hermanos felinos Sham y Buchi mientras Luffy y los demás luchan contra el resto de la tripulación pirata.",
        arc: "Syrup Village",
        achievements: {
            characters: [],
            items: ["Cat-themed weapons"],
            swords: [],
            boats: [],
            fruits: [],
        },
        experiece: 100,
    },
    {
        id: 14,
        name: "Luffy Back in Action! Miss Kaya's Desperate Resistance!",
        description:
            "Luffy se recupera de la hipnosis de Jango. Kaya intenta resistir las amenazas mientras la batalla se intensifica.",
        arc: "Syrup Village",
        achievements: {
            characters: [],
            items: [],
            swords: [],
            boats: [],
            fruits: [],
        },
        experiece: 100,
    },
    {
        id: 15,
        name: "Beat Kuro! Usopp the Man's Tearful Resolve!",
        description:
            "Usopp encuentra el valor para enfrentar sus miedos y defender el pueblo. Se prepara para la confrontación final con Kuro.",
        arc: "Syrup Village",
        achievements: {
            characters: [],
            items: [],
            swords: [],
            boats: [],
            fruits: [],
        },
        experiece: 100,
    },
    {
        id: 16,
        name: "Protect Kaya! The Usopp Pirates' Great Efforts!",
        description:
            "Los amigos de Usopp (Onion, Pepper y Carrot) hacen todo lo posible por proteger a Kaya de los invasores piratas.",
        arc: "Syrup Village",
        achievements: {
            characters: [],
            items: [],
            swords: [],
            boats: [],
            fruits: [],
        },
        experiece: 100,
    },
    {
        id: 17,
        name: "Anger Explosion! Kuro vs. Luffy! How It Ends!",
        description:
            "La confrontación final entre Luffy y el Capitán Kuro determina el destino del pueblo y la seguridad de Kaya.",
        arc: "Syrup Village",
        achievements: {
            characters: ["Luffy(captain)", "Zoro(swordsman/first mate)", "Nami(navigator)", "Usopp(sniper)"],
            items: [],
            swords: [],
            boats: ["Going Merry"],
            fruits: [],
        },
        experiece: 100,
    },
    {
        id: 18,
        name: "You're the Weird One! Jango vs. Usopp!",
        description:
            "Enfrentamiento final entre Usopp y Jango. Usopp demuestra su valor y habilidad como tirador en una batalla decisiva.",
        arc: "Syrup Village",
        achievements: {
            characters: [],
            items: [],
            swords: [],
            boats: [],
            fruits: [],
        },
        experiece: 500,
    },
    {
        id: 19,
        name: "The Three-Sword Style's Past! Zoro and Kuina's Vow!",
        description:
            "Flashback del pasado de Zoro y su promesa con su amiga de la infancia Kuina, revelando por qué se convirtió en espadachín.",
        arc: "Baratie",
        achievements: {
            characters: ["Kuina", "Koshiro", "Johnny", "Yosaku"],
            items: [],
            swords: [],
            boats: [],
            fruits: [],
        },
        experience: 100,
    },
    {
        id: 20,
        name: "Famous Cook! Sanji of the Sea Restaurant!",
        description:
            "La tripulación llega al restaurante flotante Baratie donde conocen a Sanji, un cocinero con sueños de encontrar el All Blue.",
        arc: "Baratie",
        achievements: {
            characters: ["Sanji", "Zeff", "Patty", "Carne", "Fullbody"],
            items: [],
            swords: [],
            boats: ["Baratie"],
            fruits: [],
        },
        experience: 100,
    },
    {
        id: 21,
        name: "Unwelcome Customer! Sanji's Food and Ghin's Debt!",
        description:
            "Un pirata hambriento llamado Gin pone a prueba los principios del Baratie sobre alimentar a cualquier persona necesitada.",
        arc: "Baratie",
        achievements: {
            characters: ["Gin"],
            items: ["Tonfa weapons"],
            swords: [],
            boats: [],
            fruits: [],
        },
        experience: 100,
    },
    {
        id: 22,
        name: "The Strongest Pirate Fleet! Commodore Don Krieg!",
        description:
            "Don Krieg, líder de la flota pirata más grande del East Blue, llega al Baratie con intenciones de conquistar el restaurante.",
        arc: "Baratie",
        achievements: {
            characters: ["Don Krieg", "Pearl"],
            items: ["Wootz Steel armor", "MH5 gas", "Krieg's weapons"],
            swords: [],
            boats: ["Dreadnaught Sabre"],
            fruits: [],
        },
        experience: 100,
    },
    {
        id: 23,
        name: "Protect Baratie! The Great Pirate, Red Foot Zeff!",
        description:
            "Se revela el pasado de Zeff como el pirata 'Pie Rojo' y su conexión con Sanji a través de una tragedia en el mar.",
        arc: "Baratie",
        achievements: {
            characters: [],
            items: [],
            swords: [],
            boats: [],
            fruits: [],
        },
        experience: 100,
    },
    {
        id: 24,
        name: "Hawk-Eye Mihawk! The Great Swordsman vs. Pirate Hunter Zoro!",
        description:
            "Dracule Mihawk, el espadachín más fuerte del mundo, llega al Baratie buscando a Zoro para un duelo épico.",
        arc: "Baratie",
        achievements: {
            characters: ["Dracule Mihawk"],
            items: [],
            swords: ["Yoru"],
            boats: ["Mihawk's coffin boat"],
            fruits: [],
        },
        experience: 100,
    },
    {
        id: 25,
        name: "The Emerge of the Deadly Weapon! Zoro's New Special Attack!",
        description:
            "Zoro desata una nueva técnica especial en su batalla desesperada contra el espadachín más poderoso del mundo.",
        arc: "Baratie",
        achievements: {
            characters: [],
            items: [],
            swords: [],
            boats: [],
            fruits: [],
        },
        experience: 100,
    },
    {
        id: 26,
        name: "Zoro's Vow to His Captain! I'll Never Lose Again!",
        description:
            "Después de su aplastante derrota ante Mihawk, Zoro hace una promesa solemne a Luffy que definirá su futuro.",
        arc: "Baratie",
        achievements: {
            characters: ["Roronoa Zoro (scar)"],
            items: [],
            swords: ["Two new katana for Zoro"],
            boats: [],
            fruits: [],
        },
        experience: 100,
    },
    {
        id: 27,
        name: "Cool-headed, Cold-hearted Demon! Pirate Fleet Chief Commander Ghin!",
        description:
            "Gin se debate entre su lealtad a Don Krieg y su deuda de gratitud hacia Sanji, creando un conflicto interno.",
        arc: "Baratie",
        achievements: {
            characters: [],
            items: [],
            swords: [],
            boats: [],
            fruits: [],
        },
        experience: 100,
    },
    {
        id: 28,
        name: "I Won't Die! Fierce Battle, Luffy vs. Krieg!",
        description:
            "Comienza la batalla decisiva entre Luffy y Don Krieg mientras Gin se sacrifica para salvar a Luffy del gas venenoso.",
        arc: "Baratie",
        achievements: {
            characters: [],
            items: ["Battle Spear", "Daisenso", "Gas mask"],
            swords: [],
            boats: [],
            fruits: [],
        },
        experience: 100,
    },
    {
        id: 29,
        name: "The Conclusion of the Deadly Battle! A Spear of Blind Determination!",
        description:
            "La batalla final entre Luffy y Don Krieg llega a su clímax. Con el poder de su determinación y su Gomu Gomu no Bazooka, Luffy derrota al almirante de la gran flota pirata.",
        arc: "Baratie",
        achievements: {
            characters: [],
            items: [],
            fruits: [],
            swords: [],
            boats: [],
        },
        experience: 100,
    },
    {
        id: 30,
        name: "Set Sail! The Seafaring Cook Sets off With Luffy!",
        description:
            "Después de la batalla, Sanji decide unirse a la tripulación de Luffy para cumplir su sueño de encontrar el All Blue. Se despide del Baratie y de Zeff con una emotiva partida.",
        arc: "Baratie",
        achievements: {
            characters: ["Sanji(cook)"],
            items: [],
            fruits: [],
            swords: [],
            boats: [],
        },
        experience: 500,
    },
    {
        id: 31,
        name: "The Worst Man in the Eastern Seas! Fishman Pirate Arlong!",
        description:
            "La tripulación descubre que Nami se ha ido llevándose el Going Merry. Johnny y Yosaku llegan con noticias sobre Nami y los piratas hombres-pez liderados por el temible Arlong.",
        arc: "Arlong Park",
        achievements: {
            characters: ["Arlong"],
            items: [],
            fruits: [],
            swords: [],
            boats: [],
        },
        experience: 100,
    },
    {
        id: 32,
        name: "Witch of Cocoyashi Village! Arlong's Female Leader!",
        description:
            "Zoro y Usopp siguen a Nami hasta su aldea natal. Descubren que ella trabaja para los piratas hombres-pez y es conocida como la 'bruja' que dibuja mapas para Arlong.",
        arc: "Arlong Park",
        achievements: {
            characters: ["Bell-mère", "Genzo", "Nojiko"],
            items: ["Mikan (tangerines)"],
            fruits: [],
            swords: [],
            boats: [],
        },
        experience: 100,
    },
    {
        id: 33,
        name: "Usopp Dead?! When is Luffy Going to Make Landfall?!",
        description:
            "Usopp es derrotado por Arlong y sus hombres. Mientras tanto, Luffy y Sanji navegan hacia Cocoyashi con Yosaku como guía, sin saber la verdadera situación.",
        arc: "Arlong Park",
        achievements: {
            characters: ["Kuroobi", "Chu"],
            items: [],
            fruits: [],
            swords: [],
            boats: [],
        },
        experience: 100,
    },
    {
        id: 34,
        name: "Everyone's Gathered! Usopp Speaks the Truth About Nami!",
        description:
            "Usopp revela a Luffy y Sanji la trágica historia de Nami y por qué trabaja para Arlong. La tripulación se reúne para conocer la verdad sobre su navegante.",
        arc: "Arlong Park",
        achievements: {
            characters: [],
            items: [],
            fruits: [],
            swords: [],
            boats: [],
        },
        experience: 100,
    },
    {
        id: 35,
        name: "Untold Past! Female Warrior Bellemere!",
        description:
            "Flashback que revela el pasado de Nami: cómo Bell-mère, una marine retirada, la encontró como bebé y la crió junto a Nojiko en Cocoyashi Village.",
        arc: "Arlong Park",
        achievements: {
            characters: [],
            items: [],
            fruits: [],
            swords: [],
            boats: [],
        },
        experience: 100,
    },
    {
        id: 36,
        name: "Survive! Mother Bellemere and Nami's Bond!",
        description:
            "Continúa el flashback mostrando cómo Arlong llegó al pueblo y asesinó a Bell-mère. Nami acepta trabajar para él para salvar a los aldeanos y comprar su libertad.",
        arc: "Arlong Park",
        achievements: {
            characters: [],
            items: ["100,000,000 berries (Nami's goal)"],
            fruits: [],
            swords: [],
            boats: [],
        },
        experience: 100,
    },
    {
        id: 37,
        name: "Luffy Rises! Result of the Broken Promise!",
        description:
            "Arlong rompe su promesa con Nami usando al corrupto marine Nezumi. Cuando Nami finalmente pide ayuda, Luffy le da su sombrero de paja y promete derrotar a Arlong.",
        arc: "Arlong Park",
        achievements: {
            characters: ["Nezumi"],
            items: [],
            fruits: [],
            swords: [],
            boats: [],
        },
        experience: 100,
    },
    {
        id: 38,
        name: "Luffy in Big Trouble! Fishmen vs. the Luffy Pirates!",
        description:
            "Comienza la batalla en Arlong Park. Los Sombreros de Paja enfrentan a los piratas hombres-pez mientras Luffy queda atrapado bajo el agua por la piscina del parque.",
        arc: "Arlong Park",
        achievements: {
            characters: ["Hatchan"],
            items: [],
            fruits: [],
            swords: [],
            boats: [],
        },
        experience: 100,
    },
    {
        id: 39,
        name: "Luffy Submerged! Zoro vs. Hatchan the Octopus!",
        description:
            "Zoro se enfrenta al espadachín pulpo Hatchan en un duelo de seis espadas contra tres. Mientras tanto, Luffy permanece atrapado bajo el agua.",
        arc: "Arlong Park",
        achievements: {
            characters: [],
            items: [],
            fruits: [],
            swords: ["Six swords (Hatchan's weapons)"],
            boats: [],
        },
        experience: 100,
    },
    {
        id: 40,
        name: "Proud Warriors! Sanji and Usopp's Fierce Battles!",
        description:
            "Sanji lucha contra Kuroobi en el agua, demostrando su habilidad de combate acuático, mientras Usopp se enfrenta al karateka Chu con su honda y su ingenio.",
        arc: "Arlong Park",
        achievements: {
            characters: [],
            items: ["Tabasco Star"],
            fruits: [],
            swords: [],
            boats: [],
        },
        experience: 100,
    },
    {
        id: 41,
        name: "Luffy at Full Power! Nami's Determination and the Straw Hat!",
        description:
            "Genzo y Nojiko salvan a Luffy del agua. Nami finalmente se enfrenta a su pasado y declara que quiere seguir viviendo, inspirando a Luffy para la batalla final.",
        arc: "Arlong Park",
        achievements: {
            characters: [],
            items: [],
            fruits: [],
            swords: [],
            boats: [],
        },
        experience: 100,
    },
    {
        id: 42,
        name: "Explosion! Fishman Arlong's Fierce Assault From the Sea!",
        description:
            "Arlong demuestra su verdadero poder como hombre-pez, mostrando su fuerza sobrehumana y sus afilados dientes de tiburón en la batalla contra Luffy.",
        arc: "Arlong Park",
        achievements: {
            characters: [],
            items: ["Shark Saw (Kiribachi)", "Arlong's teeth"],
            fruits: [],
            swords: [],
            boats: [],
        },
        experience: 100,
    },
    {
        id: 43,
        name: "End of the Fishman Empire! Nami's My Friend!",
        description:
            "Luffy destruye la habitación donde Nami fue forzada a dibujar mapas, proclamando que ella es su nakama. Con su Gomu Gomu no Ono, derrota a Arlong y destruye Arlong Park.",
        arc: "Arlong Park",
        achievements: {
            characters: [],
            items: ["Arlong Park (destroyed)"],
            fruits: [],
            swords: [],
            boats: [],
        },
        experience: 100,
    },
    {
        id: 44,
        name: "Departure! Farewell to the Brave Cocoyashi Village!",
        description:
            "Los aldeanos celebran su libertad. Nami se despide oficialmente de su pueblo natal y de Nojiko para unirse definitivamente a los Sombreros de Paja como su navegante.",
        arc: "Arlong Park",
        achievements: {
            characters: ["Nami (navigator - official)"],
            items: ["Nami's tangerine trees (on the ship)"],
            fruits: [],
            swords: [],
            boats: [],
        },
        experience: 100,
    },
    {
        id: 45,
        name: "Bounty! Straw Hat Luffy Becomes Known to the World!",
        description:
            "El marine corrupto Nezumi informa sobre Luffy a la Marina. Se emite la primera recompensa de Luffy: 30,000,000 de berries, convirtiéndolo oficialmente en un pirata buscado.",
        arc: "Arlong Park",
        achievements: {
            characters: [],
            items: ["Luffy's first wanted poster - 30,000,000 berries"],
            fruits: [],
            swords: [],
            boats: [],
        },
        experience: 500,
    },
    {
        id: 46,
        name: "Chase Straw Hat! Little Buggy's Big Adventure!",
        description:
            "Episodio especial que sigue las aventuras de Buggy después de su derrota. Buggy busca venganza contra Luffy mientras vive diversas desventuras.",
        arc: "Buggy's Adventure",
        achievements: {
            characters: [],
            items: [],
            fruits: [],
            swords: [],
            boats: [],
        },
        experience: 100,
    },
    {
        id: 47,
        name: "You've Been Waiting For It! The Return of Captain Buggy!",
        description:
            "Continuación de las aventuras de Buggy. El payaso pirata continúa su búsqueda de venganza mientras intenta reconstruir su tripulación.",
        arc: "Buggy's Adventure",
        achievements: {
            characters: [],
            items: [],
            fruits: [],
            swords: [],
            boats: [],
        },
        experience: 100,
    },
    {
        id: 48,
        name: "The Town of the Beginning and the End! Landfall at Logue Town!",
        description:
            "Los Sombreros de Paja llegan a Logue Town, el lugar donde nació y murió el Rey Pirata Gol D. Roger. Es su última parada antes del Grand Line.",
        arc: "Logue Town",
        achievements: {
            characters: ["Smoker", "Tashigi"],
            items: ["Gol D. Roger's execution platform"],
            fruits: ["Moku Moku no Mi"],
            swords: ["Shigure"],
            boats: [],
        },
        experience: 100,
    },
    {
        id: 49,
        name: "Kitetsu III and Yubashiri! Zoro's New Swords and the Woman Sergeant Major!",
        description:
            "Zoro busca nuevas katanas en Logue Town y conoce a Tashigi, quien se parece mucho a su amiga fallecida Kuina. Obtiene dos espadas: Sandai Kitetsu y Yubashiri.",
        arc: "Logue Town",
        achievements: {
            characters: ["Ipponmatsu (sword shop owner)"],
            items: [],
            fruits: [],
            swords: ["Sandai Kitetsu", "Yubashiri"],
            boats: [],
        },
        experience: 100,
    },
    {
        id: 50,
        name: "Usopp vs. Daddy the Father! Showdown at High Noon!",
        description:
            "Usopp se enfrenta a Daddy Masterson, un famoso francotirador, en un duelo al mediodía. Demuestra sus habilidades como tirador en una intensa competencia.",
        arc: "Logue Town",
        achievements: {
            characters: ["Daddy Masterson", "Carol (his daughter)"],
            items: ["Daddy's rifle"],
            fruits: [],
            swords: [],
            boats: [],
        },
        experience: 100,
    },
    {
        id: 51,
        name: "Fiery Cooking Battle? Sanji vs. the Beautiful Chef!",
        description:
            "Sanji participa en una competencia culinaria contra Carmen, una hermosa chef. La competencia se convierte en una batalla de habilidades gastronómicas.",
        arc: "Logue Town",
        achievements: {
            characters: ["Carmen (chef)"],
            items: ["Elephant Tuna"],
            fruits: [],
            swords: [],
            boats: [],
        },
        experience: 100,
    },
    {
        id: 52,
        name: "Buggy's Revenge! The Man Who Smiles On the Execution Platform!",
        description:
            "Buggy intenta ejecutar públicamente a Luffy en la misma plataforma donde murió Roger. Una tormenta misteriosa salva a Luffy, recordando la ejecución del Rey Pirata.",
        arc: "Logue Town",
        achievements: {
            characters: ["Alvida (slim)", "Dragon (silhouette)"],
            items: [],
            fruits: ["Sube Sube no Mi"],
            swords: [],
            boats: [],
        },
        experience: 100,
    },
    {
        id: 53,
        name: "The Legend Has Started! Head for the Grand Line!",
        description:
            "Los Sombreros de Paja escapan de Logue Town mientras Smoker los persigue. Con determinación renovada, se dirigen hacia el Grand Line para cumplir sus sueños.",
        arc: "Logue Town",
        achievements: {
            characters: [],
            items: ["Jitte (Smoker's weapon)"],
            fruits: [],
            swords: [],
            boats: [],
        },
        experience: 500,
    },
    {
        id: 54,
        name: "Precursor to a New Adventure! Apis, a Mysterious Girl!",
        description:
            "Los Sombreros de Paja rescatan a una niña llamada Apis que tiene poderes misteriosos. Ella puede hablar con los animales y huye de la Marina.",
        arc: "Warship Island",
        achievements: {
            characters: ["Apis", "Eric (Sickle-Sickle user)"],
            items: [],
            fruits: ["Hiso Hiso no Mi", "Kama Kama no Mi"],
            swords: [],
            boats: [],
        },
        experience: 100,
    },
    {
        id: 55,
        name: "Miraculous Creature! Apis's Secret and the Legendary Island!",
        description:
            "Apis revela que puede comunicarse con un dragón milenario llamado Ryuji. Los piratas y la Marina buscan la isla legendaria donde viven los dragones.",
        arc: "Warship Island",
        achievements: {
            characters: ["Ryuji (Sennenryu)", "Bokuden", "Ryu"],
            items: [],
            fruits: [],
            swords: [],
            boats: [],
        },
        experience: 100,
    },
    {
        id: 56,
        name: "Eric Attacks! Great Escape from Warship Island!",
        description:
            "Eric ataca Warship Island buscando la Dragonite. Los Sombreros de Paja ayudan a los aldeanos a evacuar mientras protegen a Apis y al dragón anciano.",
        arc: "Warship Island",
        achievements: {
            characters: ["Nelson Royale"],
            items: ["Dragonite"],
            fruits: [],
            swords: [],
            boats: ["Nelson's warships"],
        },
        experience: 100,
    },
    {
        id: 57,
        name: "Lone Island in a Distant Sea! The Legendary Lost Island!",
        description:
            "La búsqueda de Lost Island continúa mientras el grupo navega por mares peligrosos. Ryuji los guía hacia su hogar ancestral donde pueden vivir los dragones milenarios.",
        arc: "Warship Island",
        achievements: {
            characters: [],
            items: [],
            fruits: [],
            swords: [],
            boats: [],
        },
        experience: 100,
    },
    {
        id: 58,
        name: "Duel in the Ruins! Tense Zoro vs. Eric!",
        description:
            "Zoro se enfrenta a Eric en las ruinas de Lost Island. Eric usa su poder de las hoces de viento contra las técnicas de espada de Zoro en una batalla intensa.",
        arc: "Warship Island",
        achievements: {
            characters: [],
            items: ["Wind scythes"],
            fruits: [],
            swords: [],
            boats: [],
        },
        experience: 100,
    },
    {
        id: 59,
        name: "Luffy, Completely Surrounded! Admiral Nelson's Secret Strategy!",
        description:
            "Luffy cae en una trampa de Nelson y queda rodeado por la flota de la Marina. El almirante Nelson revela su plan para capturar tanto a los piratas como al dragón.",
        arc: "Warship Island",
        achievements: {
            characters: [],
            items: ["Naval cannons"],
            fruits: [],
            swords: [],
            boats: [],
        },
        experience: 100,
    },
    {
        id: 60,
        name: "Those Who Soar in the Open Sky! Revival of the 1000 Year Legend!",
        description:
            "Ryuji encuentra a sus compañeros dragones en Lost Island y recupera su vitalidad. Los dragones milenarios vuelan juntos una vez más, reviviendo la antigua leyenda.",
        arc: "Warship Island",
        achievements: {
            characters: ["Other Sennenryu dragons"],
            items: [],
            fruits: [],
            swords: [],
            boats: [],
        },
        experience: 100,
    },
    {
        id: 61,
        name: "An Angry Showdown! Cross the Red Line!",
        description:
            "Episodio final de la saga East Blue. Los Sombreros de Paja se despiden de Apis y cruzan la Red Line para entrar al Grand Line, marcando el inicio de su gran aventura.",
        arc: "Warship Island",
        achievements: {
            characters: [],
            items: ["Red Line"],
            fruits: [],
            swords: [],
            boats: [],
        },
        experience: 500,
    },
];
