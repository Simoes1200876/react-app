import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './css/App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";

const API_KEY_TMDB = '9d26de646d6e9bf091000b1318e9ffa6';
const API_URL_TMDB = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_KEY_TMDB;

const getPosterUrl = (path) => `https://image.tmdb.org/t/p/w200${path}`;

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isOnInitialPage, setIsOnInitialPage] = useState(true);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL_TMDB}&query=${title}`);
        const data = await response.json();

        console.log(title);
        console.log(data);
        setIsOnInitialPage(false);
        setMovies(data.results);
    };

    const fetchPopularMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=` + API_KEY_TMDB);
        const data = await response.json();
        setMovies(data.results);
    };

    const keyPress = (event) => {
        if (event.key === 'Enter') {
            searchMovies(searchTerm);
        }
    };

    useEffect(() => {
        fetchPopularMovies();
    }, []);

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={
                    <div className="app">
                        <div className="search">
                            <input
                                placeholder="Search for movies"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyDown={keyPress}
                            />
                            <img
                                src={SearchIcon}
                                alt="search"
                                onClick={() => searchMovies(searchTerm)}
                            />
                        </div>

                        {isOnInitialPage ? (
                            <>
                                <div className="fav_bar">
                                    <span className="text">Most Popular</span>
                                </div>
                                {movies?.length > 0 ? (
                                    <div className="container">
                                        {movies.map((movie) => (
                                            <MovieCard key={movie.id} movie={{
                                                Title: movie.title,
                                                Year: movie.release_date,
                                                Poster: getPosterUrl(movie.poster_path),
                                                Rating: movie.vote_average,
                                            }} />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="empty">
                                        <h2>No movies found</h2>
                                    </div>
                                )}
                            </>
                        ) : (
                            <>
                                {movies?.length > 0 ? (
                                    <div className="container">
                                        {movies.map((movie) => (
                                            <MovieCard key={movie.id} movie={{
                                                Title: movie.title,
                                                Year: movie.release_date,
                                                Poster: getPosterUrl(movie.poster_path),
                                                Rating: movie.vote_average,
                                            }} />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="empty">
                                        <h2>No movies found</h2>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                } />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
};

export default App;
