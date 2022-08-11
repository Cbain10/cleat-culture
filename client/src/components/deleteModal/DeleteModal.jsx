import React from "react";
import './DeleteModal.css';

const DeleteModal = ({ cleat, handleDelete, setCleatToDelete }) => {

    const onDelete = () => {
        handleDelete(cleat.cleatName);
    }

    const onCancel = () => {
        setCleatToDelete(null);
    }

    return (

        <div className="modal">
            <div className="mod" >
                <p className="top-text">Are you sure you want to delete</p>
                <p className="cleat-name-text">{cleat.cleatName}?</p>
                <img alt={cleat.imageURL} src={cleat.imageURL} height="140px" width="200px" />
                <br/>
                <button className="delete-btn btn"
                    type="button"
                    onClick={onDelete} >
                        Delete
                </button>
                <button className="btn" type="button" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </div>

    )
}

export default DeleteModal;