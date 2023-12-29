import './Promo.css'
import promo from '../../images/promoLogo.png';
function Promo() {
    return (
        <section className='promo'>
            <div className='promo__container'>
                <div className='promo__content'>
                    <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
                    <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                    <a href="#" className='promo__link'>Узнать больше</a>
                </div>
                <img  className='promo__logo' src={promo} alt='логотип промо'/>
            </div>


        </section>
    );
}

export default Promo;
