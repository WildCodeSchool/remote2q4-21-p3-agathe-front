import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
    const [path, setPath] = React.useState("");

    const getRows = (type) => {
        let url
        if (type === 'deliveries')
            url = `${BASE_URL}/api/orders/pending_deliveries`
        else
            url = `${BASE_URL}/api/${type}`
        axios
            .get(url, user.getOptions())
            .then((response) => setRows(response.data));
    };

    const getOrderId = (row) => row.id;
    const getProductId = (row) => row.ProductID;
    const getUserId = (row) => row.id;

    React.useEffect(() => {
        setPath(window.location.pathname);
    }, [window.location.pathname]);

    React.useEffect(() => {
        console.log(path);
        if (path === `${PATH_ADMIN}/deliveries`) {
            setType("deliveries");
            getRows("deliveries");
            setColumns(ordersColumns);
        } else if (path === `${PATH_ADMIN}/users`) {
            setType("users");
            getRows("users");
            setColumns(userColumns);
        } else if (path === `${PATH_ADMIN}/orders`) {
            setType("orders");
            getRows("orders");
            setColumns(ordersColumns);
        } else if (path === `${PATH_ADMIN}/products`) {
            setType("products");
            getRows("products");
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
                        {type === "products" && (
                            <Link
                                to={`${path}/${params.row.ProductID}`}
                                style={{ textDecoration: "none" }}
                            >
                                <div className="viewButton">Voir</div>
                            </Link>
                        )}
                        {type !== "products" && (
                            <Link
                                to={`${path}/${params.row.id}`}
                                style={{ textDecoration: "none" }}
                            >
                                <div className="viewButton">Voir</div>
                            </Link>
                        )}
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
            <DataGrid
                rows={rows ?? []}
                columns={columns.concat(actionColumn)}
                pageSize={20}
                rowsPerPageOptions={[10]}
                checkboxSelection
                getRowId={
                    {
                        orders: getOrderId,
                        products: getProductId,
                        users: getUserId,
                    }[type]
                }
            />
        </div>
    );
};

export default Datatable;
