import { BASE_URL } from './constans';

function getResponse(response) {
    if (response.ok) {
        return response.json();
    }
    return Promise.reject(`Ошибка: ${response.status}`);
}

//создаёт пользователя с переданными в теле email, password и name
export const register = ({ name, email, password }) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
    })
        .then((res)=>getResponse(res))
};


//проверяет переданные в теле почту и пароль и возвращает JWT
export const authorize = ({ email, password }) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
        .then((res)=>getResponse(res))
};

//возвращает информацию о пользователе (email и имя)
export const getUserInfo = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    })
        .then((res)=>getResponse(res))
};

//обновляет информацию о пользователе (email и имя)
export const updateUser = (data,token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
            name: data.name,
            email: data.email,
        }),
    })
        .then((res)=>getResponse(res))
};

//возвращает все сохранённые текущим пользователем фильмы
export const getMovie = (token) => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    })
        .then((res)=>getResponse(res))
};

//создаёт фильм с переданными в теле параметрами
export const createMovie = (movie, token) => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: 'https://api.nomoreparties.co' + movie.image.url,
            trailerLink: movie.trailerLink,
            thumbnail: 'https://api.nomoreparties.co' + movie.image.formats.thumbnail.url,
            movieId: movie.id,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
        }),
    })
        .then((res)=>getResponse(res))
};

//удаляет сохранённый фильм по id
export const deleteMovieById = (id, token) => {
    return fetch(`${BASE_URL}/movies/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    })
        .then((res)=>getResponse(res))
};
















