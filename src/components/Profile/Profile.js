import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css'
import Header from "../Header/Header";

function Profile ({loggedIn}) {
    const userName = 'Андрей';
    const userEmail = 'pochta@yandex.ru';
    const [name, setName] = useState(userName);
    const [email, setEmail] = useState(userEmail);
    const [isEditing, setEditing] = useState(false);
    const [originalName, setOriginalName] = useState(userName);
    const [originalEmail, setOriginalEmail] = useState(userEmail);
    const [showError, setShowError] = useState(false);

    const handleEditClick = () => {
        setOriginalName(name);
        setOriginalEmail(email);
        setEditing(true);
        setShowError(false);
    };

    const handleSaveClick = () => {
        if (name === originalName && email === originalEmail) {
            setShowError(true);
        } else if (!isValidName(name) || !isValidEmail(email)) {
            setShowError(true);
        } else {
            setEditing(false);
            setShowError(false);
        }
    };

    const isValidName = (value) => {
        return value.length >= 2 && value.length <= 30;
    };

    const isValidEmail = (value) => {
        const emailRegex = /^\S+@\S+\.\S+$/;
        return emailRegex.test(value);
    };

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className='profile'>
                <h1 className='profile__title'>Привет, Андрей!</h1>
                <form className='profile__form'>
                    <div>
                        <div className='profile__box-input'>
                            <label  htmlFor='name' className='profile__label'>Имя</label>
                            <input className='profile__input'
                                   required
                                   type='text'
                                   id='name'
                                   minLength= '2'
                                   maxLength= '30'
                                   value={name}
                                   placeholder='Введите имя'
                                   onChange={(event) => {
                                       setName(event.target.value);
                                   }}
                                   disabled={!isEditing}
                            />
                        </div>
                        <hr className='profile__hr'></hr>
                        <div className='profile__box-input'>
                            <label htmlFor='email' className='profile__label'>E-mail</label>
                            <input className='profile__input'
                                   required
                                   type='email'
                                   id='email'
                                   value={email}
                                   placeholder='Введите почту'
                                   onChange={(event) => {
                                       setEmail(event.target.value);
                                   }}
                                   disabled={!isEditing}
                            />
                        </div>
                    </div>
                        {showError ? (
                            <div className='profile__btns-err'>
                                <span className='profile__btn-err-text'>При обновлении профиля произошла ошибка.</span>
                                <button className='profile__btn-err' type='button' disabled>
                                    Сохранить
                                </button>
                            </div>
                        ) : isEditing ? (
                            <div className='profile__btns-save'>
                                <button className='profile__btn-save' type='button' onClick={handleSaveClick}>
                                    Сохранить
                                </button>
                            </div>
                        ) : (
                            <div className='profile__btns-edit'>
                                <button className='profile__edit' type='button' onClick={handleEditClick}>
                                    Редактировать
                                </button>
                                <Link className='profile__exit-link' to='/'>
                                    Выйти из аккаунта
                                </Link>
                            </div>
                        )}
                </form>
            </main>
        </>
    );
}

export default Profile;
