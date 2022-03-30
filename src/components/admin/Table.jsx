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

const List = () => {
    const [rows, setRows] = React.useState(null);
    const id = useParams().id;

    React.useEffect(() => {
        let url
        if (id) url = `${BASE_URL}/api/orders/user/${id}`
        else url = `${BASE_URL}/api/orders`
        axios
            .get(url, { withCredentials: true, mode: 'cors' })
            .then(response => setRows(response.data));
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
                            <TableRow key={row.OrderId}>
                                <TableCell className="tableCell">
                                    {row.OrderId}
                                </TableCell>
                                <TableCell className="tableCell">
                                    <div className="cellWrapper">
                                        <img
                                            src={row.img}
                                            alt=""
                                            className="datatableImage"
                                        />
                                        {row.product}
                                    </div>
                                </TableCell>
                                <TableCell className="tableCell">
                                    {row.name}
                                </TableCell>
                                <TableCell className="tableCell">
                                    {new Date(row.OrderDate).toLocaleDateString()}
                                </TableCell>
                                <TableCell className="tableCell">
                                    {row.amount}
                                </TableCell>
                                <TableCell className="tableCell">
                                    {row.method}
                                </TableCell>
                                <TableCell className="tableCell">
                                    <span className={`status ${row.status}`}>
                                        {row.status}
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
