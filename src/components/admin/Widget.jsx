import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import "./Widget.css";

const BASE_URL = process.env.REACT_APP_URL_SERVER;
const PATH_ADMIN = process.env.REACT_APP_PATH_ADMIN;

const Widget = ({ type }) => {
    const [amount, setAmount] = React.useState(0)
    let data;

    const getCount = (what) => {
        axios
        .get(`${BASE_URL}/api/${what}/count`)
        .then(response => setAmount(response.data.count));
    }

    const getTotalSalesAmount = () => {
        axios
        .get(`${BASE_URL}/api/orders/total`)
        .then(response => setAmount(response.data.total));
    }

    //temporary
    const diff = 20;

    switch (type) {
        case "user":
            data = {
                title: "CLIENTS",
                isMoney: false,
                link: <NavLink to={`${PATH_ADMIN}/users`}>Voir tous les clients</NavLink>,
                icon: (
                    <PersonOutlinedIcon
                        className="icon"
                        style={{
                            color: "crimson",
                            backgroundColor: "rgba(255, 0, 0, 0.2)",
                        }}
                    />
                ),
            };
            getCount('users')
            break;
        case "order":
            data = {
                title: "COMMANDES",
                isMoney: false,
                link: <NavLink to={`${PATH_ADMIN}/orders`}>Voir toutes les commandes</NavLink>,
                icon: (
                    <ShoppingCartOutlinedIcon
                        className="icon"
                        style={{
                            color: "goldenrod",
                            backgroundColor: "rgba(218, 165, 32, 0.2)",
                        }}
                    />
                ),
            };
            getCount('orders')
            break;
        case "earning":
            data = {
                title: "VENTES",
                isMoney: true,
                link: "Voir toutes les ventes",
                icon: (
                    <MonetizationOnOutlinedIcon
                        className="icon"
                        style={{
                            color: "green",
                            backgroundColor: "rgba(0, 128, 0, 0.2)",
                        }}
                    />
                ),
            };
            getTotalSalesAmount()
            break;
        case "products":
            data = {
                title: "NOMBRE PRODUITS",
                isMoney: false,
                link: <NavLink to={`${PATH_ADMIN}/products`}>Voir tous les produits</NavLink>,
                icon: (
                    <Inventory2OutlinedIcon
                        className="icon"
                        style={{
                            color: "purple",
                            backgroundColor: "rgba(128, 0, 128, 0.2)",
                        }}
                    />
                ),
            };
            getCount('products')
            break;
        default:
            break;
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="widgetTitle">{data.title}</span>
                <span className="counter">
                    {amount} {data.isMoney && "€"}
                </span>
                <span className="widgetLink">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    );
};

export default Widget;
