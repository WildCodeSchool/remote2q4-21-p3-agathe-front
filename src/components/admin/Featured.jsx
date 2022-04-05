import { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import "./Featured.css";

const BASE_URL = process.env.REACT_APP_URL_SERVER;

const Featured = () => {
    const [monthly, setMonthly] = useState("");
    const [weekly, setWeekly] = useState("");
    const [yesterday, setYesterday] = useState("");
    const [today, setToday] = useState("");

    useEffect(() => {
        const lastMonthSales = () => {
            axios
                .get(`${BASE_URL}/api/orders/last_month_sales`)
                .then(response => setMonthly(response.data));
        };
        const lastWeekSales = () => {
            axios
                .get(`${BASE_URL}/api/orders/last_week_sales`)
                .then(response => setWeekly(response.data));
        };
        const yesterdaySales = () => {
            axios
                .get(`${BASE_URL}/api/orders/yesterday_sales`)
                .then(response => setYesterday(response.data));
        };
        const dailySales = () => {
            axios
                .get(`${BASE_URL}/api/orders/daily_sales`)
                .then(response => setToday(response.data));
        };
        lastMonthSales();
        lastWeekSales();
        yesterdaySales();
        dailySales();
    }, []);

    return (
        <div className='featured'>
            <div className="featuredTop">
                <h1 className="topTitle">Revenu des ventes</h1>
            </div>
            <div className="featuredBottom">
                <div className="featuredChart">
                    <CircularProgressbar value={(yesterday.sales) === 0 ? ((today.sales/yesterday.sales*100).toFixed(2)) : 0} text={`${(yesterday.sales) === 0 ? ((today.sales/yesterday.sales*100).toFixed(2)) : 0}%`} strokeWidth={5} />
                </div>
                {(today.sales/yesterday.sales*100) > 100 ? <p>Objectif de la veille dépassé !</p> : ""}
                <p className="bottomTitle">Vente total du jour</p>
                <p className="amount">{today.sales ?? 0} €</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Hier</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon fontSize="small" />
                            <div className="resultAmount">{yesterday.sales} €</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Semaine passée</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small" />
                            <div className="resultAmount">{weekly.sales} €</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Mois dernier</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small" />
                            <div className="resultAmount">{monthly.sales} €</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
