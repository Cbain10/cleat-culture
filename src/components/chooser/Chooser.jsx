import React, { useState } from "react";
import { dynamoCleatService } from '../../services/serverless/DynamoCleatService';
import ClipLoader from 'react-spinners/ClipLoader';
import { Link } from "react-router-dom";
import './Chooser.css';
import { Slider } from "@mui/material";

const Chooser = () => {

    const [width, setWidth] = useState(3);
    const [comfort, setComfort] = useState(3);
    const [lockdown, setLockdown] = useState(3);
    const [upper, setUpper] = useState('any');
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);

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
        setLoading(true);
        dynamoCleatService.getCleatsByValue(width*2, comfort*2, lockdown*2, upper)
            .then((response) => {
                setResult(response);
                setLoading(false);
            });
    }

    const resetValuesHandler = () => {
        setComfort(3);
        setWidth(3);
        setLockdown(3);
        setUpper('any');
    }

    const marks = [
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
        { value: 4, label: '4' },
        { value: 5, label: '5' }
    ]

    return (
        <div className='chooser-container'>
            <h2>Let's find the right cleats for you!</h2>
            <div className='aspects-container'>

                <div className="width-section">
                    <h3>Width (1-5)</h3>
                    <Slider
                        value={width}
                        onChange={width => setWidth(width.target.value)}
                        step={1}
                        marks={marks}
                        min={1}
                        max={5}
                    />

                </div>
                <div className="comfort-section">
                    <h3>Comfort (1-5)</h3>
                    <Slider
                        value={comfort}
                        onChange={e => setComfort(e.target.value)}
                        step={1}
                        marks={marks}
                        min={1}
                        max={5}
                    />
                </div>
                <div className="lockdown-section">
                    <h3>Lockdown (1-5)</h3>
                    <Slider
                        value={lockdown}
                        onChange={e => setLockdown(e.target.value)}
                        step={1}
                        marks={marks}
                        min={1}
                        max={5}
                    />
                </div>

                <div className="upper-section">
                    <h3>Upper</h3>
                    <select
                        className="upper-options"
                        value={upper}
                        onChange={(e) => setUpper(e.target.value)}
                    >{options}</select>    
                </div>
                <br />

                <div className="reset-container">
                    <span className="reset-button" onClick={resetValuesHandler}>Reset Values</span>
                    <span className="reset-button" onClick={() => setResult([])}>Reset Results</span>
                </div>
                <div className="get-container">
                    <div className="get-cleats-button" onClick={getCleatsHandler}>Get Cleats!</div>
                </div>
            </div>

            <div className='results-section'>
                {loading && 
                    <ClipLoader
                       color={'red'}
                       loading={true}
                       size={150}
                       aria-label='Loading Spinner'
                    />
                }
                {!loading &&    
                    <div className='result-cleats'>
                        <h1>Results:</h1>
                        <br />
                        {result.map((boot) => {
                            return (
                                <Link to={`/cleat/${boot.cleatName}`}>
                                    <div className="cleat-item">
                                        {boot.imageUrl &&
                                            <img className='cleat-image' src={boot.imageUrl} width={100} alt="idk" />
                                        }
                                        <h3 className="cleat-label">{boot.brand} {boot.cleatName}</h3>
                                        {/* <div className="val-container">
                                            <p className="cleat-item-vals">Width: {boot.width}</p>
                                            <p className="cleat-item-vals">Comfort: {boot.comfort}</p>
                                            <p className="cleat-item-vals">Lockdown: {boot.lockdown}</p>
                                            <p className="cleat-item-vals">Upper: {boot.upper}</p>
                                        </div> */}
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                }
            </div>
        </div>
    )
}

export default Chooser;