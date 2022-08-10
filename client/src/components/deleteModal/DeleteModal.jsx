import React from "react";
import './DeleteModal.css';

const DeleteModal = ({ cleat, handleDelete, setShowModal, show }) => {

    const showDeletCleatModal = show ? 'modal display-block' : 'modal display-none';

    const onDelete = () => {
        // handleDelete(cleat.cleatName);
    }

    const onCancel = () => {
        setShowModal(false);
    }

    return (

        <div className={showDeletCleatModal} >
            <div className="mod" >
                <p>Are you sure you want to delete?</p>
                <button
                    type="button"
                    onClick={onDelete} >
                        Delete
                </button>
                <button className="thing" type="button" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </div>

    )
}

export default DeleteModal;