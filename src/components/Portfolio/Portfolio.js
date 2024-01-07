import './Portfolio.css'
function Portfolio() {
    return (
        <section className ='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__projects'>
                <li className='portfolio__project'>
                    <a className='portfolio__link' target='_blank' href="https://github.com/IEndru/how-to-learn">Статичный сайт</a>
                    <span>↗</span>
                </li>
                <li className='portfolio__project'>
                    <a className='portfolio__link' target='_blank' href="https://github.com/IEndru/russian-travel">Адаптивный сайт</a>
                    <span>↗</span>
                </li>
                <li className='portfolio__project'>
                    <a className='portfolio__link' target='_blank' href="https://github.com/IEndru/react-mesto-api-full-gha">Одностраничное приложение</a>
                    <span>↗</span>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;
