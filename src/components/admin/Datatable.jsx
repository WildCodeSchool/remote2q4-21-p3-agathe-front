import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { ordersColumns, productColumns, userColumns } from "../../dataTableSource";
import { Link } from "react-router-dom";
import "./Datatable.css";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_URL_SERVER;

const Datatable = () => {
    const [type, setType] = React.useState(null);
    const [rows, setRows] = React.useState(null);
    const [columns, setColumns] = React.useState([]);
    const [path, setPath] = React.useState("");

    const getRows = (type) => {
        axios
            .get(`${BASE_URL}/api/${type}`)
            .then(response => setRows(response.data));
    }

    const getOrderId = (row) => row.OrderId;
    const getProductId = (row) => row.ProductID;
    const getUserId = (row) => row.id;

    React.useEffect(() => {
        setPath(window.location.pathname);
    }, [window.location.pathname]);

    React.useEffect(() => {
        console.log(path);
        if (path === "/admin/users") {
            setType("users");
            getRows('users');
            setColumns(userColumns);
        } else if (path === "/admin/orders") {
            setType("orders");
            getRows('orders');
            setColumns(ordersColumns);
        } else if (path === "/admin/products") {
            setType("products");
            getRows('products');
            setColumns(productColumns);
        }
        console.log(rows);
    }, [path]);

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link
                            to={`${path}/${params.row.id}`}
                            style={{ textDecoration: "none" }}
                        >
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
        <div className="datatable">
            <div className="datatableTitle">
                Liste des{" "}
                {{orders: 'commandes', products:'produits', users: 'utilisateurs'}[type]}
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
                getRowId={{orders:getOrderId, products:getProductId, users:getUserId}[type]}
            />
        </div>
    );
};

export default Datatable;
