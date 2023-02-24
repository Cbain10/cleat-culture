import React, { useState } from "react";
import './CleatTable.css';
import { useEffect } from "react";
import { cleatService } from "../../services/CleatService";
import { DataTable } from "../dataTable/DataTable";

const CleatTable = () => {

    const [data, setData] = useState([]);
    // const [showAddCleatModal, setShowAddCleatModal] = useState(false);
    // const [ascending, setAscending] = useState(false);

    /*  ideally the table component should just be a reusable component... non specific 
        Need to find table component that can display (and maybe sort) the cleats - images were issues****

        what else could use a table...?
        if its just like a kendo table or react table, should only need styling. 
        if more custom, again make it's own component - but needs to sort based off parameters/generics

        add a wrapper for this component which handles the api calls and gets the data to pass in
        all sorting should be taken care of in the generic table component
        all data fetching and data formating should be done in parent component

        EXAMPLE
            const CleatTable = {
                // fetches data from cleatService
                cleatData = cleatService.getCleats()...
                
                return (
                    <GenericTable data={cleatData} />
                )
            }

            const Home = {
                return (
                    <CleatTable />
                )
            }
    */
    useEffect(() => {
        cleatService.getAllCleats()
            .then((response) => {
                setData(response.data);
            })
    }, []);

    const columns = [
        {
            field: 'imageURL',
            headerName: 'Image',
            type: 'imgage',
            width: 200,
            renderCell: (params) => <img src={params.value} style={{height: 70, width: 100, justifyContent: "center", alignContent: "center"}} alt="bacon" />
        },
        {field: 'cleatName', headerName: 'Cleat', width: 600},
        {field: 'brand', headerName: 'Brand', width: 140},
        {field: 'releaseYear', headerName: 'Year', width: 100},
        {field: 'rating', headerName: 'Rating', type: 'number', width: 100},
    ]

    return (
        <div className="cleat-table">
            <DataTable
                data={data}
                columns={columns}
                rowHeight={70}
                pageSize={10}
            />
        </div>
    )
};

export default CleatTable;