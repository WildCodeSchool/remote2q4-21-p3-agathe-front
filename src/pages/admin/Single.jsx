import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Chart from "../../components/admin/Chart";
import List from "../../components/admin/Table";
import Sidebar from "../../components/admin/Sidebar";
import "./Single.css";

const BASE_URL = process.env.REACT_APP_URL_SERVER;

const Single = () => {
    const [data, setData] = React.useState(null);
    const id = useParams().id;

    React.useEffect(() => {
        axios
            .get(`${BASE_URL}/api/users/${id}`)
            .then((response) => setData(response.data));
    }, [id]);

    return (
        <>
            <div className="single">
                <Sidebar />
                <div className="singleContainer">
                    <div className="singleTop">
                        <div className="singleLeft">
                            <div className="editButton">Editer</div>
                            <h1 className="singleTitle">Information</h1>
                            <div className="singleItem">
                                <div className="details">
                                    <h1 className="singleItemTitle">
                                        {data?.first_name + " " + data?.last_name}
                                    </h1>
                                    <div className="singleDetailItem">
                                        <span className="itemKey">Email: </span>
                                        <span className="itemValue">
                                            {data?.email}
                                        </span>
                                    </div>
                                    <div className="singleDetailItem">
                                        <span className="itemKey">
                                            Téléphone:{" "}
                                        </span>
                                        <span className="itemValue">
                                            {data?.phone_number}
                                        </span>
                                    </div>
                                    <div className="singleDetailItem">
                                        <span className="itemKey">
                                            Adresse:{" "}
                                        </span>
                                        <span className="itemValue">
                                            {data?.address_1}
                                        </span>
                                    </div>
                                    <div className="singleDetailItem">
                                        <span className="itemKey">Ville: </span>
                                        <span className="itemValue">
                                            {data?.postcode} {data?.city}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="singleRight">
                            <Chart
                                aspect={3 / 1}
                                title="Revenu du client (Des 6 derniers mois)"
                            />
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
