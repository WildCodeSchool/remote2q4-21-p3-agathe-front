import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "./Chart.css";

const data = [
    {
        name: "Janvier",
        Total: 6150
    },
    {
        name: "Février",
        Total: 5370
    },
    {
        name: "Mars",
        Total: 4920
    },
    {
        name: "Avril",
        Total: 5530
    },
    {
        name: "Mai",
        Total: 5780
    },
    {
        name: "Juin",
        Total: 4700
    },
];

const Chart = ({ aspect, title }) => {
    return (
        <div className="chart">
            <div className="chartTitle">{title}</div>
            <ResponsiveContainer width="100%" aspect={aspect}>
            <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar dataKey="Total" fill="#2C3331" />
        </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart
