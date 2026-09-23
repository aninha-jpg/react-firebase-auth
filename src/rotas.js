import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './paginas/home';
import Login from './paginas/login';
import Cadastro from './paginas/cadastro';

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;