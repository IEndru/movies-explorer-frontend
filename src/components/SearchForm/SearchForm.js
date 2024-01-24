import { useEffect } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';

const SearchForm = ({onSearchSubmit, shortMovies, onFilterCheckbox}) => {
    const location = useLocation();
    const {values, handleChange, isValidForm } = useForm();

    //submit для /movies
    function handleFormSubmit(event) {
        event.preventDefault();
        onSearchSubmit(values.searchQuery, isValidForm, shortMovies);
    }

    function handleFormSubmitSave(event) {
        event.preventDefault();
        onSearchSubmit(values.searchQuery, shortMovies);

    }

    useEffect(() => {
        location.pathname === '/movies' &&
        localStorage.getItem('userKeyword') &&
        (values.searchQuery = localStorage.getItem('userKeyword'));
    }, [location]);

const submitValue = location.pathname === '/movies' ? handleFormSubmit : handleFormSubmitSave;

    return (
        <div className='search'>
            <form className='search__form form' onSubmit={submitValue}>
                <div className='search__form-input'>
                <input className='search__input'
                       name='searchQuery'
                       type="text"
                       placeholder='Фильм'
                       value={values.searchQuery || ''}
                       onChange={handleChange}
                       required
                />
                <button type='submit' className='search__btn'>Поиск</button>
                </div>
                <FilterCheckbox
                    onFilterCheckbox={onFilterCheckbox}
                    shortMovies={shortMovies}
                />
            </form>
            <hr className='search__hr'/>
        </div>
    )
};

export default SearchForm;
