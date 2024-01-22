import './FilterCheckbox.css';

const FilterCheckbox = ({onFilterCheckbox, shortMovies}) => {
    return (
        <div className="filter-checkbox">
            <input type="checkbox"
                   id="checkbox"
                   className="filter-checkbox__hidden-input"
                   onChange={onFilterCheckbox}
                   checked={shortMovies}
            />
            <label htmlFor="checkbox" className="filter-checkbox__custom-checkbox"></label>
            <span className="filter-checkbox__checkbox-label">Короткометражки</span>
        </div>
    );
};

export default FilterCheckbox;

