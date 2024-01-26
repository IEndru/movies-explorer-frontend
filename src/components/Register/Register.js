import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
import LogoInHeader from '../../images/LogoInHeader.png';
import { useForm } from '../../hooks/useForm';

function Register ({onRegister}) {
    const {values, handleChange, errs, isValidForm} = useForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister(values)
    };

    return (
        <main className='register'>
            <div className='register__header'>
                <Link className='register__header-link' to='/'>
                    <img src={LogoInHeader} className="register__logo" alt="Логотип" />
                </Link>
                <h1 className='register__title'>Добро пожаловать!</h1>
            </div>
            <form className='register__form form' onSubmit={handleSubmit}>
                <label className='register__label' htmlFor='name'>Имя</label>
                <input className='register__input'
                       id='name'
                       name= 'name'
                       type='text'
                       value={values.name || ''}
                       minLength='2'
                       maxLength='30'
                       required
                       placeholder='Введите имя'
                       onChange={handleChange}
                       pattern='^[A-Za-zА-Яа-яЁё\s\-]+$'
                />
                <span className='register__err'>{errs.name}</span>

                <label className='register__label' htmlFor='email' >E-mail</label>
                <input className='register__input'
                       id='email'
                       type='email'
                       name='email'
                       value={values.email || ''}
                       minLength='2'
                       maxLength='30'
                       pattern='^\S+@\S+\.\S+$'
                       required
                       placeholder='Введите почту'
                       onChange={handleChange}
                />
                <span className='register__err'>{errs.email}</span>

                <label className='register__label' htmlFor='password'>Пароль</label>
                <input className='register__input'
                       id='password'
                       type='password'
                       value={values.password || ''}
                       minLength='2'
                       maxLength='30'
                       name="password"
                       required
                       placeholder='Введите пароль'
                       onChange={handleChange}
                />
                <span className='register__err'>{errs.password}</span>
                <button className={`register__btn-sub ${!isValidForm ? 'register__btn-sub_disabled' : ''}`} type='submit' disabled={!isValidForm}>
                    Войти
                </button>
                <div className='register__footer'>
                    <span className='register__question'>Уже зарегистрированы?</span>
                    <Link to="/signin" className='register__link'>Войти</Link>
                </div>
            </form>
        </main>
    );
}

export default Register;
