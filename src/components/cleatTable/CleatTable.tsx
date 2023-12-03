import { useState } from "react";
import Modal from "../addCleatModal/Modal";
import './CleatTable.css';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ClipLoader from 'react-spinners/ClipLoader';
import { dynamoCleatService } from "../../services/serverless/DynamoCleatService";
import { Cleat } from "../../types/types";

const CleatTable = () => {

    const [data, setData] = useState<Cleat[]>([]);
    const [showAddCleatModal, setShowAddCleatModal] = useState<boolean>(false);
    const [ascending, setAscending] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        dynamoCleatService.getAllCleats()
            .then((response) => {
                setData(response);
                setLoading(false);
            })
    }, []);

    // SORTING -----------------------------------------------
    const sortCleats = () => {
        const newData = [...data];
        if (!ascending) {
            newData.sort((a: Cleat, b: Cleat) => {
                return a.cleatName > b.cleatName ? 1 : -1;
            });
        } else {
            newData.sort((a: Cleat, b: Cleat) => {
                return a.cleatName < b.cleatName ? 1 : -1;
            });
        }
        setAscending(!ascending);
        setData(newData);
    }
    const sortByBrand = () => {
        const newData = [...data];
        if (!ascending) {
            newData.sort((a: Cleat, b: Cleat) => {
                if (a.brand === b.brand) {
                    return a.cleatName > b.cleatName ? 1 : -1;
                }
                return a.brand > b.brand ? 1 : -1;
            });
        } else {
            newData.sort((a: Cleat, b: Cleat) => {
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
                                <th>Overall</th>
                                <th>Comfort</th>
                                <th>Width</th>
                                <th>Lockdown</th>
                                <th>Upper</th>
                            </tr>
                            {data.map((cleat: Cleat, key) => {
                                return (
                                    <tr className={`item-row ${key % 2 === 0 ? "dark" : "light"}`} key={key}>
                                        <td className="image-col">
                                            <img alt={cleat.cleatName} src={cleat.imageUrl} width="100px" />
                                        </td>
                                        <td className="cleat-name-col">
                                            <Link to={`/cleat/${cleat.id}`}>{cleat.cleatName}</Link>
                                        </td>
                                        <td className="rating-col">{cleat.brand}</td>
                                        <td className="year-col">{ ((cleat.comfort + cleat.width + cleat.lockdown) / 3).toFixed(1) }</td>
                                        <td className="year-col">{cleat.comfort}</td>
                                        <td className="rating-col">{cleat.width}</td>
                                        <td className="rating-col">{cleat.lockdown}</td>
                                        <td className="rating-col">{(cleat.upper).toUpperCase()}</td>
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
                        // show={showAddCleatModal}
                    />}
                </div>
            }
        </>
    )
};

export default CleatTable;