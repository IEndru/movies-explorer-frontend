import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
    return (
        <div className='search'>
            <form className='search__form'>
                <div className='search__form-input'>
                <input className='search__input' type="text" placeholder='Фильм'/>
                <button type='submit' className='search__btn'>Поиск</button>
                </div>
                <FilterCheckbox />
            </form>
            <hr className='search__hr'/>
        </div>
    )
};

export default SearchForm;
