import Promo from "../Promo/Promo";
import Header from "../Header/Header"
import AboutProject from "../AboutProject/AboutProject"
import Techs from "../Techs/Techs";
import Footer from "../Footer/Footer";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
function Main (){
    return (
        <div className="App">
            <Header />
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
