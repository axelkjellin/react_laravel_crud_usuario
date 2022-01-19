import React from "react";
import { AiFillHome } from "react-icons/ai";

class HomeIcon extends React.Component {
    render() {
        return <AiFillHome className={`h-${this.props.height} w-${this.props.width}`}/>
    }
}

export default HomeIcon;