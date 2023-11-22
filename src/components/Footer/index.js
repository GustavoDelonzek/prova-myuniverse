import { Link } from "react-router-dom";

import './style.css';


function Footer(){
    return(   
        <footer className="text-white pt-2">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item">
                <Link to="/" className="nav-link px-2">
                    Home
                </Link>
                </li>
                <li className="nav-item">
                <a href="#planetas" className="nav-link px-2">
                    Planetas
                </a>
                </li>
                <li className="nav-item">
                <a href="#noticias" className="nav-link px-2">
                    Noticias
                </a>
                </li>
                <li className="nav-item">
                <Link to="/missões" className="nav-link px-2">
                    Missões
                </Link>
                </li>
            </ul>
            <p className="text-center text-white">© 2022 MyUniverse, Inc</p>
        </footer>
    );
}

export default Footer;