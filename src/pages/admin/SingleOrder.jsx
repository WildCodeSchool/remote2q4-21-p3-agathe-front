import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import List from "../../components/admin/Table";
import Sidebar from "../../components/admin/Sidebar";
import "./SingleOrder.css";

const BASE_URL = process.env.REACT_APP_URL_SERVER;

const Single = () => {
    const id = useParams().id;
    const [order, setOrder] = React.useState(null);
    const navigate = useNavigate()

    const orderPaid = (order) => {
        axios
            .put(`${BASE_URL}/api/orders/paid/${id}`, {
                withCredentials: true,
                mode: "cors",
            })
            .then((response) => navigate(-1))
            .catch((err) => {});
    }
    const orderShipped = (order) => {
        axios
            .put(`${BASE_URL}/api/orders/shipped/${id}`, {
                withCredentials: true,
                mode: "cors",
            })
            .then((response) => navigate(-1))
            .catch((err) => {});
    }

    React.useEffect(() => {
        axios
            .get(`${BASE_URL}/api/orders/${id}`, {
                withCredentials: true,
                mode: "cors",
            })
            .then((response) => setOrder(response.data))
            .catch((err) => {});
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
                                <table className="headerTable">
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
                        <List order={order?.id}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Single;
