import React, { useState, useEffect } from 'react';
import Movie from './Movie';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7726b1df1866c6f7df6f387a7d46acb7&page=1";


const SEARCH_API = "https:/api.themoviedb.org/3/search/movie?&api_key=7726b1df1866c6f7df6f387a7d46acb7&query="


function HomePage() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const [darkMode, setDarkMode] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        getMovies(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7726b1df1866c6f7df6f387a7d46acb7&page=${currentPage}`);
    }, [currentPage]);

    const getMovies = (API) => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMovies(data.results);
            });
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (search) {
            getMovies(SEARCH_API + search);

            setSearch('');
        }

    }

    const handleOnChange = (e) => {
        setSearch(e.target.value);
    }

    const previousPage = () => {
        if (currentPage === 1) {
            return;
        }
        setCurrentPage(currentPage - 1);
    }

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    }


    return (
        <>
            <header>
                <div className="dark-mode">
                    <div className="theme">
                        <span style={{ color: darkMode ? 'grey' : 'yellow' }}>☀️</span>
                        <div className="switch-checkbox">
                            <label className="switch">
                                <input type="checkbox"
                                    onChange={() => setDarkMode(!darkMode)}
                                />
                                <span className="slider round"> </span>
                            </label>

                        </div>
                        <span>🌑</span>
                    </div>
                </div>
                <form onSubmit={handleOnSubmit}>
                    <input
                        className="search"
                        type="search"
                        placeholder="Search..."
                        value={search}
                        onChange={handleOnChange}
                    />
                </form>

            </header>
            <div className={darkMode ? 'dark-mode movie-container' : 'light-mode movie-container'}>

                {movies.length > 0 && movies.map((movie) => (
                    <Movie key={movie.id} {...movie} />
                    
                ))}
            </div>

            <footer>
                <div className="btn previous" href="/" onClick={previousPage}>Previous</div>
                <div className="btn" href="/" onClick={nextPage}>Next</div>
            </footer>


        </>
    );

}

export default HomePage;

