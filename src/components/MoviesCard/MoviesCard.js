import React, { useState, useEffect }from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import {calculateTime} from "../../utils/functionForFilms";

    const MoviesCard = ({movieCard, onSaveMovie, onRemoveMovie, isLiked}) => {
        const location = useLocation();
        const isSavedMoviesPage = location.pathname === '/saved-movies';

        const handleSaveMovies = () => {
            onSaveMovie(movieCard);

        };
        const handleRemoveMovies = () => {
            onRemoveMovie(movieCard)
        };

       /* console.log(isLiked)*/

    return (
        <article className='movie'>
            <div className='movie__header'>
                <h2 className='movie__title'>{movieCard.nameRU}</h2>
                <p className='movie__time'>{calculateTime(movieCard.duration)}</p>
            </div>
            <a className='movie__link' target='_blank' href={movieCard.trailerLink}>
                <img className='movie__img'

                     src={isSavedMoviesPage ? movieCard.image : `https://api.nomoreparties.co/${movieCard.image.url}`}
                     alt={`Фильм под названием: ${movieCard.nameRU}`}
                />
            </a>
            {isSavedMoviesPage ? (
                <button className='movie__btn-close' type='button' onClick={handleRemoveMovies} ></button>
            ) : (
                <>
                    {isLiked ? (
                        <button className='movie__btn-saved' type='button' onClick={handleRemoveMovies}></button>
                    ) : (
                        <button className='movie__btn' type='button' onClick={handleSaveMovies}>
                            Сохранить
                        </button>
                    )}
                </>
            )}
        </article>
    )
};

export default MoviesCard;





