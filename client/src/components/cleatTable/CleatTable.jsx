import React, { useState } from "react";
import Modal from "../addCleatModal/Modal";
import './CleatTable.css';
import Axios from 'axios';
import { useEffect } from "react";
import DeleteModal from "../deleteModal/DeleteModal";
import fp from 'lodash/fp';

const CleatTable = () => {

    const [data, setData] = useState([]);
    const [showAddCleatModal, setShowAddCleatModal] = useState(false);
    const [cleatToDelete, setCleatToDelete] = useState(null);
    
    useEffect(() => {
        Axios.get('http://localhost:3001/api/get').then((response) => {
            if (fp.isEqual(response.data, data)) {
                return;
            }
            setData(response.data);
        })
    }, [data]);

    const onAddCleatSumbit = (cleat) => {
        Axios.post("http://localhost:3001/api/insert",
            {
                cleatName: cleat.name,
                brand: cleat.brand,
                releaseYear: cleat.year,
                rating: cleat.rating,
                imageURL: cleat.photo,
            },
        ).then(() => {
            alert("successful insert!");
        });
        setData([...data, cleat]);
        setShowAddCleatModal(false);
    }

    const deleteCleat = (cleatName) => {
        Axios.delete(`http://localhost:3001/api/delete/${cleatName}`);
        setData(data => 
            data.filter(cleat => {
                return cleat.cleatName !== cleatName;
            })
        );
        setCleatToDelete(null);
    }

    const onDeleteClick = (cleat) => {
        setCleatToDelete(cleat);
    }

    return (
        <div className="cleat-table">
            <table>
                <tbody>
                    <tr className="header-row">
                        <th className="image-col">Image</th>
                        <th>Cleat</th>
                        <th>Year</th>
                        <th>Rating</th>
                        <th className="delete-col"></th>
                    </tr>
                    {data.map((cleat, key) => {
                        return (
                            <tr className={`item-row ${key % 2 === 0 ? "dark" : "light"}`} key={key}>
                                <td className="image-col">
                                    <img alt={cleat.imageURL} src={cleat.imageURL} height="70px" width="100px" />
                                </td>
                                <td className="cleat-name-col">{cleat.cleatName}</td>
                                <td className="year-col">{cleat.releaseYear}</td>
                                <td className="rating-col">{cleat.rating}</td>
                                <td className="delete-col">
                                    <button className="delete-icon" onClick={() => onDeleteClick(cleat)}>
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
            {showAddCleatModal && <Modal
                handleClose={() => setShowAddCleatModal(false)}
                handleSumbit={onAddCleatSumbit}
                show={showAddCleatModal}
            />}
            {cleatToDelete && <DeleteModal
                cleat={cleatToDelete}
                handleDelete={deleteCleat}
                setCleatToDelete={setCleatToDelete}
            />}
        </div>
    )
};

export default CleatTable;