import './Header.css'
import LogoInHeader from '../../images/LogoInHeader.png';

function Header (){
    return (
        <div className="header">
            <img src={LogoInHeader} className="header__logo" alt="Логотип" />
            {/*<Navigation />*/}
        </div>
    );
}

export default Header ;
