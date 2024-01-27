import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css'
import accountIcon from '../../images/accountIcon.png';
import MenuFromBurger from "../MenuFromBurger/MenuFromBurger";

function Navigation ({ loggedIn, isHomePage }){
    let localRoute = useLocation();
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const changeBurgerMenu = () => setIsBurgerOpen(prevIsBurgerOpen => !prevIsBurgerOpen);

    return (
        <nav className='navigation'>
            { loggedIn ? (
            <>
                <div className='navigation__movies'>
                    <Link  className={localRoute.pathname === '/movies'? 'navigation__movies-link navigation__movies-link_active' : 'navigation__movies-link'} to='/movies'>Фильмы</Link>
                    <Link  className={localRoute.pathname === '/saved-movies'? 'navigation__movies-link navigation__movies-link_active' : 'navigation__movies-link'} to='/saved-movies'>Сохранённые фильмы</Link>
                </div>
                <Link to='/profile' className='navigation__link'>
                    <div className={`navigation__account-btn ${isHomePage ? '' :'navigation__account-btn_black'}`}>
                        <span className='navigation__account-text'>Аккаунт</span>
                        <div className={`navigation__box-icon ${isHomePage ? '' :'navigation__box-icon_black'}`}>
                            <img className='navigation__account-icon' src={accountIcon} alt="иконка аккаунта"/>
                        </div>
                    </div>
                </Link>
            </>) : (
            <>
                <div className='navigation__auth'>
                    <Link to='/signup' className='navigation__auth-link' >Регистрация</Link>
                </div>
                <Link to='/signin' className='navigation__link'>
                    <button className='navigation__in-btn' type='button'>Войти</button>
                </Link>
            </>)}
            {loggedIn ? (!isBurgerOpen ? (
                <button onClick={changeBurgerMenu} className={`navigation__btn-burger ${isHomePage ? '' :'navigation__btn-burger_black'}`} type='button'></button>
            ) : (<MenuFromBurger onClose={changeBurgerMenu} />)) : ''}
        </nav>
    );
}

export default Navigation ;



