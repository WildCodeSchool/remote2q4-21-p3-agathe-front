import React from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

const BASE_URL = process.env.REACT_APP_URL_SERVER;
const PATH_ADMIN = process.env.REACT_APP_PATH_ADMIN;

const ListComplete = () => {
    const [rows, setRows] = React.useState(null);
    const id = useParams().id;
    const { pathname } = useLocation();

    React.useEffect(() => {
        let url = `${BASE_URL}/api/orders`;
        if (pathname.startsWith(`${PATH_ADMIN}/users`)) {
            if (id) url = `${BASE_URL}/api/users/${id}/orders`;
        } else if (pathname.startsWith(`${PATH_ADMIN}/products`)) {
            if (id) url = `${BASE_URL}/api/products/${id}/orders`;
        }
        axios
            .get(url, { withCredentials: true, mode: "cors" })
            .then((response) => setRows(response.data));
    }, []);

    const getClassName = (state) => {
        if (state==='En attente') return 'Pending'
        else if (state==='Payé') return 'Approved'
    }

    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">Commande</TableCell>
                        <TableCell className="tableCell">Produit</TableCell>
                        <TableCell className="tableCell">Client</TableCell>
                        <TableCell className="tableCell">Date</TableCell>
                        <TableCell className="tableCell">Montant</TableCell>
                        <TableCell className="tableCell">
                            Payment Method
                        </TableCell>
                        <TableCell className="tableCell">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows &&
                        rows.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell className="tableCell">
                                    {row.id}
                                </TableCell>
                                <TableCell className="tableCell">
                                    <div className="cellWrapper">
                                        <img
                                            src={`${BASE_URL}/assets/${row.picture}`}
                                            alt=""
                                            className="datatableImage"
                                        />
                                        {row.product}
                                    </div>
                                </TableCell>
                                <TableCell className="tableCell">
                                    {row.user_name}
                                </TableCell>
                                <TableCell className="tableCell">
                                    {new Date(
                                        row.order_date
                                    ).toLocaleDateString()}
                                </TableCell>
                                <TableCell className="tableCell">
                                    {row.amount} €
                                </TableCell>
                                <TableCell className="tableCell">
                                    {row.method}
                                </TableCell>
                                <TableCell className="tableCell">
                                    <span className={`status ${getClassName(row.state)}`}>
                                        {row.state}
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

const ListOrder = ({ order }) => {
    const [rows, setRows] = React.useState(null);

    React.useEffect(() => {
        let url = `${BASE_URL}/api/orders/detail/${order}`;
        axios
            .get(url, { withCredentials: true, mode: "cors" })
            .then((response) => setRows(response.data));
    }, []);

    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">Produit</TableCell>
                        <TableCell className="tableCell">Quantité</TableCell>
                        <TableCell className="tableCell">
                            Prix Unitaire
                        </TableCell>
                        <TableCell className="tableCell">Montant</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows &&
                        rows.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell className="tableCell">
                                    <div className="cellWrapper">
                                        <img
                                            src={`${BASE_URL}/assets/${row.picture}`}
                                            alt=""
                                            className="datatableImage"
                                        />
                                        {row.product}
                                    </div>
                                </TableCell>
                                <TableCell className="tableCell">
                                    {row.quantity}
                                </TableCell>
                                <TableCell className="tableCell">
                                    {row.price}
                                </TableCell>
                                <TableCell className="tableCell">
                                    {row.amount} €
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

const List = ({ order }) => {
    if (order) return <ListOrder order={order} />;
    else return <ListComplete />;
};
export default List;
