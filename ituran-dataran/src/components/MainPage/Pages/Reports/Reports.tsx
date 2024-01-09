import React from "react";
import { Button } from '@mui/base';
import './Reports.css'
import MetricsList from "./MetricsList/MetricsList";
import TimeChart from "./TimeChart/TImeChart";
import RegionChart from "./RegionChart/RegionChart";
import TypeChart from "./TypeChart/TypeChart";

function Reports() : JSX.Element {

    function handleClick(){
        console.log("Create Report");
    }


    return (
            <div className='page-content'>
                <div className='reports-page-heading-container'>
                    <p className='reports-page-heading'>My Reports</p>
                    <Button className="new-report-button" onClick={handleClick}> New Report</Button>
                </div>
                <div className='reports-page-body-container'>
                    <p>ADD TAB CONTAINER</p>
                    <p>ADD TABLE CONTAINER</p>
                    <div className="reports-page-metrics-container">
                        <TimeChart />
                        <RegionChart />
                        <TypeChart />
                        <MetricsList/>
                    </div>
                </div>

            </div>
    );   
}
export default Reports