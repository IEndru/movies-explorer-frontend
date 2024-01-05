import './Login.css'
import LogoInHeader from '../../images/LogoInHeader.png';

function Login () {
    return (
        <section className='login'>
            <div className='login__header'>
                <img className='login__logo' src={LogoInHeader} alt='Логотип'/>
                <h1 className='login__title'>Рады видеть!</h1>
            </div>
            <form className='login__form'>
                <label className='login__label' htmlFor='email'>E-mail</label>
                <input className='login__input' id='email' type='email' value='pochta@yandex.ru' />
                <span className='login__err'></span>
                <label className='login__label' htmlFor='password'>Пароль</label>
                <input className='login__input' id='password' type='password' value='••••••••••••••'/>
                <span className='login__err'>Что-то пошло не так...</span>
                <button className='login__btn-sub' type='submit'>Войти</button>
                <div className='login__footer'>
                    <span className='login__question'>Уже зарегистрированы?</span>
                    <a className='login__link'>Войти</a>
                </div>
            </form>
        </ section>
    );
}

export default Login;
