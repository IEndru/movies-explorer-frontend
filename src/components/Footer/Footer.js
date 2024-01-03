import './Footer.css'
function Footer() {
    return (
        <section className ='footer'>
            <span className = 'footer__description'>Учебный проект Яндекс.Практикум х BeatFilm.</span>
            <div className ='footer__content'>
                <div className ='footer__copyright'>© 2020</div>
                <ul className = 'footer__links'>
                    <li><a className ='footer__link' chref="#">Яндекс.Практикум</a></li>
                    <li><a className ='footer__link' chref="#">Github</a></li>
                </ul>
            </div>
        </section>
    );
}

export default Footer;
