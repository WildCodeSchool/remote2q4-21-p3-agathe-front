import React from "react";
import axios from "axios";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import "./Widget.css";

const BASE_URL = process.env.REACT_APP_URL_SERVER;

const Widget = ({ type }) => {
    const [amount, setAmount] = React.useState(0)
    let data;

    const getUsersCount = () => {
        axios
        .get(`${BASE_URL}/api/users/count`)
        .then(response => setAmount(response.data.count));

    }

    const getTotalSalesAmount = () => {
        axios
        .get(`${BASE_URL}/api/orders/total`)
        .then(response => setAmount(response.data.total));
    }

    const getTotalOrders = () => {
        axios
        .get(`${BASE_URL}/api/orders/total_orders`)
        .then(response => setAmount(response.data.totalOrders));
    }

    //temporary
    // const amount = 100;
    const diff = 20;

    switch (type) {
        case "user":
            data = {
                title: "CLIENTS",
                isMoney: false,
                link: "Voir tous les clients",
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
            getUsersCount()
            break;
        case "order":
            data = {
                title: "COMMANDES",
                isMoney: false,
                link: "Voir toutes les commandes",
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
            getTotalOrders()
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
        case "balance":
            data = {
                title: "RESULTAT NET",
                isMoney: true,
                link: "Voir le détail",
                icon: (
                    <AccountBalanceWalletOutlinedIcon
                        className="icon"
                        style={{
                            color: "purple",
                            backgroundColor: "rgba(128, 0, 128, 0.2)",
                        }}
                    />
                ),
            };
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
