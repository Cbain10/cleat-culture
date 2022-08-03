import React, { useState } from "react";
import { dummyData } from "../../dummyData";
import './CleatTable.css';

const CleatTable = () => {

    const [data, setData] = useState([...dummyData]);

    const onAddCleatClick = () => {
        // modal needs to pop up
        const uid = Math.random();
        const newCleat = {
            "name": "Mizuno Morelia Neo ii KL",
            "brand": "Mizuni",
            "color": "white",
            "rating": 7,
            "year": "2012",
            "photo": "https://laz-img-sg.alicdn.com/p/e55ba53096902fc6ba68eae2e0db5261.jpg",
            "uid": `${uid}`
        };
        setData([...data, newCleat]);
    }

    const onAddCleatSumbit = () => {
        // pushes to data
        // exits modal
        // rerenders
    }

    const onDeleteCleatClick = (id) => {
        setData(data => 
            data.filter(cleat => {
                return cleat.uid != id;
            })
        );
    }

    return (
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
                            onClick={onAddCleatClick}>
                                <p>+ Add Cleat</p>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
};

export default CleatTable;