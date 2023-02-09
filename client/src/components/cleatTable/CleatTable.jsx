import React, { useState } from "react";
import Modal from "../addCleatModal/Modal";
import './CleatTable.css';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { cleatService } from "../../services/CleatService";

const CleatTable = () => {

    const [data, setData] = useState([]);
    const [showAddCleatModal, setShowAddCleatModal] = useState(false);
    const [ascending, setAscending] = useState(false);

    /*  ideally the table component should just be a reusable component... non specific 
        Need to find table component that can display (and maybe sort) the cleats - images were issues****

        what else could use a table...?
        if its just like a kendo table or react table, should only need styling. 
        if more custom, again make it's own component - but needs to sort based off parameters/generics

        add a wrapper for this component which handles the api calls and gets the data to pass in
        all sorting should be taken care of in the generic table component
        all data fetching and data formating should be done in parent component

        EXAMPLE
            const CleatTable = {
                // fetches data from cleatService
                cleatData = cleatService.getCleats()...
                
                return (
                    <GenericTable data={cleatData} />
                )
            }

            const Home = {
                return (
                    <CleatTable />
                )
            }
    */
    useEffect(() => {
        cleatService.getAllCleats()
            .then((response) => {
                setData(response.data);
            })
    }, []);

    const onAddCleatSumbit = (cleat) => {
        cleatService.addCleat(cleat);
        setShowAddCleatModal(false);
        setData([...data, cleat]);
    }

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
    // END SORTING -------------------------------------------

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
                                    <td className="cleat-name-col">
                                        <Link to={`/cleat/${cleat.id}`}>{cleat.cleatName}</Link>
                                    </td>
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