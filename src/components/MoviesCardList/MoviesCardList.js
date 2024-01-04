import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = () => {
    return (
        <section className='movies-list'>
            <div className='movies-list__wrapper'>
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </div>
            <button className='movies-list__btn' type='button'>
                Ещё
            </button>
        </section>
    )
};

export default MoviesCardList;
