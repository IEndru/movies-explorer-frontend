import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import LogoInHeader from '../../images/LogoInHeader.png';

function Login () {
    return (
        <main className='login'>
            <div className='login__header'>
                <Link className='login__header-link' to='/'>
                    <img src={LogoInHeader} className="login__logo" alt="Логотип" />
                </Link>
                <h1 className='login__title'>Рады видеть!</h1>
            </div>
            <form className='login__form'>
                <label className='login__label' htmlFor='email'>E-mail</label>
                <input className='login__input' id='email' type='email' value='pochta@yandex.ru' placeholder='Введите почту'/>
                <span className='login__err'></span>
                <label className='login__label' htmlFor='password' placeholder='Введите пароль'>Пароль</label>
                <input className='login__input' id='password' type='password' value='••••••••••••••'/>
                <span className='login__err'></span>
                <button className='login__btn-sub' type='submit'>Войти</button>
                <div className='login__footer'>
                    <span className='login__question'>Ещё не зарегистрированы?</span>
                    <Link to='/signup' className='login__link'>Регистрация</Link>
                </div>
            </form>
        </main>
    );
}

export default Login;
