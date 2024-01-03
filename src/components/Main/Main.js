import Promo from "../Promo/Promo";
import Header from "../Header/Header"
import AboutProject from "../AboutProject/AboutProject"
import Techs from "../Techs/Techs";
import Footer from "../Footer/Footer";
function Main (){
    return (
        <div className="App">
            <Header />
            <Promo />
            <AboutProject />
            <Techs />
            <Footer />
        </div>
    );
}

export default Main;
