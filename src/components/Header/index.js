import { Link } from "react-router-dom";

import './style.css';

import fundo from '../../assets/imagens/sistema-solar.png';
import Missoes from "../../pages/Missões";

function Header(){
    return(   
        <header className="transparent-header">
            <nav className="navbar navbar-expand-md border-body cabecalho ">
            <div className="container ">
                <Link to='/' className="navbar-brand text-white logo-titulo">
                <img
                    src={fundo}
                    alt="logo"
                    width="46"
                    height="46"
                    className="d-inline-block align-text-center "
                />
                MyUniverse
                </Link>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#menuNavbar"
                >
                <i className="fas fa-bars text-white"></i>
                </button>
                <div
                className="collapse navbar-collapse justify-content-end "
                id="menuNavbar"
                >
                <div className="navbar-nav text-uppercase cor-link text-center">
                    <Link to="/" className="nav-link">
                    Home
                    </Link>
                    <a href="#planetas" className="nav-link">
                    Planetas
                    </a>
                    <a href="#noticias" className="nav-link">
                    Notícias
                    </a>
                    <Link to="/missões" className="nav-link">Missões</Link>
                </div>
                </div>
            </div>
            </nav>
        </header>
        
        
    );
}

export default Header;