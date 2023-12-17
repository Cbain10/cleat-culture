import { useEffect, useState } from 'react';
import { Nav } from '../../../components/nav/Nav';
import './CleatArchive.css';
import { dynamoCleatService } from '../../../services/serverless/DynamoCleatService';
import { Cleat } from '../../../types/types';
import { ClipLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

const CleatTable = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [cleats, setCleats] = useState<Cleat[]>([]);

    useEffect(() => {
        dynamoCleatService.getAllCleats()
            .then(response => {
                setCleats(response)
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, []);

    const capitalizeFirstLetter = (word: string) => {
        if (word.length < 1) return;
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return (
        <div className='archive-container'>
            <Nav />
            <h1>Archive</h1>
            {loading &&
                <ClipLoader
                    color={'#5fe4fe'}
                    loading={true}
                    size={150}
                    aria-label='Loading Spinner'
                />
            }
            {(!loading && cleats) &&
                <>
                    {cleats.map((cleat) => {
                        return (
                            <Link className='cleat-row' to={cleat.cleatName}>
                                {/* <div className='cleat-row'> */}
                                    <img src={cleat.imageUrl} width={100}></img>
                                    <span className='brand'>{cleat.brand}</span>
                                    <span className='model'>{cleat.cleatName}</span>
                                    <span className='data'>{capitalizeFirstLetter(cleat.upper)}</span>
                                    <span className='data'>{cleat.lockdown} - Lockdown</span>
                                    <span className='data'>{cleat.comfort} - Comfort</span>
                                    <span className='data'>{cleat.width} - Width</span>
                                {/* </div> */}
                            </Link>
                        )
                    })}
                </>
            }
        </div>
    )
};

export default CleatTable;