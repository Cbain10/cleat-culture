import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import './CleatPage.css';
import { dynamoCleatService } from '../../services/serverless/DynamoCleatService';
import ClipLoader from 'react-spinners/ClipLoader';

const CleatPage = () => {

    const location = useLocation();
    const pathname = location.pathname;
    const cleatName = pathname.substring(pathname.lastIndexOf('/') + 1);

    const [cleat, setCleat] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let formattedName = cleatName;
        if (cleatName.includes("%")) {
            formattedName = cleatName.replace('%20', ' ');
        }
        dynamoCleatService.getCleatByName(formattedName)
            .then((response) => {
                setCleat(response[0]);
                setLoading(false);
            })
    }, [cleatName]);

    return (
        <>
            {loading &&
                <ClipLoader
                    color={'red'}
                    loading={true}
                    size={150}
                    aria-label='Loading Spinner'
                />
            }
            {!loading &&
                <div className="cleat-section">
                    <h2>{cleat.cleatName}</h2>
                    <img alt={cleat.cleatName} src={cleat.imageUrl} width="400px" />
                    <div className="cleat-specs">
                        <p>Brand - {cleat.brand}</p>
                        <p>Overall - { ((cleat.comfort + cleat.width + cleat.lockdown) / 3).toFixed(1) }</p>
                        <p>Comfort - {cleat.comfort}</p>
                        <p>Width - {cleat.width}</p>
                        <p>Lockdown - {cleat.lockdown}</p>
                        <p>Upper - {cleat.upper}</p>
                    </div>
                </div>
            }
        </>
    )
}

export default CleatPage;