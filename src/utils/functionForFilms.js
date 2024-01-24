// фильтрация для чекбокс короткометражки
export function filterShortDuration(movies) {
    return movies.filter((movie) => {
        return movie.duration < 40;
    });
}

//приведение колл-вао мин к формату 0ч 42м
export function calculateTime (quantityMinutes){
    const hours = Math.floor(quantityMinutes / 60);
    const minutes = quantityMinutes % 60;
    const hoursText = hours > 0 ? `${hours}ч` : '0ч';
    const minutesText = minutes > 0 ? ` ${minutes}м` : ' 0м';
    return hoursText + minutesText;
}

//фильтрация фильмов по ключевым словам
export function filterMovies(movies, searchValue, shortDurationFilms){
    const foundFilms = movies.filter((movie) => {
        const searchItem = searchValue.trim().toLowerCase();
        const itemRu = String(movie.nameRU).trim().toLowerCase();
        const itemEn = String(movie.nameEN).trim().toLowerCase();
        return itemRu.includes(searchItem) || itemEn.includes(searchItem);
    })
    return shortDurationFilms ? filterShortDuration(foundFilms ) : foundFilms ;
}

export const getSavedFilms = (isSavedMovies, movie) => {
    return isSavedMovies.find((isSavedMovie) => {
        return isSavedMovie.movieId === (movie.id || movie.movieId);
    });
}
