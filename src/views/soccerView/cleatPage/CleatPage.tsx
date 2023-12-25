import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import './CleatPage.css';
import ClipLoader from 'react-spinners/ClipLoader';
import { dynamoCleatService } from '../../../services/serverless/DynamoCleatService';
import { Cleat } from '../../../types/types';
import { Nav } from '../../../components/nav/Nav';
import { useCleats } from '../../../contexts/CleatContext';

const CleatPage = () => {

    const { cleats } = useCleats();
    console.log('context', cleats);

    const location = useLocation();
    const pathname = location.pathname;
    const cleatName = pathname.substring(pathname.lastIndexOf('/') + 1);

    const [cleat, setCleat] = useState<Cleat>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let formattedName = cleatName;
        if (cleatName.includes("%")) {
            formattedName = cleatName.replaceAll('%20', ' ');
        }
        console.log(formattedName);
        dynamoCleatService.getCleatByName(formattedName)
            .then((response) => {
                console.log(response);
                setCleat(response[0]);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, [cleatName]);

    return (
        <div className="cleat-page-container">
            <Nav />
            {loading &&
                <ClipLoader
                    color={'#5fe4fe'}
                    loading={true}
                    size={150}
                    aria-label='Loading Spinner'
                />
            }
            {(!loading && cleat) &&
                <div className="cleat-section">
                    <h2 className='title'>{cleat.cleatName}</h2>
                    <div className='content'>
                        <img className='left-section' alt={cleat.cleatName} src={cleat.imageUrl} width="400px" />
                        <div className="right-section">
                            <p>Brand - {cleat.brand}</p>
                            <p>Overall - { ((cleat.comfort + cleat.width + cleat.lockdown) / 3).toFixed(1) }</p>
                            <p>Comfort - {cleat.comfort}</p>
                            <p>Width - {cleat.width}</p>
                            <p>Lockdown - {cleat.lockdown}</p>
                            <p>Upper - {cleat.upper}</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default CleatPage;