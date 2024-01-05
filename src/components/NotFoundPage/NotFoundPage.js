import './NotFoundPage.css';

function NotFoundPage() {

    return (
        <section className='notfound-page'>
            <h1 className='notfound-page__title'>404</h1>
            <p className='notfound-page__subtitle'>Страница не найдена</p>
            <a  className='notfound-page__link'>Назад</a>
        </section>
    );
};

export default NotFoundPage;