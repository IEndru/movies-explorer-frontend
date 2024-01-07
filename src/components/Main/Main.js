import Promo from "../Promo/Promo";
import Header from "../Header/Header"
import AboutProject from "../AboutProject/AboutProject"
import Techs from "../Techs/Techs";
import Footer from "../Footer/Footer";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import './Main.css'

function Main ({loggedIn}){
    console.log(loggedIn);
    return (
        <div className="App">
            <Header loggedIn={loggedIn} />
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </div>
    );
}

export default Main;
