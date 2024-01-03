import Promo from "../Promo/Promo";
import Header from "../Header/Header"
import AboutProject from "../AboutProject/AboutProject"
import Techs from "../Techs/Techs";
import Footer from "../Footer/Footer";
import AboutMe from "../AboutMe/AboutMe";
function Main (){
    return (
        <div className="App">
            <Header />
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Footer />
        </div>
    );
}

export default Main;
