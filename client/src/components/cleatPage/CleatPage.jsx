// import Axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { cleatService } from "../../services/CleatService";

const CleatPage = () => {

    const location = useLocation();
    const pathname = location.pathname;
    const cleatId = pathname.substring(pathname.lastIndexOf('/') + 1);

    const [cleat, setCleat] = useState(null);

    useEffect(() => {
        cleatService.getCleat(cleatId)
            .then((response) => {
                console.log(response.data);
                setCleat(response.data);
            })
    }, []);

    return (
        <>
            <h1>CLEATS</h1>
            {cleat !== null && <p>{cleat}</p>}
        </>
    )
}

export default CleatPage;