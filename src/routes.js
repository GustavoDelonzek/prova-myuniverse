import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Missoes from './pages/Missões';
import Erro from './pages/Erro';

import Header from './components/Header';
import Footer from './components/Footer'
function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/missões" element={<Missoes/>}/>
                <Route path="*" element={<Erro/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>

    );
}

export default RoutesApp;