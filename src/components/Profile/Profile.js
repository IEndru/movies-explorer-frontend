import './Profile.css'
import Header from "../Header/Header";

function Profile ({loggedIn}) {
    return (
        <>
            <Header loggedIn={loggedIn} />
            <section className='profile'>
                <h1 className='profile__title'>Привет, Андрей!</h1>
                <form className='profile___form'>
                    <div className='profile__box-input'>
                        <label  htmlFor='name' className='profile__label'>Имя</label>
                        <input className='profile__input' type='text' id='name' value='Андрей' />
                    </div>
                    <hr className='profile__hr'></hr>
                    <div className='profile__box-input'>
                        <label htmlFor='email' className='profile__label'>E-mail</label>
                        <input className='profile__input' type='email' id='email' value='pochta@yandex.ru' />
                    </div>
                </form>
                <div className='profile__btns'>
                    <button className='profile__edit' type='button'>Редактировать</button>
                    <button className='profile__exit' type='button'>Выйти из аккаунта</button>
                </div>
            </section>
        </>
    );
}

export default Profile;
