import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // criando as rotas entre telas

import Home from './containers/Home'
import Orders from './containers/Orders'

function MyRoutes(){

    return (
        <Router>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pedidos" element={<Orders/>}/>
            </Routes>
        </Router>
    )

}

export default MyRoutes