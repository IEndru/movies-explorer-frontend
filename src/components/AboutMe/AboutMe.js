import './AboutMe.css'
import I from '../../images/I.png';
function AboutMe() {
    return (
        <section className ='aboutMe'>
            <h2 className='aboutMe__title'>Студент</h2>
            <div className='aboutMe__description'>
                <div className='aboutMe__content'>
                    <h3 className='aboutMe__name'>Андрей</h3>
                    <span className='aboutМе-profession'>Фронтенд-разработчик, 37 лет</span>
                    <p className='aboutМе-biography'>
                        Я родился и живу в Санкт-Петербурге, закончил СПбГАСУ.
                        У меня есть жена,дочь и сын. Увлекаюсь боевыми видами спорта!
                        С 2017 года работал системным администратором!
                        Месяц назад перешёл в отдел разработки в той же компании!
                        Хочу дальше развиваться в этом направлении! </p>
                    <a className='aboutМе-link' href="https://github.com/IEndru">Github</a>
                </div>
                <img className='aboutМе-photo' src={I} alt="Студент"/>
            </div>
        </section>
    );
}

export default AboutMe;
