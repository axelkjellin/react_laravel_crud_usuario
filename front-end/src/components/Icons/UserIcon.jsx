import React from "react";
import { FaUserAlt } from "react-icons/fa";

class UserIcon extends React.Component {
    render() {
        return <FaUserAlt className={`h-${this.props.height} w-${this.props.width}`}/>
    }
}

export default UserIcon;