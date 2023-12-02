import React from "react";
import './Title.css';
import { Link } from "react-router-dom";

const Title = () => {
    return (
        <div className="title-section">
            <Link to={'/'}>
                <h1>Cleat Culture</h1>
                <hr/>
            </Link>
        </div>
    );
};

export default Title;