import React from "react";
import { dummyData } from "../dummyData";
import './CleatTable.css';

const CleatTable = () => {

    const data = dummyData;

    return (
        <table>
            <tbody>
                <tr className="header-row">
                    <th className="image-col">Image</th>
                    <th>Cleat</th>
                    <th>Color</th>
                    <th>Rating</th>
                </tr>
                {data.map((cleat, key) => {
                    return (
                        <tr key={key}>
                            <td className="image-col"></td>
                            <td>{cleat.name}</td>
                            <td>{cleat.color}</td>
                            <td>{cleat.rating}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
};

export default CleatTable;