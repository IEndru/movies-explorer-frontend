import React, { useState }from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import film from '../../images/Film.png';

const MoviesCard = () => {
    const location = useLocation();
    const isSavedMoviesPage = location.pathname === '/saved-movies';
    const [isSaved, setIsSaved] = useState(false);
    const handleSaveClick = () => {setIsSaved(prevIsSaved =>!prevIsSaved)};

    return (
        <article className='movie'>
            <div className='movie__header'>
                <h2 className='movie__title'>В погоне за Бенкси</h2>
                <p className='movie__time'>0ч 42м</p>
            </div>
            <a className='movie__link' target='_blank' href="https://www.youtube.com/watch?v=D5fBhbEJxEU">
                <img className='movie__img' src={film} alt="Фильм"/>
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
