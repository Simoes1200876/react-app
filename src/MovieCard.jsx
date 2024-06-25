import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>

            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
            </div>

            <div>
                <h3>{movie.Title}</h3>
                <span>{movie.Rating}</span>
            </div>
        </div>
    );
}

export default MovieCard;