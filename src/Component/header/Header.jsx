import './header.css';
import logoImg from './../../img/Logo.png'
import Coursor from './../../img/Coursor.svg'
import MenuImg from './../../img/Menu.png'

function Header () {
return <header className='header'>
            <div className="container" >
                <div className='header _row'>
                    </div>
                    <div className='header_logo'>
                        <img src={logoImg} alt='Logo'/>
                        </div>  
                        <div className='header_nav'>
                            <img src={Coursor} alt= "Coursor"/>
                            <a href="https://service.nalog.ru/gosreg/#ip" className='header_btn_a'>Зарегистрировать бизнес </a>
                            <img className='Menu' src={MenuImg} alt='Menu'/>
                        </div>
                    
            </div>
        </header>
}
    export default Header;