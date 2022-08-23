import React, { useState } from "react";
import Modal from "../addCleatModal/Modal";
import './CleatTable.css';
import Axios from 'axios';
import { useEffect } from "react";

const CleatTable = () => {

    const [data, setData] = useState([]);
    const [showAddCleatModal, setShowAddCleatModal] = useState(false);
    const [ascending, setAscending] = useState(false);

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
        );
        setShowAddCleatModal(false);
        setData([...data, cleat]);
    }

    const sortCleats = () => {
        let newData = [...data];
        if (!ascending) {
            newData.sort((a,b) => {
                return a.cleatName > b.cleatName ? 1 : -1;
            });
        } else {
            newData.sort((a,b) => {
                return a.cleatName < b.cleatName ? 1 : -1;
            });
        }
        setAscending(!ascending);
        setData(newData);
    }

    const sortByBrand = () => {
        let newData = [...data];
        if (!ascending) {
            newData.sort((a,b) => {
                if (a.brand === b.brand) {
                    return a.cleatName > b.cleatName ? 1 : -1;
                }
                return a.brand > b.brand ? 1 : -1;
            });
        } else {
            newData.sort((a,b) => {
                if (a.brand === b.brand) {
                    return a.cleatName > b.cleatName ? 1 : -1;
                }
                return a.brand < b.brand ? 1 : -1;
            });
        }
        setAscending(!ascending);
        setData(newData);
    }

    const sortByYear = () => {
        let newData = [...data];
        if (!ascending) {
            newData.sort((a,b) => {
                if (a.releaseYear === b.releaseYear) {
                    return a.cleatName > b.cleatName ? 1 : -1;
                }
                return a.releaseYear > b.releaseYear ? 1 : -1;
            });
        } else {
            newData.sort((a,b) => {
                if (a.releaseYear === b.releaseYear) {
                    return a.cleatName > b.cleatName ? 1 : -1;
                }
                return a.releaseYear < b.releaseYear ? 1 : -1;
            });
        }
        setAscending(!ascending);
        setData(newData);
    }

    const sortByRating = () => {
        let newData = [...data];
        if (!ascending) {
            newData.sort((a,b) => {
                if (a.rating === b.rating) {
                    return a.cleatName > b.cleatName ? 1 : -1;
                }
                return a.rating > b.rating ? 1 : -1;
            });
        } else {
            newData.sort((a,b) => {
                if (a.rating === b.rating) {
                    return a.cleatName > b.cleatName ? 1 : -1;
                }
                return a.rating < b.rating ? 1 : -1;
            });
        }
        setAscending(!ascending);
        setData(newData);
    }

    return (
        <>
            <div className="cleat-table">
                <table>
                    <tbody>
                        <tr className="header-row">
                            <th className="image-col">Image</th>
                            <th onClick={sortCleats}>Cleat</th>
                            <th onClick={sortByBrand}>Brand</th>
                            <th onClick={sortByYear}>Year</th>
                            <th onClick={sortByRating}>Rating</th>
                        </tr>
                        {data.map((cleat, key) => {
                            return (
                                <tr className={`item-row ${key % 2 === 0 ? "dark" : "light"}`} key={key}>
                                    <td className="image-col">
                                        <img alt={cleat.cleatName} src={cleat.imageURL} height="70px" width="100px" />
                                    </td>
                                    <td className="cleat-name-col">{cleat.cleatName}</td>
                                    <td className="rating-col">{cleat.brand}</td>
                                    <td className="year-col">{cleat.releaseYear}</td>
                                    <td className="rating-col">{cleat.rating}</td>
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
            </div>
        </>
    )
};

export default CleatTable;