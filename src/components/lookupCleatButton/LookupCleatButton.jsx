import React from 'react';
import './LookupCleatButton.css';
import { Link } from "react-router-dom";

const LookupCleatButton = () => {
    // only navigation
    return (
            <Link to={`/cleat-table`}>
                <div className='lookup-cleat-button'>
                    Lookup Cleats
                </div>
            </Link>
    )
};

export default LookupCleatButton;