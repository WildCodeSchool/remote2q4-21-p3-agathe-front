import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../dataTableSource";
import { Link } from "react-router-dom";
import "./Datatable.css";

const Datatable = () => {

    const actionColumn = [
        {
            field: "action", headerName: "Action", width: 200, renderCell: () => {
                return (
                    <div className="cellAction">
                        <Link to="/users/test" style={{ textDecoration: "none" }}>
                        <div className="viewButton">Voir</div>
                        </Link>
                        <Link to="/users" style={{ textDecoration: "none" }}>
                        <div className="deleteButton">Supprimer</div>
                        </Link>
                    </div>
                );
            },
        },
    ];

    return (
        <div className='datatable'>
            <div className="datatableTitle">
                Ajouter un client
                <Link to="/users/new" className="datatableLink">
                    Ajouter
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