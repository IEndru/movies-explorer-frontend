import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);// поменять на false при не зарегистрированном пользователе
    console.log(isLoggedIn)
    return (
            <Routes>
                <Route path='/' element={<Main loggedIn={isLoggedIn} />}/>
                <Route path='/movies' element={<Movies  loggedIn={isLoggedIn} />}/>
                <Route path='/saved-movies' element={<SavedMovies loggedIn={isLoggedIn} />}/>
                <Route path="/profile" element={<Profile loggedIn={isLoggedIn} />}/>
                <Route path="/signin" element={<Login />}/>
                <Route path="/signup" element={<Register />}/>
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
    );
}

export default App;
