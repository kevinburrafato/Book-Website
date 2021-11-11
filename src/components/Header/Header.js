import React from 'react';
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <Link to="/">Let'sRead</Link>
            </div>
        </div>
    );
}


export default Header;