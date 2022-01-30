import React from "react";
import HomeIcon from "../Icons/HomeIcon";
import UserIcon from "../Icons/UserIcon";

const Header = (props) => {
    function home() {
        return <HomeIcon height={'6'} width={'6'} />
    }

    function user() {
        return <UserIcon height={'6'} width={'6'} />
    }

    const Icon = (witchIcon) => {
        console.log(witchIcon.witchIcon.icon)
        if(witchIcon.witchIcon.icon === 'HomeIcon') {
            console.log('oi')
            // home(witchIcon.witchIcon)
        } else {
            console.log('ola')
            // user(witchIcon.witchIcon)
        }
    }
   
    return (
        <header className="col-start-2 col-span-6 row-start-1 bg-[#319190] sm:hidden md:hidden lg:block ">
            <div className="flex h-full">
                <div className="flex justify-end items-center w-full h-full">
                    <div className="flex flex-col mr-4">
                        <div className="flex mb-2">
                            {/* isso nao funciona */}
                            {/* <Icon witchIcon={props}/> */}
                            <span className="text-lg ml-4">{props.title}</span>
                        </div>
                        <div className="text-lg">
                            {props.subtitle}
                        </div>
                    </div>
                </div>
            
            </div>
        </header>
    )
}

export default Header