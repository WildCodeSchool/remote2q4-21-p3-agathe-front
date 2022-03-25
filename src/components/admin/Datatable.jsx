import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { productColumns, userColumns, userRows } from "../../dataTableSource";
import { Link } from "react-router-dom";
import "./Datatable.css";
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_URL_SERVER;

const Datatable = () => {
    const [rows, setRows] = React.useState([])
    const [columns, setColumns] = React.useState([])
    const [path, setPath] = React.useState('')

    const getProducts = () => {
        axios
            .get(`${BASE_URL}/api/products`)
            .then((response) => setRows(response.data));
    }

    const getProductId = (row) => row.ProductID;
    const getUserId = (row) => row.id;

    React.useEffect(() => {
        setPath(window.location.pathname)
    }, [window.location.pathname]);

    React.useEffect(() => {
        if (path === '/users') {
            setRows(userRows);
            setColumns(userColumns)
        } else if (path === '/products') {
            setRows(getProducts());
            setColumns(productColumns)
            console.log(rows)
        }
    }, [path]);

    const actionColumn = [
        {
            field: "action", headerName: "Action", width: 200, renderCell: () => {
                return (
                    <div className="cellAction">
                        <Link to={`${path}/test`} style={{ textDecoration: "none" }}>
                        <div className="viewButton">Voir</div>
                        </Link>
                        <Link to={`${path}`} style={{ textDecoration: "none" }}>
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
                Liste des {path === '/products' ? 'produits' : 'utilisateurs'}
                <Link to="/users/new" className="datatableLink">
                    Ajouter
                </Link>
            </div>
            <DataGrid
                rows={rows ?? []}
                columns={columns.concat(actionColumn)}
                pageSize={20}
                rowsPerPageOptions={[10]}
                checkboxSelection
                getRowId={path === '/products' ? getProductId : getUserId}
            />
        </div>
    )
}

export default Datatable