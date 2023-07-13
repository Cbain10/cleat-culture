import React, { useState } from "react";
import Modal from "../addCleatModal/Modal";
import './CleatTable.css';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { dynamoCleatService } from "../../services/serverless/DynamoCleatService";
import ClipLoader from 'react-spinners/ClipLoader';

const CleatTable = () => {

    const [data, setData] = useState([]);
    const [showAddCleatModal, setShowAddCleatModal] = useState(false);
    const [ascending, setAscending] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dynamoCleatService.getAllCleats()
            .then((response) => {
                setData(response);
                setLoading(false);
            })
    }, []);

    // SORTING -----------------------------------------------
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
    // END SORTING -------------------------------------------

    return (
        <>
            {loading &&
                <ClipLoader
                    color={'red'}
                    loading={true}
                    size={150}
                    aria-label='Loading Spinner'
                />
            }
            {!loading &&
                <div className="cleat-table">
                    <table>
                        <tbody>
                            <tr className="header-row">
                                <th className="image-col">Image</th>
                                <th onClick={sortCleats}>Cleat</th>
                                <th onClick={sortByBrand}>Brand</th>
                                <th>Comfort</th>
                                <th>Width</th>
                                <th>Lockdown</th>
                                <th>Upper</th>
                            </tr>
                            {data.map((cleat, key) => {
                                return (
                                    <tr className={`item-row ${key % 2 === 0 ? "dark" : "light"}`} key={key}>
                                        <td className="image-col">
                                            <img alt={cleat.cleatName} src={cleat.imageUrl} width="100px" />
                                        </td>
                                        <td className="cleat-name-col">
                                            <Link to={`/cleat/${cleat.id}`}>{cleat.cleatName}</Link>
                                        </td>
                                        <td className="rating-col">{cleat.brand}</td>
                                        <td className="year-col">{cleat.comfort}</td>
                                        <td className="rating-col">{cleat.width}</td>
                                        <td className="rating-col">{cleat.lockdown}</td>
                                        <td className="rating-col">{cleat.upper}</td>
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
                        // handleSumbit={onAddCleatSumbit}
                        show={showAddCleatModal}
                    />}
                </div>
            }
        </>
    )
};

export default CleatTable;