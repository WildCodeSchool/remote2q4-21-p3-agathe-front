import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./Chart.css";

const BASE_URL = process.env.REACT_APP_URL_SERVER;

const Chart = ({ aspect, title }) => {
    const [stats, setStats] = useState([]);

    useEffect(() => {
      const chart = () => {
        axios
          .get(`${BASE_URL}/api/orders/yearly_sales`)
          .then((response) => setStats(response.data));
      };
      chart();
    }, []);

    return (
        <div className="chart">
            <div className="chartTitle">{title}</div>
            <ResponsiveContainer width="100%" aspect={aspect}>
            <BarChart
          width={500}
          height={300}
          data={stats}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" fontSize="small"/>
          <Tooltip />
          <Bar dataKey="total_amount" fill="#2C3331" />
        </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart
