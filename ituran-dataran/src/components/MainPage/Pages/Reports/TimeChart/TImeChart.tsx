import React from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import "./TimeChart.css";

function TimeChart() : JSX.Element {

    const data = [
        {name: 'October',  reports: 153, drafts: 10},
        {name: 'November', reports: 234, drafts: 21},
        {name: 'December', reports: 167, drafts: 15},
        {name: 'January',  reports: 250, drafts: 18},
        {name: 'February', reports: 304, drafts: 25},
    ]

    const renderChart = () => {
        return (
            <BarChart width={500} height={250} data={data} margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}>
                <CartesianGrid stroke="#ccc" vertical={false}/>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip/>
                <Legend />
                <Bar dataKey="reports" fill="#8884d8" />
                <Bar dataKey="drafts" fill="#82ca9d" />
            </BarChart>
        )
    }

    return (
            <div className="metrics-list-container">
                <p>Generated Reports by Month</p>
                {renderChart()}
            </div>
    );
}
export default TimeChart