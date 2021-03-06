import React from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import Chart from "../../components/admin/Chart";
import List from "../../components/admin/Table";
import Sidebar from "../../components/admin/Sidebar";
import "./SingleProduct.css";

const BASE_URL = process.env.REACT_APP_URL_SERVER;
const PATH_ADMIN = process.env.REACT_APP_PATH_ADMIN;

const Single = () => {
    const id = useParams().id;
    const [data, setData] = React.useState(null);
    const [stats, setStats] = React.useState(null);

    React.useEffect(() => {
        axios
            .get(`${BASE_URL}/api/products/${id}`)
            .then(response => setData(response.data));

        axios
            .get(`${BASE_URL}/api/products/${id}/yearly_sales`)
            .then((response) => setStats(response.data));
    }, [id]);

    return (
        <>
            <div className="single">
                <Sidebar />
                <div className="singleContainer">
                    <div className="singleTop">
                        <div className="singleLeft">
                            <NavLink
                                to={`${PATH_ADMIN}/products/edit/${data?.id}`}
                            >
                                <div className="editButton">Editer</div>
                            </NavLink>
                            <h1 className="singleTitle">Information</h1>
                            <div className="singleItem">
                                <img
                                    src={`${BASE_URL}/assets/${data?.picture}`}
                                    alt=""
                                    className="itemImg"
                                />

                                <div className="details">
                                    <h1 className="singleItemTitle">
                                        {data?.name}
                                    </h1>
                                    <div className="singleDetailItem">
                                        <span className="itemKey">Code: </span>
                                        <span className="itemValue">
                                            {data?.sku}
                                        </span>
                                    </div>
                                    <div className="singleDetailItem">
                                        <span className="itemKey">Prix: </span>
                                        <span className="itemValue">
                                            {data?.price} ???
                                        </span>
                                    </div>
                                    <div className="singleDetailItem">
                                        <span className="itemKey">Caract.: </span>
                                        <span className="itemValue">
                                            {data?.characteristic}
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="singleRight">
                            <Chart
                                aspect={3 / 1}
                                title="Revenu du produit (sur l'ann??e)"
                                data={stats}
                            />
                        </div>
                    </div>
                    <div className="singleBottom">
                        <h2 className="singleTitle">Derni??res commandes</h2>
                        <List />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Single;
