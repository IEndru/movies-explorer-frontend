import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css'
import Header from "../Header/Header";
import { useForm } from '../../hooks/useForm';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile ({loggedIn, onSignOut, onUpdateUser, isMessage}) {
    const currentUser = useContext(CurrentUserContext);

    const {values, setValues, handleChange, errs, isValidForm, setIsValidForm} = useForm();
    const [isEditing, setEditing] = useState(false);
    console.log(values)

//получаемм данные пользователя для заполнения инпутов из currentUser
    useEffect(() => {
        if (currentUser) {
            setValues({
                name: currentUser.name,
                email: currentUser.email,
            });
        }
    }, [setValues, currentUser]);

//проверяем совпадают ли текущие значения с новыми и есть ли ошибки валидаци
    useEffect(() => {
        // Проверяем, совпадают ли текущие значения с новыми
        const valuesMatch = currentUser.name === values.name && currentUser.email === values.email;
        // Проверяем, есть ли ошибки валидации
        const hasValidationErrors = Object.values(errs).some(err => err !== '');
        // Устанавливаем isValidForm в зависимости от условий
        if (valuesMatch || hasValidationErrors) {
            setIsValidForm(false);
        } else {
            setIsValidForm(true);
        }
    }, [values, setIsValidForm, errs, currentUser]);

    console.log(isValidForm, "setIsValidForm")

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isValidForm) {
            onUpdateUser({
                name: values.name,
                email: values.email,
            });
            setIsValidForm(true);

            console.log('форма отправлена')
            setEditing(false);

        } else {
            console.log('ошибка')
        }
    };

//при нажатии на кнопку редактировать снимается с импутов  disabled
    const handleEditClick = () => {
        setEditing(true);
    };

    console.log(errs)
    console.log(isValidForm, 'valid form')
    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className='profile'>
                <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
                <form className='profile__form' onSubmit={handleSubmit}>
                    <div>
                        <div className='profile__box-input'>
                            <label  htmlFor='name' className='profile__label'>Имя</label>
                            <input className='profile__input'
                                   name="name"
                                   required
                                   type='text'
                                   id='name'
                                   pattern="^[A-Za-zА-Яа-яЁё\-\s]+$"
                                   minLength= '2'
                                   maxLength= '30'
                                   value={values.name || ''}
                                   placeholder='Введите имя'
                                   onChange={handleChange}
                                   disabled={!isEditing}
                            />
                        </div>
                        {errs.name ? (<span className='profile__error'>{errs.name}</span>) : (<span className='profile__error-stub'></span>) }
                        <hr className='profile__hr'></hr>
                        <div className='profile__box-input'>
                            <label htmlFor='email' className='profile__label'>E-mail</label>
                            <input className='profile__input'
                                   name="email"
                                   required
                                   type='email'
                                   pattern='^\S+@\S+\.\S+$'
                                   id='email'
                                   value={values.email || ''}
                                   placeholder='Введите почту'
                                   onChange={handleChange}
                                   disabled={!isEditing}
                            />
                        </div>
                        {errs.email ? (<span className='profile__error'>{errs.email}</span>) : (<span className='profile__error-stub'></span>) }
                    </div>
                            {Object.values(errs).some(err => err !== '') ? (
                            <div className='profile__btns-err'>
                                <span className='profile__btn-err-text'>{isMessage ? isMessage :''}</span>
                                <button className='profile__btn-err' type='button' disabled>
                                    Сохранить
                                </button>
                            </div>
                        ) : isEditing ? (
                            <div className='profile__btns-save'>
                                <button className={`profile__btn-save ${!isValidForm ? 'profile__btn-save_disabled' : ''}`} type='submit' disabled={!isValidForm}>
                                    Сохранить
                                </button>
                            </div>
                        ) : (
                            <div className='profile__btns-edit'>
                                <button key='editButton' className='profile__edit' type='button' onClick={handleEditClick}>
                                    Редактировать
                                </button>
                                <Link className='profile__exit-link' to='/' onClick={onSignOut}>
                                    Выйти из аккаунта
                                </Link>
                            </div>
                        )}
                </form>
            </main>
        </>
    );
}

export default Profile;
