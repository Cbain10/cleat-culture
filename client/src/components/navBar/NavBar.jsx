import React from "react";
import { Link } from "react-router-dom";
import { HomeSearchBar } from "../homeSearchBar/HomeSearchBar";
import './NavBar.css';

const NavBar = () => {

    return (
        <div className="wrapper">
            <div className="navbar">
                <Link to={'/'}>
                    <h1 className="title">Cleat Culture</h1>
                </Link>
                <HomeSearchBar />
            </div>
        </div>
    )
};

export default NavBar;