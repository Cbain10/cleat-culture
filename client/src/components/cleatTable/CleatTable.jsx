import React, { useState } from "react";
import { dummyData } from "../../dummyData";
import Modal from "../addCleatModal/Modal";
import './CleatTable.css';

const CleatTable = () => {

    const [data, setData] = useState([...dummyData]);
    const [showAddCleatModal, setShowAddCleatModal] = useState(false);

    const onAddCleatSumbit = (cleat) => {
        setData([...data, cleat]);
        setShowAddCleatModal(false);
    }

    const onDeleteCleatClick = (id) => {
        setData(data => 
            data.filter(cleat => {
                return cleat.uid !== id;
            })
        );
    }

    return (
        <>
            <table>
                <tbody>
                    <tr className="header-row">
                        <th className="image-col">Image</th>
                        <th>Cleat</th>
                        <th>Year</th>
                        <th>Color</th>
                        <th>Rating</th>
                        <th className="delete-col"></th>
                    </tr>
                    {data.map((cleat, key) => {
                        return (
                            <tr key={key}>
                                <td className="image-col">
                                    <img alt={cleat.photo} src={cleat.photo} height="70px" width="100px" />
                                </td>
                                <td className="cleat-name-col">{cleat.name}</td>
                                <td className="year-col">{cleat.year}</td>
                                <td className="color-col">{cleat.color}</td>
                                <td className="rating-col">{cleat.rating}</td>
                                <td className="delete-col">
                                    <button className="delete-icon" onClick={() => onDeleteCleatClick(cleat.uid)}>
                                        X
                                    </button>
                                </td>
                            </tr>
                            
                        )
                    })}
                    
                    <tr className="add-row">
                        <td>
                            <button
                                className="add-btn"
                                onClick={() => setShowAddCleatModal(true)}>
                                    <p>+ Add Cleat</p>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Modal
                handleClose={() => setShowAddCleatModal(false)}
                handleSumbit={onAddCleatSumbit}
                show={showAddCleatModal} >
            </Modal>
        </>
    )
};

export default CleatTable;