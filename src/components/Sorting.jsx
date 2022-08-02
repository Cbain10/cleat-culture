import React  from "react";

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
            <select name="filter" id="cleats">
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