import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <section className='notfound-page'>
            <h1 className='notfound-page__title'>404</h1>
            <p className='notfound-page__subtitle'>Страница не найдена</p>
            <Link to='/' className='notfound-page__link' onClick={goBack}>Назад</Link>
        </section>
    );
}

export default NotFoundPage;

