import React, { useState } from "react";
import LookupCleatButton from "../../components/lookupCleatButton/LookupCleatButton";
import RecommendCleatButton from "../../components/recommendCleatButton/RecommendCleatButton";
import { dynamoCleatService } from "../../services/serverless/DynamoCleatService";
import './Home.css';

const Home = () => {

    const aspects = [
        {value: 'comfort', text: 'Comfort'},
        {value: 'lockdown', text: 'Lockdown'},
        {value: 'wideFeet', text: 'Width'},
        {value: 'barefoot', text: 'Barefoot Feel'}
    ];

    const options = aspects.map((option) => {
        return <option value={option.value}>{option.text}</option>
    })

    const [aspect, setAspect] = useState('');
    const [result, setResult] = useState('');

    const getBestCleatHandler = () => {
        dynamoCleatService.getBestCleat(aspect)
            .then(response => setResult(response));
    }

    return (
        <>
            <div className="button-container">
                <LookupCleatButton />
                <div className="divider"/>
                <RecommendCleatButton />
            </div>
            <div>
                <p className="recommend-header">What matters most for your cleats?</p>
                <select
                    value={aspect}
                    onChange={(e) => setAspect(e.target.value)}
                >{options}</select>
                <button onClick={getBestCleatHandler}>Get Best Cleat</button>
            </div>
            <h1>
                BEST CLEAT FOR {aspect.toUpperCase()}:<br />
                {result}
            </h1>
        </>
    )
}

export default Home;