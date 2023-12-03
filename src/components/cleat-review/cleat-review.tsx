import { FC } from 'react';
import './cleat-review.css';

export type CleatReviewProps = {
    review: {
        comments: string[];
        userRating: number;
    }
}

const CleatReview: FC<CleatReviewProps> = ({ review }) => {

    return (
        <div className="review-section">
            <p>{review.comments}</p>
            <p>Rating: {review.userRating}</p>
        </div>
    );
}

export default CleatReview;