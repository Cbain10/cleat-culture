import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { cleatService } from "../../services/CleatService";

const CleatPage = () => {

    const location = useLocation();
    const pathname = location.pathname;
    const cleatId = pathname.substring(pathname.lastIndexOf('/') + 1);

    const [cleat, setCleat] = useState();

    useEffect(() => {
        cleatService.getCleat(cleatId)
            .then((response) => {
                setCleat(response.data[0]);
            })
    }, [cleatId]);

    return (
        <>
            {cleat && 
                <div>
                    <img alt={cleat.cleatName} src={cleat.imageURL} height="280px" width="400px" />
                    <h3>{cleat.cleatName}</h3>
                </div>
            }
        </>
    )
}

export default CleatPage;