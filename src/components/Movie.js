import React from 'react';
import { Link } from 'react-router-dom';

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
    if (vote >= 8.5) {
        return "green";
    } else if (vote >= 6.5) {
        return "orange";
    } else {
        return "red"
    }
}

function Movie({ title, poster_path, overview, vote_average, id }) {
    console.log()
    return (
        <div className="movie">
            <img src={poster_path ?
                IMAGE_API + poster_path : 'https://images.unsplash.com/photo-160881680858-30d872d5b530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'} alt={title} />
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>

            <div className="movie-over">
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}
export default Movie;