import React, { useState } from "react";
import NumberPicker from 'react-widgets/NumberPicker';
import './Chooser.css';

const Chooser = () => {

    // meets criteria
    const [width, setWidth] = useState(5);
    const [upper, setUpper] = useState('knit');
    const [comfort, setComfort] = useState(5);
    const [lockdown, setLockdown] = useState(5);

    const uppers = [
        {value: 'knit', text: "Knit"},
        {value: 'leather', text: "Leather"},
        {value: 'synthetic', text: 'Synthetic'}
    ];

    const options = uppers.map((option) => {
        return <option value={option.value}>{option.text}</option>
    });

    const getCleatsHandler = () => {
        // TODO make api gateway call here
        console.log(width);
        console.log(comfort);
        console.log(lockdown);
        console.log(upper);

        /*

            TODO
                write lambda to get all cleats above criteria
                connect lambda to dynamodb
                set up api gateway 
                connect api gateway to lambda
                write call to api gateway

        */
    }

    return (
        <div>
            <h2>Let's find the right cleats for you!</h2>

            <div className="width-section">
                <h3>Width</h3>
                <NumberPicker
                    defaultValue={5}
                    max={10}
                    min={0}
                    onChange={width => setWidth(width)}
                />
            </div>
            <div className="comfort-section">
                <h3>Comfort</h3>
                <NumberPicker
                    defaultValue={5}
                    max={10}
                    min={0}
                    onChange={comfort => setComfort(comfort)}
                />
            </div>
            <div className="lockdown-section">
                <h3>Lockdown</h3>
                <NumberPicker
                    defaultValue={5}
                    max={10}
                    min={0}
                    onChange={lockdown => setLockdown(lockdown)}
                />
            </div>

            <div className="upper-section">
                <h3>Upper</h3>
                <select
                    value={upper}
                    onChange={(e) => setUpper(e.target.value)}
                >{options}</select>    
            </div>
            <br />

            <button className="get-cleats-button" onClick={getCleatsHandler}>Get Best Cleat</button>

        </div>
    )
}

export default Chooser;