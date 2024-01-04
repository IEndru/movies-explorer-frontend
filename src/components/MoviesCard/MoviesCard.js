import './MoviesCard.css';
import film from '../../images/Film.png';

const MoviesCard = () => {
    return (
        <article className='movie'>
            <div className='movie__header'>
                <h2 className='movie__title'>В погоне за Бенкси</h2>
                <p className='movie__time'>0ч 42м</p>
            </div>
            <a className='movie__link' target='_blank'>
                <img className='movie__img' src={film} alt="Фильм"/>
            </a>
            <button className='movie__btn' type='button'>Сохранить</button>
            {/*<button className='movie__btn_saved' type='button'></button>*/}
        </article>
    )
};

export default MoviesCard;
