import React, { useState } from "react";
// import { dummyData } from "../../dummyData";
import Modal from "../addCleatModal/Modal";
import './CleatTable.css';
import Axios from 'axios';
import { useEffect } from "react";

const CleatTable = () => {

    const [data, setData] = useState([]);
    const [showAddCleatModal, setShowAddCleatModal] = useState(false);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/get').then((response) => {
            setData(response.data);
        })
    }, []);

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
                        {/* <th>Color</th> */}
                        <th>Rating</th>
                        <th className="delete-col"></th>
                    </tr>
                    {data.map((cleat, key) => {
                        return (
                            <tr key={key}>
                                <td className="image-col">
                                    <img alt={cleat.imageURL} src={cleat.imageURL} height="70px" width="100px" />
                                </td>
                                <td className="cleat-name-col">{cleat.cleatName}</td>
                                <td className="year-col">{cleat.releaseYear}</td>
                                {/* <td className="color-col">{cleat.color}</td> */}
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