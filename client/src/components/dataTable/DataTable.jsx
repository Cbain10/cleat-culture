import React from "react";
import { DataGrid } from '@mui/x-data-grid';

    // TS breaks app? Can't find files????
// export interface DataTableProps {
//     data: any[];
//     columns: any[];
//     rowHeight?: Number;
//     pageSize?: Number;
// };

export const DataTable = ({data, columns, rowHeight, pageSize}) => {
    return (
        <div style={{flexGrow: 1}} >
            <DataGrid
                rows={data}
                columns={columns}
                rowHeight={rowHeight || 70}
                pageSize={pageSize || 10}
            />
        </div>
    )
}