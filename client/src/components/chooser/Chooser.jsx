import React, { useState } from "react";
import NumberPicker from 'react-widgets/NumberPicker';
import { dynamoCleatService } from '../../services/serverless/DynamoCleatService'
import './Chooser.css';

const Chooser = () => {

    const [width, setWidth] = useState(5);
    const [upper, setUpper] = useState('any');
    const [comfort, setComfort] = useState(5);
    const [lockdown, setLockdown] = useState(5);
    const [result, setResult] = useState([]);

    const uppers = [
        {value: 'knitted', text: "Knitted"},
        {value: 'leather', text: "Leather"},
        {value: 'synthetic', text: 'Synthetic'},
        {value: 'any', text: 'Any'}
    ];

    const options = uppers.map((option) => {
        return <option value={option.value}>{option.text}</option>
    });

    const getCleatsHandler = () => {
        dynamoCleatService.axiosGetCleats(width, comfort, lockdown, upper)
            .then((response) => setResult(response));
    }

    const resetValuesHandler = () => {
        setComfort(5);
        setWidth(5);
        setLockdown(5);
        setUpper('any');
    }

    return (
        <div className='chooser-container'>
            <div className='aspects-section'>
                <h2>Let's find the right cleats for you!</h2>

                <div className="width-section">
                    <h3>Width</h3>
                    <NumberPicker
                        value={width}
                        max={10}
                        min={0}
                        onChange={width => setWidth(width)}
                    />
                </div>
                <div className="comfort-section">
                    <h3>Comfort</h3>
                    <NumberPicker
                        value={comfort}
                        max={10}
                        min={0}
                        onChange={comfort => setComfort(comfort)}
                    />
                </div>
                <div className="lockdown-section">
                    <h3>Lockdown</h3>
                    <NumberPicker
                        value={lockdown}
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

                <button className="get-cleats-button" onClick={getCleatsHandler}>Get Cleats</button>
                <br></br>
                <button className="reset-values-button" onClick={resetValuesHandler}>Reset Values</button>
            </div>

            <div className='results-section'>
                <h1>Results:</h1>
                <br />
                {result.map((boot) => {
                    return <h3>{boot.brand} - {boot.cleatName}</h3>
                })}
            </div>
        </div>
    )
}

export default Chooser;