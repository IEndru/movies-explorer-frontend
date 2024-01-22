import React, { useState }from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import {calculateTime} from "../../utils/functionForFilms";

const MoviesCard = ({movie}) => {
    const location = useLocation();
    const isSavedMoviesPage = location.pathname === '/saved-movies';
    const [isSaved, setIsSaved] = useState(false);
    const handleSaveClick = () => {setIsSaved(prevIsSaved =>!prevIsSaved)};

    return (
        <article className='movie'>
            <div className='movie__header'>
                <h2 className='movie__title'>{movie.nameRU}</h2>
                <p className='movie__time'>{calculateTime(movie.duration)}</p>
            </div>
            <a className='movie__link' target='_blank' href={movie.trailerLink}>
                <img className='movie__img' src={`https://api.nomoreparties.co/${movie.image.url}`} alt={`Фильм под названием: ${movie.nameRU}`}/>
            </a>
            {isSavedMoviesPage ? (
                <button className='movie__btn-close' type='button'></button>
            ) : (
                <>
                    {isSaved ? (
                        <button className='movie__btn-saved' type='button' onClick={handleSaveClick}></button>
                    ) : (
                        <button className='movie__btn' type='button' onClick={handleSaveClick}>
                            Сохранить
                        </button>
                    )}
                </>
            )}
        </article>
    )
};

export default MoviesCard;
