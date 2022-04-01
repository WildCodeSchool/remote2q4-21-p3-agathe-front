import React from "react";
import { useParams } from "react-router-dom";
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

const List = () => {
    const [rows, setRows] = React.useState(null);
    const id = useParams().id;

    React.useEffect(() => {
        let path = window.location.pathname
        let url = `${BASE_URL}/api/orders`;
        if (path.startsWith(`${PATH_ADMIN}/users`)) {
            if (id) url = `${BASE_URL}/api/users/${id}/orders`;
        } else if (path.startsWith(`${PATH_ADMIN}/products`)) {
            if (id) url = `${BASE_URL}/api/products/${id}/orders`;
        }
        axios
            .get(url, { withCredentials: true, mode: "cors" })
            .then((response) => setRows(response.data));
    }, []);

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
                        rows.map((row) => (
                            <TableRow key={row.order_id}>
                                <TableCell className="tableCell">
                                    {row.order_id}
                                </TableCell>
                                <TableCell className="tableCell">
                                    <div className="cellWrapper">
                                        <img
                                            src={`/assets/img/${row.product_id}.jpeg`}
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
                                    <span className={`status ${row.state}`}>
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

export default List;
