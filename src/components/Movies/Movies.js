import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {getMovies} from "../../utils/MoviesApi";
import {filterMovies, filterShortDuration} from "../../utils/functionForFilms";

function Movies ({loggedIn, onSaveMovie,onRemoveMovie, isSavedMovies}){
    const [isLoading, setIsLoading] = useState(false);//нужно будет поменять на true
    const [shortMovies, setShortMovies] = useState(false);//флаг от чекбокса on off
    const [isAllMovies, setIsAllMovies] = useState([]);//все 100 фильмов полученные с сервера
    const [isNotFound, setIsNotFound] = useState(false);
    const [initMovies, setInitMovies] = useState([]);//список отфильтрованных фильмов по ключевому слову
    const [filteredMovies, setFilteredMovies] = useState([]);//список фильмов по ключевому слову и  меньше 40 мин
    const location = useLocation();

//фильтрация фильмов по ключевому слову и checkbox
    const onUserFilteredMovies = (movies, searchValue, shortDurationFilms) => {
        const moviesList = filterMovies(movies, searchValue, false);
        if (moviesList.length === 0) {
            alert('ничего не найдено');
        }
        setInitMovies(moviesList);
        setFilteredMovies(shortDurationFilms ? filterShortDuration(moviesList) : moviesList);
        localStorage.setItem('queryMovies', JSON.stringify(moviesList));//отфильтрованные фильмы по ключевому слову
}
console.log(filteredMovies)
console.log(initMovies)
console.log(isNotFound)

const submitSearchForm = (keyword) => {
    localStorage.setItem('userKeyword', keyword);//клучевое слово
    localStorage.setItem('shortMovies', shortMovies);// флаг checkbox
    if (keyword.trim().length === 0) {
       alert('Введите ключевое слово');
        return;
    }
    if (isAllMovies.length === 0) {
        setIsLoading(true);
        getMovies()
            .then((movies) => {
            localStorage.setItem('MoviesFromApi', JSON.stringify(movies));//добавили все фильмы в LS
            setIsAllMovies(movies);//добавили все фильмы в переменную isAllMovies
            onUserFilteredMovies(movies, keyword, shortMovies);
        }).catch((err)=>{
            console.log('возникла ошибка', err)
        })
            .finally(() => setIsLoading(false));
    } else {
        onUserFilteredMovies(isAllMovies, keyword, shortMovies);
    }
}

    const onShortFilms = () => {
        setShortMovies(!shortMovies);// Инвертируем значение shortMovies
        if (!shortMovies) {
            setFilteredMovies(filterShortDuration(initMovies));
            if (filterMovies.length === 0) {
                setIsNotFound(true);
            }
        } else {
            setFilteredMovies(initMovies);
        }
        localStorage.setItem('shortMovies', !shortMovies);// Инвертируем значение shortMovies в lS
    }

    useEffect(() => {
        // Обработка shortMovies
        if (localStorage.getItem('shortMovies') === 'true') {
            setShortMovies(true);
        } else {
            setShortMovies(false);
        }
        // Обработка queryMovies
        if (localStorage.getItem('queryMovies')) {
            const movies = JSON.parse(localStorage.getItem('queryMovies'));
            setInitMovies(movies);
            setFilteredMovies(localStorage.getItem('shortMovies') === 'true' ? filterShortDuration(movies) : movies);
        }
    }, [location]);

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main>
                <SearchForm
                    onSearchSubmit = {submitSearchForm}
                    shortMovies={shortMovies}
                    onFilterCheckbox={onShortFilms}
                />
                {isLoading ? (
                    <Preloader />
                ) : (
                    <MoviesCardList
                        movies={filteredMovies}
                        onSaveMovie={onSaveMovie}
                        onRemoveMovie={onRemoveMovie}
                        isSavedMovies={isSavedMovies}
                    />
                )}
            </main>
            <Footer />
        </>
    );
}

export default Movies;


