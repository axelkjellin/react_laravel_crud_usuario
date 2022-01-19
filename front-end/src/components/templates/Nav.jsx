import React from "react";
import HomeIcon from "../Icons/HomeIcon";
import UserIcon from "../Icons/UserIcon";

const Nav = () => {
    return (
        <React.Fragment>
            <div className="col-start-1 row-start-2 row-span-11 bg-[#ff4000] flex"> 
                <div className="flex-row w-full h-full">
                    <div className="w-full h-16 flex items-center ml-2 cursor-pointer hover:opacity-80">
                        <HomeIcon height={'6'} width={'6'}/> 
                        <a href="/" className="ml-3 text-lg">Início</a>
                    </div>
                    <div className="w-full h-16 flex items-center ml-2 cursor-pointer hover:opacity-80 ">
                        <UserIcon height={'6'} width={'6'}/> 
                        <a href="/users" className="ml-3 text-lg">Usuários</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Nav