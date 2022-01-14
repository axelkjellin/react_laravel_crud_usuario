import React from "react";

import Main from "../templates/Main";
import Logo from "../templates/Logo";
import Footer from "../templates/Footer";
import Nav from "../templates/Nav";

const App = () => {
    return (
        <div className="app">
            <Logo />
            <Nav />
            <Main />
            <Footer />
        </div>
    )
}

export default App;