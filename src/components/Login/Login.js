import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import LogoInHeader from '../../images/LogoInHeader.png';

function Login ({onLogin}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin({email,password})
    };

    return (
        <main className='login'>
            <div className='login__header'>
                <Link className='login__header-link' to='/'>
                    <img src={LogoInHeader} className="login__logo" alt="Логотип" />
                </Link>
                <h1 className='login__title'>Рады видеть!</h1>
            </div>
            <form className='login__form' onSubmit={handleSubmit}>
                <label className='login__label' htmlFor='email'>E-mail</label>
                <input className='login__input'
                       id='email'
                       type='email'
                       value={email}
                       placeholder='Введите почту'
                       onChange={({target}) => setEmail(target.value)}
                />
                <span className='login__err'></span>

                <label className='login__label' htmlFor='password' >Пароль</label>
                <input className='login__input'
                       id='password'
                       type='password'
                       placeholder='Введите пароль'
                       value={password}
                       onChange={({target}) => setPassword(target.value)}

                />
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
