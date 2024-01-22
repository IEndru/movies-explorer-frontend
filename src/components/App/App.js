import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import * as MainApi from '../../utils/MainApi';


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] =useState({})
    const [isMessage, setIsMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = ({ name, email, password }) => {
        MainApi.register({ name, email, password })
            .then((res) => {
                console.log('Регистрация прошла успешно', res);
                navigate('/signin');
            })
            .catch((err) => {
                setIsMessage('Что-то пошло не так! Попробуйте ещё раз.');
                console.error(`Ошибка при регистрации: ${err.message}`);
                setIsLoggedIn(false);
            });
    };

    const handleLogin = ({ email, password }) => {
        MainApi.authorize({ email, password })
            .then((data) => {
                //console.log(data.token)
                console.log(data)
                if (data.token) {
                    localStorage.setItem('isLoggedIn', JSON.stringify(true));
                    setIsLoggedIn(true);
                    //console.log(data.token)
                    localStorage.setItem('token', data.token);
                    navigate('/movies');
                }
            })
            .catch((err) =>{
                setIsMessage('Что-то пошло не так! Попробуйте ещё раз.');
                console.error(`Ошибка при входе: ${err}`);

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
//данных о текущем пользователе
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
        }
    }, []);

//изменение данных профиля
    const handelUpdateUser =(newDataUser) => {
        console.log(newDataUser);
        const token = localStorage.getItem('token');
        if (token){
            MainApi.updateUser(newDataUser, token)
                .then((data) => {
                console.log(data, 'Профиль пользователя успешно редактирован')
                setCurrentUser(data);
            })
                .catch(err => {
                    console.log('При обновлении профиля произошла ошибка.', err)
                    }
                )
        }
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <Routes>
                <Route path='/' element={<Main loggedIn={isLoggedIn} />}/>

                <Route path='/movies' element={
                    < ProtectedRoute element={ Movies }
                                     loggedIn={isLoggedIn}
                                     /*allMovies={ isMovies }*/
                    />
                }
                />

                <Route path='/saved-movies' element={
                    <ProtectedRoute element={ SavedMovies }
                                    loggedIn={isLoggedIn}
                    />
                }
                />

                <Route path="/profile" element={
                    <ProtectedRoute element={ Profile }
                                    loggedIn={isLoggedIn}
                                    onSignOut={handleSignOut}
                                    onUpdateUser={handelUpdateUser}
                    />
                }
                />

                <Route path="/signin" element={<Login onLogin={handleLogin}/>}/>
                <Route path="/signup" element={<Register onRegister={handleRegister} />}/>
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </CurrentUserContext.Provider>
    );
}

export default App;
