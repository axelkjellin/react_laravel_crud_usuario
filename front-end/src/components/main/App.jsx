import React from "react";

import Logo from "../templates/Logo";
import Footer from "../templates/Footer";
import Nav from "../templates/Nav";
import Home from "../home/Home";

const App = () => {
    return (
        <div className="lg:grid grid-cols-6 gap-0 grid-rows-12 h-screen">
            <Logo />
            <Nav />
            <Home />
            <Footer />
        </div>
    )
}

export default App;