import React from 'react';
import { useParams } from 'react-router-dom';
import './style.css'
import EmbedReport from './embedReport';


function Dashboards() : JSX.Element {
    let { data } = useParams();
    const reports : string[] = [
        "fd698f7f-3094-46cd-87f0-e09eddc9b660", 
    ];
    let reportNumber = 0;
    let pageName = "ReportSectionc857173daa1ec4d9cfb4"; //default value

    function renderSwitch(dashboard : string | undefined) {
        if (dashboard === undefined || dashboard === null) {
            return (<p>Variable Undefined</p>);
        }

        switch (dashboard) {
            case 'main-dashboard':
                reportNumber = 0;
                pageName = "ReportSectionc857173daa1ec4d9cfb4";
                window.report.setPage(pageName);
                break;
            case 'vehicle-geo':
                reportNumber = 0;
                pageName = "ReportSection6ee02bd568d797d00dc9";
                window.report.setPage(pageName);
                break;
            case 'safety-events':
                reportNumber = 0;
                pageName = "ReportSection03cf3b0476036f7c1eb5";
                window.report.setPage(pageName);
                break;
            case 'macro-dashboard':
                return <p>Nothing to Display</p>
            case 'macro-vehicle-geo':
                return <p>Nothing to Display</p>
            case 'macro-safety-events':
                return <p>Nothing to Display</p>
/*             case 'daily-insights':
                return <p>Nothing to Display</p>
            case 'vehicle-insights':
                return <p>Nothing to Display</p> */
        }
        return (<EmbedReport reportId={reports[reportNumber]}/>)
    }

    return (
            <div className="iframe-wrap">
                {renderSwitch(data)}
            </div>
    );
}
export default Dashboards