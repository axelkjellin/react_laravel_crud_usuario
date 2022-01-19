import React from "react";
import HomeIcon from "../Icons/HomeIcon";

const Header = (props) => {
    return (
        <header className="col-start-2 col-span-6 row-start-1 bg-[#319190] sm:hidden md:hidden lg:block ">
            <div className="flex h-full">
                <div className="flex justify-end items-center w-full h-full">
                    <div className="flex flex-col mr-4">
                        <div className="flex mb-2">
                            <HomeIcon height={'6'} width={'6'}/>
                            <span className="text-lg ml-4">Inicio</span>
                        </div>
                        <div className="text-lg">
                            Segundo projeto do capítulo de React
                        </div>
                    </div>
                </div>
            
            </div>
        </header>
    )
}

export default Header