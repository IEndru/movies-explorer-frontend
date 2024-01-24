import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {useState, useEffect} from "react";
import {filterMovies, filterShortDuration} from "../../utils/functionForFilms";
import { useLocation } from 'react-router-dom';

function SavedMovies ({loggedIn, isSavedMovies, onRemoveMovie}){
    const [shortMovies, setShortMovies] = useState(false);//флаг от чекбокса on off
    const [savedMovies, setSavedMovies] = useState(isSavedMovies);//сохраненные фильмы пользователя
    const [filteredMovies, setFilteredMovies] = useState(savedMovies);
    const [keyword, setKeyword] = useState('');
    const location = useLocation();

    const handleSearchSubmit = (searchValue) => {
        const moviesList = filterMovies(isSavedMovies, searchValue, shortMovies);
        setKeyword(searchValue);
        setSavedMovies(moviesList);
        setFilteredMovies(moviesList);
    }

    const handleShortFilms = () => {
        if (!shortMovies) {
            setShortMovies(true);
            localStorage.setItem('shortSavedMovies', true);
            setSavedMovies( filterShortDuration(filteredMovies));
        } else {
            setShortMovies(false);
            localStorage.setItem('shortSavedMovies', false);
            setSavedMovies(filteredMovies);
        }
    }

    useEffect(() => {
        if (localStorage.getItem('shortSavedMovies') === 'true') {
            setShortMovies(true);
            setSavedMovies( filterShortDuration(isSavedMovies));
        } else {
            setShortMovies(false);
            const moviesList = filterMovies(isSavedMovies, keyword, shortMovies);
            setSavedMovies(moviesList);
        }
    }, [isSavedMovies, shortMovies, location]);

    useEffect(() => {
        setFilteredMovies(isSavedMovies);
    }, [isSavedMovies]);

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main>
                <SearchForm
                    onSearchSubmit={handleSearchSubmit}
                    onFilterCheckbox={handleShortFilms}
                    shortMovies={shortMovies}
                />
                <MoviesCardList
                    isSavedMovies={isSavedMovies}
                    onRemoveMovie={onRemoveMovie}
                    moviesSave={savedMovies}
                />
            </main>
            <Footer />
        </>
    );
}

export default SavedMovies;
