import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import {getSavedFilms} from "../../utils/functionForFilms";
import { Tablet,
    QuantityMoviesMin,
    AddMoviesMin,
    Netbook,
    QuantityMoviesMiddle,
    AddMoviesMiddle,
    QuantityMoviesMax,
    AddMoviesMax} from '../../utils/constans';

const MoviesCardList = ({movies, moviesSave, onSaveMovie, onRemoveMovie, isSavedMovies,error}) => {

    const [visibleMoviesCount, setVisibleMoviesCount] = useState(0);
    const [moviesIncrementStep, setMoviesIncrementStep] = useState(0);
    const location = useLocation();
    const isSavedMoviesPage = location.pathname === '/saved-movies';

    const showResultMovies = () => {
        setVisibleMoviesCount(visibleMoviesCount + moviesIncrementStep);
    };

    // сетка фильмов на разной ширине экрана
    const getVariablesMovies = () => {
        const width = window.innerWidth;
        if (movies && movies.length > 0) {
        if (width <= Tablet) {
            setVisibleMoviesCount(QuantityMoviesMin);
            setMoviesIncrementStep(AddMoviesMin);
        } else if (width <= Netbook) {
            setVisibleMoviesCount(QuantityMoviesMiddle);
            setMoviesIncrementStep(AddMoviesMiddle);
        } else {
            setVisibleMoviesCount(QuantityMoviesMax);
            setMoviesIncrementStep(AddMoviesMax);
            }
        }
    };

    useEffect(() => {
        getVariablesMovies();
        window.addEventListener('resize', () => {
            setTimeout(() => {
                getVariablesMovies();
            }, 1000);
        });
        return () => {
            window.removeEventListener('resize', getVariablesMovies);
        };
    }, [movies]);

    // ф-ия создания обычных фильмов
    function showAllMovies() {
        return movies.map((movie, index) => {
            const likedMovie = getSavedFilms(isSavedMovies, movie);
            const isIdlikedMovie = likedMovie ? likedMovie._id : null;
            if (index < visibleMoviesCount) {
            return (
                <MoviesCard
                    key={movie.id}
                    movieCard={{ ...movie, _id: isIdlikedMovie }}
                    onSaveMovie={onSaveMovie}
                    onRemoveMovie={onRemoveMovie}
                    isLiked={isIdlikedMovie ? true : false}
                />)}
            return null;
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
            {error ? (
                <span className='movies-list-err'>{error}</span>
            ) : (
                <>
                    <div className='movies-list__wrapper'>
                        {isSavedMoviesPage ? showSaveMovies() : showAllMovies()}
                    </div>
                    {!isSavedMoviesPage && movies.length > visibleMoviesCount && (
                        <button className='movies-list__btn' type='button' onClick={showResultMovies}>
                            Ещё
                        </button>
                    )}
                </>
            )}
        </div>
    )
};

export default MoviesCardList;





