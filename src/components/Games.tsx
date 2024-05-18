import Card from './Card';
import React from "react";

interface IGame {
    id: number;
    name: string;
    info: string;
    image: string;
    rating: string;
}

interface IGamesProps {
    games: IGame[];
    removeGame: (id: number) => void;
}

const Games: React.FC<IGamesProps> = ({games, removeGame}) => {
    return (
        <div className='container'>
            <div>
                <h2 className='title'>Games you should play!</h2>
            </div>
            <div className='cards'>
                {games.map((game) => (
                    <Card key={game.id} {...game} removeGame={removeGame} />
                ))}
            </div>
        </div>
    );
};

export default Games;