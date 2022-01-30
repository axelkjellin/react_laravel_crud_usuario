import React from "react";
import Header from "./Header";

const Main = (props) => {
    return (
        <React.Fragment>
            <Header {...props}/>
            <main className="col-start-2 col-span-6 row-start-2 row-span-10 bg-[#ffefb5]">
                <div className="bg-white p-8 shadow-md border-2 lg:m-8">
                    {props.children}                    
                </div>
            </main>
        </React.Fragment>
    )
}

export default Main;