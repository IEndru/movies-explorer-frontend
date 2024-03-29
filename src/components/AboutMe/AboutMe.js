import './AboutMe.css'
import I from '../../images/I.png';
function AboutMe() {
    return (
        <section className ='about'>
            <h2 className='about__title'>Студент</h2>
            <div className='about__description'>
                <div className='about__content'>
                    <h3 className='about__name'>Андрей</h3>
                    <span className='about-profession'>Фронтенд-разработчик, 37 лет</span>
                    <p className='about-biography'>
                        Я родился и живу в Санкт-Петербурге, закончил СПбГАСУ.
                        У меня есть жена,дочь и сын. Увлекаюсь боевыми видами спорта!
                        С 2017 года работал системным администратором!
                        Месяц назад перешёл в отдел разработки в той же компании!
                        Хочу дальше развиваться в этом направлении! </p>
                    <a className='about-link'  target='_blank' href="https://github.com/IEndru">Github</a>
                </div>
                <img className='about-photo' src={I} alt="Студент"/>
            </div>
        </section>
    );
}

export default AboutMe;
