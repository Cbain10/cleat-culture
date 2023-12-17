import { useState } from "react";
import ClipLoader from 'react-spinners/ClipLoader';
import { Link } from "react-router-dom";
import './Recommender.css';
import { Slider } from "@mui/material";
import { dynamoCleatService } from "../../../services/serverless/DynamoCleatService";
import { Cleat } from "../../../types/types";
import { Nav } from "../../../components/nav/Nav";

const Recommender = () => {

    const [width, setWidth] = useState<number>(3);
    const [comfort, setComfort] = useState<number>(3);
    const [lockdown, setLockdown] = useState<number>(3);
    const [upper, setUpper] = useState<string>('any');
    const [results, setResults] = useState<Cleat[]>();
    const [loading, setLoading] = useState<boolean>(false);

    const uppers = [
        {value: 'knitted', text: "Knitted"},
        {value: 'leather', text: "Leather"},
        {value: 'synthetic', text: 'Synthetic'},
        {value: 'any', text: 'Any'}
    ];

    const options = uppers.map((option) => {
        return <option key={option.value} value={option.value}>{option.text}</option>
    });

    const getCleatsHandler = () => {
        setLoading(true);
        dynamoCleatService.getCleatsByValue(width*2, comfort*2, lockdown*2, upper)
            .then((response) => {
                setResults(response);
                setLoading(false);
            });
    }

    const resetValuesHandler = () => {
        setComfort(3);
        setWidth(3);
        setLockdown(3);
        setUpper('any');
        setResults(undefined);
    }

    const marks = [
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
        { value: 4, label: '4' },
        { value: 5, label: '5' }
    ]

    const SelectionsSection = () => {
        return (
            <div className='selections-container'>
                <div className="selection-category">
                    <h3 className="category">Width</h3>
                    <Slider
                        value={width}
                        onChange={(e, val) => {
                            console.log(e);
                            setWidth(Array.isArray(val) ? val[0] : val)
                        }}
                        step={1}
                        marks={marks}
                        min={1}
                        max={5}
                    />
                </div>
                <div className="selection-category">
                    <h3 className="category">Comfort</h3>
                    <Slider
                        value={comfort}
                        onChange={(e, val) => {
                            console.log(e);
                            setComfort(Array.isArray(val) ? val[0] : val)
                        }}
                        step={1}
                        marks={marks}
                        min={1}
                        max={5}
                    />
                </div>
                <div className="selection-category">
                    <h3 className="category">Lockdown</h3>
                    <Slider
                        value={lockdown}
                        onChange={(e, val) => {
                            console.log(e);
                            setLockdown(Array.isArray(val) ? val[0] : val)
                        }}
                        step={1}
                        marks={marks}
                        min={1}
                        max={5}
                    />
                </div>
                <div className="upper-section">
                    <h3 className="category">Upper</h3>
                    <select
                        className="selector"
                        value={upper}
                        onChange={(e) => setUpper(e.target.value)}
                    >{options}</select>    
                </div>
                <button className="get-cleats-btn" onClick={getCleatsHandler}>Get Cleats</button>
            </div>
        )
    }

    const LoadingSpinner = () => {
        return (
            <div className="spinner">
                <ClipLoader
                    color={'#5fe4fe'}
                    loading={true}
                    size={150}
                    aria-label='Loading Spinner'
                />
            </div>
        )
    }

    const ResultsSection = () => {
        return (
            <div className='results-section'>   
                <h1>Results:</h1>
                <button
                    className="reset-btn"
                    onClick={resetValuesHandler}    
                >Reset</button>
                <br />
                {results?.length === 0 && 
                    <div>Sorry, no results</div>
                }
                {results?.length && 
                    results?.map((boot) => {
                        return (
                            <Link className='cleat-item' key={boot.cleatName} to={`/soccer/recommender/${boot.cleatName}`}>
                                {boot.imageUrl &&
                                    <img className='cleat-image' src={boot.imageUrl} width={100} alt="idk" />
                                }
                                <h3 className="cleat-label">{boot.brand} {boot.cleatName}</h3>
                            </Link>
                        )
                    })}
            </div>
        )
    }

    return (
        <>
            <Nav />
            <div className="recommender-container">
                {(!results && !loading) &&
                    SelectionsSection()
                }
                {loading &&
                    LoadingSpinner()
                }
                {results &&
                    ResultsSection()
                }
            </div>
        </>
    )
}





export default Recommender;