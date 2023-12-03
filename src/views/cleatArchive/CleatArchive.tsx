import { useState } from "react";
import './CleatArchive.css';
// import { useEffect } from "react";
import ClipLoader from 'react-spinners/ClipLoader';
// import { dynamoCleatService } from "../../services/serverless/DynamoCleatService";
// import { Cleat } from "../../types/types";

const CleatTable = () => {

    // const [data, setData] = useState<Cleat[]>([]);
    // const [showAddCleatModal, setShowAddCleatModal] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    // useEffect(() => {
    //     dynamoCleatService.getAllCleats()
    //         .then((response) => {
    //             setData(response);
    //             setLoading(false);
    //         })
    // }, []);

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
                <div className="cleat-table">
                    CLEAT ARCHIVE
                </div>
            }
        </>
    )
};

export default CleatTable;