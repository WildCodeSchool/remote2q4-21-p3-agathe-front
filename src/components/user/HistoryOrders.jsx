import React from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const BASE_URL = process.env.REACT_APP_URL_SERVER;

const HistoryOders = () => {
    const [rows, setRows] = React.useState(null);

    React.useEffect(() => {
        axios
            .get(`${BASE_URL}/api/users/0/orders`, { withCredentials: true, mode: 'cors' })
            .then(response => { setRows(response.data.sort((a, b) => a.order_date<b.order_date)); });
    }, []);

  return (
    <div>
      <p>Historique des commandes :</p>
      <TableContainer className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Commande</TableCell>
              <TableCell className="tableCell">Produit</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Montant</TableCell>
              <TableCell className="tableCell">Client</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="tableCell">{row.id}</TableCell>
                  <TableCell className="tableCell">
                    <div className="cellWrapper">
                      <img src={`${BASE_URL}/assets/${row.picture}`} alt="" className="datatableImage" />
                      {row.product}
                    </div>
                  </TableCell>
                  <TableCell className="tableCell">
                    {new Date(row.order_date).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="tableCell">{row.amount} €</TableCell>
                  <TableCell className="tableCell">{row.user_name}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default HistoryOders;
