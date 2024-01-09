import React from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import "./RegionChart";

function RegionChart() : JSX.Element {

    const data = [
        {name: 'October',  km2: 30000},
        {name: 'November', km2: 21500},
        {name: 'December', km2: 13500},
        {name: 'January',  km2: 32789},
        {name: 'February', km2: 27896},
    ]

    const renderChart = () => {
        return (
            <BarChart layout='vertical' width={500} height={250} data={data} margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}>
                <CartesianGrid stroke="#ccc" horizontal={false}/>
                <Tooltip/>
                <Legend />
                <Bar dataKey="km2" fill="#8884d8" />
            </BarChart>
        )
    }

    return (
            <div className="metrics-list-container">
                <p>Areas Covered by Reports</p>
                {renderChart()}
            </div>
    );
}
export default RegionChart