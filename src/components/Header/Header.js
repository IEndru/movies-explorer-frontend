import React from 'react';
import './Header.css'
import LogoInHeader from '../../images/LogoInHeader.png';
import { Link, useLocation } from 'react-router-dom';
import Navigation from "../Navigation/Navigation";

function Header ({loggedIn}){
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    return (
        <header className={`header ${isHomePage ? '' : 'header_black'}`}>
            <Link className='header__link' to='/'>
                <img src={LogoInHeader} className="header__logo" alt="Логотип" />
            </Link>
            <Navigation loggedIn={loggedIn} isHomePage={isHomePage}/>
        </header>
    );
}

export default Header ;
