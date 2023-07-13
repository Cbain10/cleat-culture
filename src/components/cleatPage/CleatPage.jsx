import React from 'react';
// import { useState } from 'react';
// import { useLocation } from "react-router-dom";
// import { cleatService } from "../../services/CleatService";
// import CleatReview from "../cleat-review/cleat-review";
import './CleatPage.css';

const CleatPage = () => {

    // const location = useLocation();
    // const pathname = location.pathname;
    // const cleatId = pathname.substring(pathname.lastIndexOf('/') + 1);

    // const [cleat, setCleat] = useState();
    // const [reviews, setReviews] = useState([]);
    // useEffect(() => {
    //     reviewService.getReviews(cleatId)
    //         .then((response) => {
    //             setReviews(response.data);
    //         })
    // });

    // const reviews = [
    //     {
    //         cleatName: "Nike HyperVenom",
    //         comments: "This cleat is awesome",
    //         userRating: 10
    //     },
    //     {
    //         cleatName: "Nike HyperVenom",
    //         comments: "My all time favorite cleat",
    //         userRating: 9
    //     },
    //     {
    //         cleatName: "Nike HyperVenom",
    //         comments: "Good for wide feet",
    //         userRating: 10
    //     }
    // ];

    // useEffect(() => {
    //     cleatService.getCleat(cleatId)
    //         .then((response) => {
    //             setCleat(response.data[0]);
    //         })
    // }, [cleatId]);

    // const foundCleat = cleat ? 
    //     <div className="cleat-section">
    //         <h2>{cleat.cleatName}</h2>
    //         <img alt={cleat.cleatName} src={cleat.imageURL} height="280px" width="400px" />
    //         <div className="cleat-specs">
    //             <p>Brand - {cleat.brand}</p>
    //             <p>Release Year - {cleat.releaseYear}</p>
    //             <p>Rating - {cleat.rating}</p>
    //         </div>
    //         <h3>Reviews</h3>
    //         {reviews.map((review, key) => {
    //             return (
    //                 <CleatReview
    //                     review={review}
    //                 />
    //             )
    //         })}
    //     </div> : 
    //     <p>There is no cleat matching that id</p>;

    // return (
    //     <>
    //         {foundCleat}
    //     </>
    // )

    return <p>There is no cleat matching that id</p>
}

export default CleatPage;