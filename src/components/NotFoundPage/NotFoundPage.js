import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {

    return (
        <section className='notfound-page'>
            <h1 className='notfound-page__title'>404</h1>
            <p className='notfound-page__subtitle'>Страница не найдена</p>
            <Link to='/' className='notfound-page__link'>Назад</Link>
        </section>
    );
};

export default NotFoundPage;
