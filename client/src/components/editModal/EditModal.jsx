import React from "react";
import { useState } from "react";
import './EditModal.css';

const EditModal = ({ cleat, handleUpdate, setCleatToEdit }) => {

    const [name, setName] = useState(cleat.cleatName);
    const [brand, setBrand] = useState(cleat.brand);
    const [year, setYear] = useState(cleat.releaseYear);
    const [rating, setRating] = useState(cleat.rating);
    const [url, setUrl] = useState(cleat.imageURL);

    const onUpdate = () => {
        const newCleat = {
            "name": name,
            "brand": brand,
            "year": year,
            "rating": rating,
            "photo": url,
        };
        handleUpdate(newCleat);
    }

    return (
        <div className="modal">
            <div className="form-perimeter">
                <p className="top-text">Editing</p>
                <p className="cleat-name-text">{name}</p>
                <hr/>
                <form>
                    <label>Cleat name:
                        <input
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <br/>
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
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
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
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </label>
                </form>
                <button
                    className="delete-btn btn"
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