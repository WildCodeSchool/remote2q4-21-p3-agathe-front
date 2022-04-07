import React from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import List from "../../components/admin/Table";
import Sidebar from "../../components/admin/Sidebar";
import "./Single.css";

const BASE_URL = process.env.REACT_APP_URL_SERVER;

const Single = () => {
    const id = useParams().id;
    const [order, setOrder] = React.useState(null);

    const orderPaid = (order) => {
        axios
            .get(`${BASE_URL}/api/orders/paid/${id}`, id, {
                withCredentials: true,
                mode: "cors",
            })
            .then((response) => {console.log(response.data)})
            .catch((err) => console.log(err));
    }
    const orderShipped = (order) => {
        axios
            .get(`${BASE_URL}/api/orders/shipped/${id}`, id, {
                withCredentials: true,
                mode: "cors",
            })
            .then((response) => {console.log(response.data)})
            .catch((err) => console.log(err));
    }

    React.useEffect(() => {
        axios
            .get(`${BASE_URL}/api/orders/${id}`, id, {
                withCredentials: true,
                mode: "cors",
            })
            .then((response) => {console.log(response.data);setOrder(response.data)})
            .catch((err) => console.log(err));

        // axios
        //     .get(`${BASE_URL}/api/users/${id}/yearly_sales`)
        //     .then((response) => setStats(response.data));
    }, [id]);

    return (
        <>
            <div className="single">
                <Sidebar />
                <div className="singleContainer">
                    <div className="singleTop">
                        <div className="singleLeft">
                            <NavLink to={`/user/edit/${order?.id}`}>
                                <div className="editButton">Editer</div>
                            </NavLink>
                            <h1 className="singleTitle">
                                Information de la commande {id}
                            </h1>
                            <div className="singleItem">
                                {console.log('order', order)}
                                <table>
                                    <thead>
                                        <tr>
                                            <th>No commande</th>
                                            <th>Client</th>
                                            <th>Date</th>
                                            <th>Total</th>
                                            <th>Statut</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{order?.id}</td>
                                            <td>{order?.user_name}</td>
                                            <td>{new Date(order?.creation_date)?.toLocaleDateString()}</td>
                                            <td>{order?.total_amount}</td>
                                            <td>{order?.state}</td>
                                            <td>
                                                {order?.status_id===1 && <button onClick={()=>orderPaid(order?.id)}>Payé</button>}
                                                {order?.status_id===2 && <button onClick={()=>orderShipped(order?.id)}>Expédiée</button>}
                                                </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="details"></div>
                            </div>
                        </div>
                    </div>
                    <div className="singleBottom">
                        <h2 className="singleTitle">Dernières commandes</h2>
                        <List />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Single;
