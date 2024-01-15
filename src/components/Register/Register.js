import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
import LogoInHeader from '../../images/LogoInHeader.png';

function Register () {
    return (
        <main className='register'>
            <div className='register__header'>
                <Link className='register__header-link' to='/'>
                    <img src={LogoInHeader} className="register__logo" alt="Логотип" />
                </Link>
                <h1 className='register__title'>Добро пожаловать!</h1>
            </div>
            <form className='register__form'>
                <label className='register__label' htmlFor='name'>Имя</label>
                <input className='register__input'  id='name' type='text' value='Андрей' placeholder='Введите имя'/>
                <span className='register__err'></span>
                <label className='register__label' htmlFor='email' >E-mail</label>
                <input className='register__input' id='email' type='email' value='pochta@yandex.ru' placeholder='Введите почту'/>
                <span className='register__err'></span>
                <label className='register__label' htmlFor='password'>Пароль</label>
                <input className='register__input' id='password' type='password' value='••••••••••••••' placeholder='Введите пароль'/>
                <span className='register__err'>Что-то пошло не так...</span>
                <button className='register__btn-sub' type='submit'>Зарегистрироваться</button>
                <div className='register__footer'>
                    <span className='register__question'>Уже зарегистрированы?</span>
                    <Link to="/signin" className='register__link'>Войти</Link>
                </div>
            </form>
        </main>
    );
}

export default Register;
