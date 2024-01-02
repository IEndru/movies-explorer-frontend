import Promo from "../Promo/Promo";
import Header from "../Header/Header"
import AboutProject from "../AboutProject/AboutProject"
import Techs from "../Techs/Techs";
function Main (){
    return (
        <div className="App">
            <Header />
            <Promo />
            <AboutProject />
            <Techs />
        </div>
    );
}

export default Main;
