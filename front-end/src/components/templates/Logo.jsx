import React from "react";
import logo from '../../assets/images/logo.png'

const Logo = () => {
    return (
        <aside className="bg-[#319190] flex items-center">
            <a href='/' alt="logo">
                <img src={logo} alt="logo" className="px-5 py-5"/>
            </a>
        </aside>
    )
}

export default Logo