import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const data = [
    { name: "January", Gain: 0.1 },
    { name: "February", Gain: 0.3 },
    { name: "March", Gain: 0.4 },
    { name: "April", Gain: 1 },
    { name: "May", Gain: 1.8 },
    { name: "June", Gain: 2.2 },
];

const RechartsExample = () => (
    <LineChart
        width={800}
        height={450}
        data={data}
        style={{ marginRight: "auto", marginLeft: "auto", marginTop: "0px" }}
    >
        <Line type="monotone" dataKey="Gain" stroke="#2196F3" strokeWidth={3} />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
    </LineChart>
);

export default RechartsExample;
