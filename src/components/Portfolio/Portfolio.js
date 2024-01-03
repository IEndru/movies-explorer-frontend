import './Portfolio.css'
function Portfolio() {
    return (
        <section className ='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__projects'>
                <li className='portfolio__project'>
                    <a className='portfolio__link' href="#">Статичный сайт</a>
                    <span>↗</span>
                </li>
                <li className='portfolio__project'>
                    <a className='portfolio__link' href="#">Адаптивный сайт</a>
                    <span>↗</span>
                </li>
                <li className='portfolio__project'>
                    <a className='portfolio__link' href="#">Одностраничное приложение</a>
                    <span>↗</span>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;
