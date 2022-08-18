import React from "react";
import { useState } from "react";
import './EditModal.css';

const EditModal = ({ cleat, handleUpdate, setCleatToEdit }) => {

    const [brand, setBrand] = useState(cleat.brand);
    const [releaseYear, setReleaseYear] = useState(cleat.releaseYear);
    const [rating, setRating] = useState(cleat.rating);
    const [imageURL, setImageURL] = useState(cleat.imageURL);

    const onUpdate = () => {
        const newCleat = {
            "cleatName": cleat.cleatName,
            "brand": brand,
            "releaseYear": releaseYear,
            "rating": rating,
            "imageURL": imageURL,
        };
        handleUpdate(newCleat);
    }

    return (
        <div className="modal">
            <div className="form-perimeter">
                <p className="cleat-name-text">{cleat.cleatName}</p>
                <img alt={cleat.cleatName} src={cleat.imageURL} height="100px" width="145px" />
                <hr/>
                <form>
                    <label>Brand:
                        <input
                            type="text" 
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                        />
                    </label>
                    <br/>
                    <label>Release year:
                        <input
                            type="number" 
                            value={releaseYear}
                            onChange={(e) => setReleaseYear(e.target.value)}
                        />
                    </label>
                    <br/>
                    <label>Overall Rating:
                        <input
                            type="number" 
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                        />
                    </label>
                    <br/>
                    <label>Image URL:
                        <input
                            type="text" 
                            value={imageURL}
                            onChange={(e) => setImageURL(e.target.value)}
                        />
                    </label>
                </form>
                <button
                    className="update-btn btn"
                    type="button"
                    onClick={onUpdate} >
                        Update
                </button>
                <button className="btn" type="button" onClick={() => setCleatToEdit(null)}>
                    Close
                </button>
            </div>
        </div>
    )
}

export default EditModal;