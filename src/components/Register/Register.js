import './Register.css'
import LogoInHeader from '../../images/LogoInHeader.png';

function Register () {
    return (
        <section className='register'>
            <div className='register__header'>
                    <img className='register__logo' src={LogoInHeader} alt='Логотип'/>
                <h1 className='register__title'>Добро пожаловать!</h1>
            </div>
            <form className='register__form'>
                <label className='register__label' htmlFor='name'>Имя</label>
                <input className='register__input'  id='name' type='text' value='Андрей' />
                <span className='register__err'></span>
                <label className='register__label' htmlFor='email'>E-mail</label>
                <input className='register__input' id='email' type='email' value='pochta@yandex.ru' />
                <span className='register__err'></span>
                <label className='register__label' htmlFor='password'>Пароль</label>
                <input className='register__input' id='password' type='password' value='••••••••••••••'/>
                <span className='register__err'>Что-то пошло не так...</span>
                <button className='register__btn-sub' type='submit'>Зарегистрироваться</button>
                <div className='register__footer'>
                    <span className='register__question'>Уже зарегистрированы?</span>
                    <a className='register__link'>Войти</a>
                </div>
            </form>
        </ section>
    );
}

export default Register;
