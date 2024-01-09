import React from "react";
import "./MetricsList.css"

function MetricsList() : JSX.Element {

    const data = [58, 10, 58000, 58000];

    return (
            <div className="metrics-list-container">
                <p>Reports create this month: {data[0]}</p>
                <p>Time spent creating reports this month: {data[1]}h</p>
                <p>Vehicles included in the reports: {data[2]}</p>
                <p>Total area covered: {data[3]} KM2</p>
            </div>
    );
}
export default MetricsList