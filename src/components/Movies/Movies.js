import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Movies ({loggedIn}){
    return (
        <>
            <Header loggedIn={loggedIn} />
            <SearchForm />
            {/*<Preloader />*/}
            <MoviesCardList />
            <Footer />
        </>
    );
}

export default Movies;
