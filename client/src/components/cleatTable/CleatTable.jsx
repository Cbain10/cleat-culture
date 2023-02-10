import React, { useState } from "react";
import './CleatTable.css';
import { useEffect } from "react";
import { cleatService } from "../../services/CleatService";
import { DataGrid } from '@mui/x-data-grid';

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

    return (
        <div className="cleat-table">
            <DataGrid 
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
};

export default CleatTable;