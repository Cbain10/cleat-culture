import React  from "react";
import './Sorting.css';

const Sorting = () => {
    
    const options = [
        "Year - ascending",
        "Year - descending",
        "Brand",
        "Color",
        "Rating",
    ];

    return (
        <span>
            <span>Sort by </span>
            <select className="sorting-dropdown" name="filter" id="cleats">
                {options.map((val, key) => {
                    return (
                        <option value={key}>{val}</option>
                    )
                })}
            </select>
        </span>
    )
};

export default Sorting;