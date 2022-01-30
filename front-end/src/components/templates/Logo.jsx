import React from "react";
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <aside className="bg-[#319190] flex items-center">
            <Link to='/' alt="logo">
                <img src={logo} alt="logo" className="px-5 py-5"/>
            </Link>
        </aside>
    )
}

export default Logo