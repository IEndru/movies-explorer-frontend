import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import {getSavedFilms} from "../../utils/functionForFilms";

const MoviesCardList = ({movies, moviesSave, onSaveMovie, onRemoveMovie, isSavedMovies}) => {
    const location = useLocation();
    const isSavedMoviesPage = location.pathname === '/saved-movies';



console.log(moviesSave)


    // ф-ия создания обычных фильмов
    function showAllMovies() {
        return movies.map((movie) => {
            const likedMovie = getSavedFilms(isSavedMovies, movie);
            const isIdlikedMovie = likedMovie ? likedMovie._id : null;
            return (
                <MoviesCard
                    key={movie.id}
                    movieCard={{ ...movie, _id: isIdlikedMovie }}
                    onSaveMovie={onSaveMovie}
                    onRemoveMovie={onRemoveMovie}
                    isLiked={isIdlikedMovie ? true : false}
                />)
        })
    }

    // ф-ия создания сохраненных фильмов
    function showSaveMovies() {
        return moviesSave.map((movie) => {
            return (
                <MoviesCard
                    key={movie._id}
                    movieCard={ movie }
                    onSaveMovie={onSaveMovie}
                    onRemoveMovie={onRemoveMovie}
                />)
        })
    }


    return (
        <div className='movies-list'>
            <div className='movies-list__wrapper'>
                { isSavedMoviesPage ? showSaveMovies() : showAllMovies()}
            </div>
            {isSavedMoviesPage ? (<div className='movies-list__stub'/>) : (
                <button className='movies-list__btn' type='button'>
                    Ещё
                </button>)}
        </div>
    )
};

export default MoviesCardList;





