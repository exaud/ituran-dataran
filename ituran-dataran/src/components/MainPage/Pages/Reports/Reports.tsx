import React from "react";
import './Reports.css'

function Reports() : JSX.Element {
    return (
            <div className='page-content'>
                <div className='reports-page-heading-container'>
                    <p className='reports-page-heading'>My Reports</p>
                    <button>new report</button>
                </div>
                <div className='reports-page-body-container'>
                    <p>ADD TAB CONTAINER</p>
                    <p>ADD TABLE CONTAINER</p>
                    <p>ADD METRICS CONTAINER</p>
                </div>

            </div>
    );
}
export default Reports