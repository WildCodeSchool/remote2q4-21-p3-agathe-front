import "./Datatable.css";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../dataTableSource";
import { Link } from "react-router-dom";

const Datatable = () => {

    const actionColumn = [
        {
            field: "action", headerName: "Action", width: 200, renderCell: () => {
                return (
                    <div className="cellAction">
                        <Link to="/users/test" style={{ textDecoration: "none" }}>
                        <div className="viewButton">View</div>
                        </Link>
                        <Link to="/users" style={{ textDecoration: "none" }}>
                        <div className="deleteButton">Delete</div>
                        </Link>
                    </div>
                );
            },
        },
    ];

    return (
        <div className='datatable'>
            <div className="datatableTitle">
                Add New User
                <Link to="/users/new" className="datatableLink">
                    Add New
                </Link>
            </div>
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={20}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div>
    )
}

export default Datatable