export const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

function getResponse(response) {
    if (response.ok) {
        return response.json();
    }
    return Promise.reject(`Ошибка: ${response.status}`);
}

export function getMovies() {
    return fetch(BASE_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    })
        .then((res) => getResponse(res));
}

