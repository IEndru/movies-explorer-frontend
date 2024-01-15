import './Footer.css'

function Footer() {
    return (
        <footer className ='footer'>
            <span className = 'footer__description'>Учебный проект Яндекс.Практикум х BeatFilm.</span>
            <div className ='footer__content'>
                <div className ='footer__copyright'>© 2020</div>
                <ul className = 'footer__links'>
                    <li><a className ='footer__link' target='_blank' href="https://practicum.yandex.ru/">Яндекс.Практикум</a></li>
                    <li><a className ='footer__link' target='_blank' href="https://github.com/IEndru">Github</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
