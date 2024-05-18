import { useState } from "react";
import data from "./data";
import Games from "./components/Games.tsx";

interface IGame {
    id: number;
    name: string;
    info: string;
    image: string;
    rating: string;
}

const App = () => {

    const [games, setGames] = useState<IGame[]>(data);

    function removeGame(id: number): void {
        const newGames = games.filter(tour => tour.id !== id);
        setGames(newGames);
    }

    if (games.length === 0) {
        return (
            <div className="refresh">
                <h2>No games Left</h2>
                <button className="btn-white" onClick={() => setGames(data)}>
                    Refresh
                </button>
            </div>
        );
    }

    return (
        <div className="App">
            <Games games={games} removeGame={removeGame}></Games>
        </div>
    )
};

export default App;