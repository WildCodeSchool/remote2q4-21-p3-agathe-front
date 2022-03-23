import "./Chart.css";
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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
                <AreaChart width={730} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#2C3331" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#2C3331" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="#2C3331" />
                    <CartesianGrid strokeDasharray="3 3"  className="chartGrid"/>
                    <Tooltip />
                    <Area type="monotone" dataKey="Total" stroke="#2C3331" fillOpacity={1} fill="url(#total)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart
