import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = () => {
    const location = useLocation();
    const isSavedMoviesPage = location.pathname === '/saved-movies';
    return (
        <div className='movies-list'>
            <div className='movies-list__wrapper'>
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </div>
            {isSavedMoviesPage ? (<div className='movies-list__stub'/>) : (
                <button className='movies-list__btn' type='button'>
                    Ещё
                </button>)}
        </div>
    )
};

export default MoviesCardList;
