import { BASE_URL_BEATFILM } from './constans';
function getResponse(response) {
    if (response.ok) {
        return response.json();
    }
    return Promise.reject(`Ошибка: ${response.status}`);
}

export function getMovies() {
    return fetch(BASE_URL_BEATFILM, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    })
        .then((res) => getResponse(res));
}

