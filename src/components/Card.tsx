import React, { useState } from "react";

interface ICardProps {
    id: number;
    image: string;
    info: string;
    rating: string;
    name: string;
    removeGame: (id: number) => void;
}

const Card: React.FC<ICardProps> = ({id, image, info, rating, name, removeGame}) => {
    const [readmore, setReadmore] = useState<boolean>(false);

    const description = readmore ? info : `${info.substring(0, 200)}....`;

    function readmoreHandler(): void {
        setReadmore(!readmore);
    }

    return (
        <div className="card">
            <img src={image} className="image" alt="" />
            <div className="game-info">
                <div className="game-details">

                    <h4 className="game-name">{name}</h4>
                    <h4 className="game-rating">{rating}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show Less` : `Read More`}
                    </span>
                </div>
            </div>
            <button className="btn-red" onClick={() => removeGame(id)}>
                Not Interested
            </button>
        </div>
    );
};

export default Card;