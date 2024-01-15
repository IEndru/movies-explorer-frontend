import React, { useState, useEffect } from 'react';
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Movies ({loggedIn}){
    const [isLoading, setIsLoading] = useState(true);

    //имитация получения данных с сервера
    useEffect(() => {
        const pause = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(pause);
    }, []);

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main>
                <SearchForm />
                {isLoading ? (
                    <Preloader />
                ) : (
                    <MoviesCardList />
                )}
            </main>
            <Footer />
        </>
    );
}

export default Movies;
