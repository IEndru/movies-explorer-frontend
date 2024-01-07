import React from 'react';
import { Link, useLocation} from 'react-router-dom';
import './MenuFromBurger.css';

function MenuFromBurger({ onClose }) {
    const location = useLocation();
    return (
        <div className='burger'>
            <div className='burger__cover'>
                <div className='burger__box'>
                    <button type='button' className='burger__close-btn' onClick={onClose} />
                    <div className='burger__menu'>
                        <Link to='/' className={`burger-link ${location.pathname === '/' ? 'burger-link_active' : ''}`}>
                            Главная
                        </Link>
                        <Link to='/movies' className={`burger-link ${location.pathname === '/movies' ? 'burger-link_active' : ''}`}>
                            Фильмы
                        </Link>
                        <Link to='/saved-movies' className={`burger-link ${location.pathname === '/saved-movies' ? 'burger-link_active' : ''}`}>
                            Сохранённые фильмы
                        </Link>
                    </div>
                    <Link className='burger__account-link' to='/profile'>
                        <button className='burger__account-btn' type='button'>
                            <span className='burger__account-text'>Аккаунт</span>
                            <div className='burger__box-for-icon'>
                                <div className='burger__account-icon'></div>
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MenuFromBurger;

