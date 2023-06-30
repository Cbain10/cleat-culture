import React from 'react';
import './RecommendCleatButton.css';
import { Link } from 'react-router-dom';

const RecommendCleatButton = () => {
    // only navigation
    return (
            <Link to={`/recommender`}>
                <div className='recommend-cleat-button'>
                    Find what cleats are best for you!
                </div>
            </Link>
    )
};

export default RecommendCleatButton;