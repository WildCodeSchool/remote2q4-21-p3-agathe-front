import React from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import {
    ordersColumns,
    productColumns,
    userColumns,
} from "../../dataTableSource";
import { useUser } from "../../contexts/UserProvider";
import "./Datatable.css";

const BASE_URL = process.env.REACT_APP_URL_SERVER;
const PATH_ADMIN = process.env.REACT_APP_PATH_ADMIN;

const Datatable = () => {
    const user = useUser();
    const [type, setType] = React.useState(null);
    const [rows, setRows] = React.useState(null);
    const [columns, setColumns] = React.useState([]);
    const { pathname } = useLocation();

    const deleteProduct = (id) => {
        // modal
        //axios.delete
        let url = `${BASE_URL}/api/products/${id}`;
        axios
        .delete(url, user.getOptions())
        .then((response) => getRows('products'))
    }
    const getRows = (type) => {
        let url;
        if (type === "deliveries")
            url = `${BASE_URL}/api/orders/pending_deliveries`;
        else url = `${BASE_URL}/api/${type}`;
        axios
            .get(url, user.getOptions())
            .then((response) => setRows(response.data));
    };

    React.useEffect(() => {
        if (!pathname) {
            return;
        }
        if (pathname === `${PATH_ADMIN}/deliveries`) {
            setType("deliveries");
            getRows("deliveries");
            setColumns(ordersColumns);
        } else if (pathname === `${PATH_ADMIN}/users`) {
            setType("users");
            getRows("users");
            setColumns(userColumns);
        } else if (pathname === `${PATH_ADMIN}/orders`) {
            setType("orders");
            getRows("orders");
            setColumns(ordersColumns);
        } else if (pathname === `${PATH_ADMIN}/products`) {
            setType("products");
            getRows("products");
            setColumns(productColumns);
        }
    }, [pathname]);

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link
                            to={`${pathname}/${params.row.id}`}
                            style={{ textDecoration: "none" }}
                            >
                            <div className="viewButton">Voir</div>
                        </Link>
                        <Link
                            to=""
                            onClick={() => deleteProduct(params.row.id)}
                            style={{ textDecoration: "none" }}
                        >
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
                {
                    {
                        deliveries: "commandes à expédier",
                        orders: "commandes",
                        products: "produits",
                        users: "utilisateurs",
                    }[type]
                }
                <Link
                    to={`${PATH_ADMIN}/${type}/new`}
                    className="datatableLink"
                >
                    Ajouter
                </Link>
            </div>
            {type === "deliveries" ? (
                <DataGrid
                    rows={rows ?? []}
                    columns={columns.concat(actionColumn)}
                    pageSize={20}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                />
            ) : null}
            {type === "users" ? (
                <DataGrid
                    rows={rows ?? []}
                    columns={columns.concat(actionColumn)}
                    pageSize={20}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                />
            ) : null}
            {type === "orders" ? (
                <DataGrid
                    rows={rows ?? []}
                    columns={columns.concat(actionColumn)}
                    pageSize={20}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                />
            ) : null}
            {type === "products" ? (
                <DataGrid
                    rows={rows ?? []}
                    columns={columns.concat(actionColumn)}
                    pageSize={20}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                />
            ) : null}
        </div>
    );
};

export default Datatable;
