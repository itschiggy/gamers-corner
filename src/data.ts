interface IGame {
    id: number;
    name: string;
    info: string;
    image: string;
    rating: string;
}

const data: IGame[] = [
    {
        id: 1,
        name: "Sekiro: Shadows Die Twice",
        info: "Sekiro: Shadows Die Twice is a challenging action-adventure game from FromSoftware... Players take on the role of a shinobi (ninja) who is tasked with protecting a young lord. The game is known for its difficult combat system, which emphasizes parrying and deflecting enemy attacks.",
        image: "https://upload.wikimedia.org/wikipedia/en/6/6e/Sekiro_art.jpg",
        rating: "Rating: 89 ",
    },
    {
        id: 2,
        name: "Grand Theft Auto V",
        info: "Grand Theft Auto V is an open-world action-adventure game developed by Rockstar Games... Players can control three different characters, each with their own story and motivations. GTA V is known for its open world, which is filled with things to do...",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
        rating: "Rating: 96 ",
    },
    {
        id: 3,
        name: "Elden Ring",
        info: "Elden Ring is an action role-playing game developed by FromSoftware... Players take on the role of a Tarnished, an exile who has returned to the Lands Between to claim the Elden Ring and become Elden Lord.",
        image: "https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg",
        rating: "Rating: 94 ",
    },
    {
        id: 4,
        name: "God of War",
        info: "God of War is an action-adventure game developed by Santa Monica Studio... The game follows Kratos, a Spartan warrior who is now a father to a young son named Atreus. The two travel to the Norse realm of Midgard...",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
        rating: "Rating: 94 ",
    },
    {
        id: 5,
        name: "Hogwarts Legacy",
        info: "Hogwarts Legacy is an action role-playing game developed by Avalanche Software... The game is set in the Wizarding World created by J. K. Rowling and is set in the 1800s... Players take on the role of a student at Hogwarts School of Witchcraft and Wizardry...",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Hogwarts_Legacy_promotional_photo_horizontal.jpg/440px-Hogwarts_Legacy_promotional_photo_horizontal.jpg",
        rating: "Rating: 84 ",
    },
    {
        id: 6,
        name: "Sleeping Dogs",
        info: "Sleeping Dogs is an open-world action-adventure game developed by Square Enix Hong Kong... The game is set in Hong Kong, where players take on the role of Wei Shen, an undercover police officer who infiltrates the Triad gangs...",
        image: "https://upload.wikimedia.org/wikipedia/en/9/90/Sleeping_Dogs_-_Square_Enix_video_game_cover.jpg",
        rating: "Rating: 80 ",
    },
    {
        id: 7,
        name: "The Legend of Zelda: Breath of the Wild",
        info: "The Legend of Zelda: Breath of the Wild is an open-world action-adventure game developed and published by Nintendo for the Nintendo Switch console... The game features a variety of weapons, items, and puzzles to discover...",
        image: "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
        rating: "Rating: 97 ",
    },
    {
        id: 8,
        name: "A Plague Tale: Innocence",
        info: "A Plague Tale: Innocence is an action-adventure game developed by Asobo Studio... The game is set in medieval France during the Hundred Years' War and the Black Death. Players take on the role of Amicia de Rune, a young noblewoman who must protect her younger brother Hugo...",
        image: "https://upload.wikimedia.org/wikipedia/en/1/1d/A_Plague_Tale_cover_art.jpg",
        rating: "Rating: 81 ",
    },
];

export default data;