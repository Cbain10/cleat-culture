import React, { useState } from "react";
import LookupCleatButton from "../../components/lookupCleatButton/LookupCleatButton";
import RecommendCleatButton from "../../components/recommendCleatButton/RecommendCleatButton";
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
        // aspect is already set with correct value
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({"aspect":aspect});
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("https://wh3ke50kv4.execute-api.us-east-2.amazonaws.com/dev", requestOptions)
            .then(response => response.text())
            .then(result => setResult(JSON.parse(result).body))
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <div className="button-container">
                <LookupCleatButton />
                <div className="divider"/>
                <RecommendCleatButton />
            </div>
            <div>
                <p>What matters most for your cleats?</p>
                <select
                    value={aspect}
                    onChange={(e) => setAspect(e.target.value)}
                >{options}</select>
                <button onClick={getBestCleatHandler}>Get Best Cleat</button>
            </div>
            <h1>
                RESULT: {result}
            </h1>
        </>
    )
}

export default Home;