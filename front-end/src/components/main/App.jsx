import React from "react";

import Logo from "../templates/Logo";
import Footer from "../templates/Footer";
import Nav from "../templates/Nav";

import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

const App = () => {
    return (
        <BrowserRouter>
            <div className="lg:grid grid-cols-6 gap-0 grid-rows-12 h-screen">
                <Logo />
                <Nav />
                <Routes />
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App;