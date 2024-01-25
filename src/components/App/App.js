import React, {useState, useEffect} from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import * as MainApi from '../../utils/MainApi';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({})
    const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
    const [isMessage, setIsMessage] = useState('');
    const [isSavedMovies, setIsSavedMovies] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate();

    console.log(isInfoTooltipOpen)

/*console.log(isSavedMovies, 'сохраненные фильмы');*/

    const handleRegister = ({name, email, password}) => {
        MainApi.register({name, email, password})
            .then((res) => {
                setIsInfoTooltipOpen(true);
                setIsSuccess(true);
                setIsMessage('Регистрация прошла успешно')
                console.log('Регистрация прошла успешно', res);
                navigate('/signin');
            })
            .catch((err) => {
                setIsMessage('Что-то пошло не так! Попробуйте ещё раз.');
                setIsInfoTooltipOpen(true);
                setIsSuccess(false);
                console.error(`Ошибка при регистрации: ${err.message}`);
                setIsLoggedIn(false);
            });
    };

    const handleLogin = ({email, password}) => {
        MainApi.authorize({email, password})
            .then((data) => {
                //console.log(data.token)
                console.log(data)
                if (data.token) {
                    setIsInfoTooltipOpen(true);
                    setIsSuccess(true);
                    setIsMessage('Авторизация прошла успешно')
                    console.log(isInfoTooltipOpen);
                    localStorage.setItem('isLoggedIn', JSON.stringify(true));
                    setIsLoggedIn(true);
                    //console.log(data.token)
                    localStorage.setItem('token', data.token);
                    navigate('/movies');
                    Promise.all([MainApi.getUserInfo(data.token), MainApi.getMovie(data.token)])
                        .then(([userInfo, userMovies]) => {
                            setCurrentUser(userInfo);
                            localStorage.setItem('isSavedMovies', JSON.stringify(userMovies));
                            setIsSavedMovies(userMovies);
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }
            })
            .catch((err) => {
                setIsInfoTooltipOpen(true);
                setIsMessage('Что-то пошло не так! Попробуйте ещё раз.');
                console.log(`Ошибка при входе: ${err}`);
                setIsSuccess(false);

            });
    };

    const handleSignOut = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('token');
        localStorage.removeItem('MoviesFromApi');

        localStorage.clear();
        navigate('/');
    };

    //данных о текущем пользователе и сохраненных фильмах
    useEffect(() => {
        const token = localStorage.getItem('token');
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (token && storedIsLoggedIn) {
            MainApi.getUserInfo(token)
                .then((data) => {
                    /*console.log(data);*/
                    setCurrentUser(data);
                    setIsLoggedIn(true);
                })
                .catch((err) => {
                    console.log('При восстановлении состояния  авторизации произошла ошибка.', err);
                    setIsLoggedIn(false);
                    localStorage.removeItem('token');
                });
            MainApi.getMovie(token)
                .then((movies) => {
                    setIsSavedMovies(movies)
                })
                .catch((err) => {
                    console.log(err);
                    /*setIsLoggedIn(false);*/
                    /*localStorage.removeItem('token');*/
                });

        }
    }, [isLoggedIn, navigate]);

//изменение данных профиля
    const handelUpdateUser = (newDataUser) => {
        console.log(newDataUser);
        const token = localStorage.getItem('token');
        if (token) {
            MainApi.updateUser(newDataUser, token)
                .then((data) => {
                    console.log(data, 'Профиль пользователя успешно редактирован')
                    setCurrentUser(data);
                    setIsInfoTooltipOpen(true);
                    setIsSuccess(true);
                    setIsMessage('Профиль пользователя успешно редактирован')
                })
                .catch(err => {
                    console.log('При обновлении профиля произошла ошибка.', err)
                    setIsInfoTooltipOpen(true);
                    setIsSuccess(false);
                    setIsMessage('При обновлении профиля произошла ошибка.')
                    }
                )
        }
    }

//post фильмов
    const handleSaveMovie = (movie) => {
        const token = localStorage.getItem('token');
        const savedMovie = isSavedMovies.find((m)=>m.movieId === movie.id);
        const isFavourite = Boolean(savedMovie);
        if (!isFavourite){
            MainApi.createMovie(movie, token)
                .then((newSavedMovie) => {
                    console.log(newSavedMovie)

                    // Получение текущего списка сохраненных фильмов из локального хранилища
                    const currentSavedMovies = JSON.parse(localStorage.getItem('isSavedMovies')) || [];
                    // Обновление списка и добавление нового фильма
                    const updatedSavedMovies = [...currentSavedMovies, newSavedMovie];
                    // Сохранение обновленного списка в локальное хранилище
                    localStorage.setItem('isSavedMovies', JSON.stringify(updatedSavedMovies));
                    // Обновление стейта компонента
                    setIsSavedMovies(updatedSavedMovies);
                })
                .catch((err) => {
                    alert(err);
                });
        }
    }


//delete фильмов
    const handleRemoveMovie = (movie) => {
        const token = localStorage.getItem('token');
        console.log(movie)
        MainApi.deleteMovieById(movie._id, token)
            .then(() => {
                // Получение текущего списка сохраненных фильмов из локального хранилища
                const currentSavedMovies = JSON.parse(localStorage.getItem('isSavedMovies')) || [];
                const newMoviesList = currentSavedMovies.filter(item => item._id === movie._id ? false : true);
                // Сохранение обновленного списка в локальное хранилище
                localStorage.setItem('isSavedMovies', JSON.stringify(newMoviesList));
                // Обновление стейта компонента
                setIsSavedMovies(newMoviesList);
            })
            .catch(err => {
                alert(err);
            })
    };

    const closePopupInfoTooltip = () => {
        setIsInfoTooltipOpen(false);
    };


    return (
        <CurrentUserContext.Provider value={currentUser}>
            <Routes>
                <Route path='/' element={<Main loggedIn={isLoggedIn}/>}/>

                <Route path='/movies' element={
                    < ProtectedRoute element={Movies}
                                     loggedIn={isLoggedIn}
                                     onSaveMovie={handleSaveMovie}
                                     onRemoveMovie={handleRemoveMovie}
                                     isSavedMovies={isSavedMovies}
                    />
                }
                />

                <Route path='/saved-movies' element={
                    <ProtectedRoute element={SavedMovies}
                                    loggedIn={isLoggedIn}
                                    onRemoveMovie={handleRemoveMovie}
                                    isSavedMovies={isSavedMovies}
                    />
                }
                />

                <Route path="/profile" element={
                    <ProtectedRoute element={Profile}
                                    loggedIn={isLoggedIn}
                                    onSignOut={handleSignOut}
                                    onUpdateUser={handelUpdateUser}
                    />
                }
                />

                <Route path="/signin" element={<Login
                    onLogin={handleLogin}
                    onClose={closePopupInfoTooltip}
                    isOpen={isInfoTooltipOpen}
                />}/>
                <Route path="/signup" element={<Register onRegister={handleRegister}/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
            <InfoTooltip onClose={closePopupInfoTooltip}
                         isOpen={isInfoTooltipOpen}
                         message={isMessage}
                         isSuccess={isSuccess}/>
        </CurrentUserContext.Provider>
    );
}

export default App;
