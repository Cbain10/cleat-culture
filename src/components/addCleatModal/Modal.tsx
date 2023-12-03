import { FC, useState } from "react";
import './Modal.css';
import { Cleat } from "../../types/types";

export type ModalProps = {
    handleClose: () => void;
    handleSumbit?: (newCleat: Cleat) => void;
}

const Modal: FC<ModalProps> = ({ handleClose }) => {

    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [year, setYear] = useState('');
    const [rating, setRating] = useState('');
    const [url, setUrl] = useState('');

    const disabled = !(
        name !== '' &&
        brand !== '' &&
        year !== '' &&
        rating !== '' &&
        url !== ''
    )

    // const onSubmit = () => {
    //     const newCleat = {
    //         "name": name,
    //         "brand": brand,
    //         "year": year,
    //         "rating": rating,
    //         "photo": url,
    //     };
    //     clearData();
    //     handleSumbit(newCleat);
    // }
    
    const onClose = () => {
        clearData();
        handleClose();
    }

    const clearData = () => {
        setName('');
        setBrand('');
        setYear('');
        setRating('');
        setUrl('');
    }

    return (
        <div className="modal">
            <div className="add-form-perimeter">
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
                    disabled={disabled}
                    // onClick={onSubmit} 
                >
                        Submit
                </button>
                <button className="btn" type="button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default Modal;