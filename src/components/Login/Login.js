import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import LogoInHeader from '../../images/LogoInHeader.png';
import { useForm } from '../../hooks/useForm';

function Login ({onLogin}) {
    const {values, handleChange, errs, isValidForm} = useForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(values)
    };

    return (
        <main className='login'>
            <div className='login__header'>
                <Link className='login__header-link' to='/'>
                    <img src={LogoInHeader} className="login__logo" alt="Логотип" />
                </Link>
                <h1 className='login__title'>Рады видеть!</h1>
            </div>
            <form className='login__form form' onSubmit={handleSubmit}>
                <label className='login__label' htmlFor='email'>E-mail</label>
                <input className='login__input'
                       name='email'
                       required
                       id='email'
                       type='email'
                       value={values.email || ''}
                       placeholder='Введите почту'
                       pattern='^\S+@\S+\.\S+$'
                       onChange={handleChange}
                />
                <span className='login__err'>{errs.email}</span>

                <label className='login__label' htmlFor='password' >Пароль</label>
                <input className='login__input'
                       id='password'
                       type='password'
                       name="password"
                       minLength= '2'
                       maxLength= '30'
                       required
                       placeholder='Введите пароль'
                       value={values.password || ''}
                       onChange={handleChange}
                />
                <span className='login__err'>{errs.password}</span>
                <button className={`login__btn-sub ${!isValidForm ? 'login__btn-sub_disabled' : ''}`} type='submit' disabled={!isValidForm}>
                    Войти
                </button>
                <div className='login__footer'>
                    <span className='login__question'>Ещё не зарегистрированы?</span>
                    <Link to='/signup' className='login__link'>Регистрация</Link>
                </div>
            </form>
        </main>
    );
}

export default Login;
