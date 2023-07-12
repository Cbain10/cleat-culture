import React from "react";
import './cleat-review.css';

const CleatReview = ({ review }) => {

    return (
        <div className="review-section">
            <p>{review.comments}</p>
            <p>Rating: {review.userRating}</p>
        </div>
    );
}

export default CleatReview;