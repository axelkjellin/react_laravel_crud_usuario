import React from "react";
import HomeIcon from "../Icons/HomeIcon";
import UserIcon from "../Icons/UserIcon";
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <React.Fragment>
            <div className="col-start-1 row-start-2 row-span-11 bg-[#ff4000] flex"> 
                <div className="flex-row w-full h-full">
                    <div className="h-16 flex items-center ml-2 cursor-pointer hover:opacity-80">
                        <HomeIcon height={'6'} width={'6'}/> 
                        <Link to="/" className="ml-3 text-lg">Início</Link>
                    </div>
                    <div className="h-16 flex items-center ml-2 cursor-pointer hover:opacity-80 ">
                        <UserIcon height={'6'} width={'6'}/> 
                        <Link to="/users" className="ml-3 text-lg">Usuários</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Nav