import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
import LogoInHeader from '../../images/LogoInHeader.png';

function Register ({onRegister}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister({name, email, password})
    };

    return (
        <main className='register'>
            <div className='register__header'>
                <Link className='register__header-link' to='/'>
                    <img src={LogoInHeader} className="register__logo" alt="Логотип" />
                </Link>
                <h1 className='register__title'>Добро пожаловать!</h1>
            </div>
            <form className='register__form' onSubmit={handleSubmit}>
                <label className='register__label' htmlFor='name'>Имя</label>
                <input className='register__input'
                       id='name'
                       type='text'
                       value={name}
                       minLength='2'
                       maxLength='30'
                       required
                       placeholder='Введите имя'
                       onChange={({target}) => setName(target.value)}
                />
                <span className='register__err'></span>

                <label className='register__label' htmlFor='email' >E-mail</label>
                <input className='register__input'
                       id='email'
                       type='email'
                       value={email}
                       minLength='2'
                       maxLength='30'
                       required
                       placeholder='Введите почту'
                       onChange={({target}) => setEmail(target.value)}
                />
                <span className='register__err'></span>

                <label className='register__label' htmlFor='password'>Пароль</label>
                <input className='register__input'
                       id='password'
                       type='password'
                       value={password}
                       minLength='5'
                       maxLength='30'
                       required
                       placeholder='Введите пароль'
                       onChange={({target}) => setPassword(target.value)}
                />
                <span className='register__err'></span>

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
