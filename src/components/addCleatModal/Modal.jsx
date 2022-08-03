import React, { useState } from "react";
import './Modal.css';

const Modal = ({ handleClose, handleSumbit, show }) => {

    const showAddCleatModal = show ? 'modal display-block' : 'modal display-none';
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [year, setYear] = useState('');
    const [color, setColor] = useState('');
    const [rating, setRating] = useState('');

    const disabled = !(
        name !== '' &&
        brand !== '' &&
        year !== '' &&
        color !== '' &&
        rating !== ''
    )

    const onSubmit = () => {

       const uid = Math.random();

        const newCleat = {
            "name": name,
            "brand": brand,
            "color": color,
            "rating": rating,
            "year": year,
            "photo": "https://laz-img-sg.alicdn.com/p/e55ba53096902fc6ba68eae2e0db5261.jpg",
            "uid": `${uid}`
        };
        // clear all the data?
        setName('');
        setBrand('');
        setYear('');
        setColor('');
        setRating('');

        handleSumbit(newCleat);
    }

    return (
        <div className={showAddCleatModal} >
            <div className="form-perimeter">
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
                    <label>Make year:
                        <input
                            type="text" 
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        />
                    </label>
                    <br/>
                    <label>Color:
                        <input
                            type="text" 
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                        />
                    </label>
                    <br/>
                    <label>Overall Rating:
                        <input
                            type="text" 
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                        />
                    </label>
                </form>
                <button className="thing"
                    type="button"
                    disabled={disabled}
                    onClick={onSubmit} >
                        Submit
                </button>
                <button className="thing" type="button" onClick={handleClose}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default Modal;