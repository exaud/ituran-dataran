import React from 'react';
import { useParams } from 'react-router-dom';
import { models, Report } from 'powerbi-client';
import './style.css'
import EmbedReport from './embedReport';


function Dashboards() : JSX.Element {
    let { data } = useParams();

    function renderSwitch(dashboard : string | undefined) {
        if (dashboard === undefined || dashboard === null) {
            return (<p>Variable Undefined</p>);
        }
        let embeddedReport = null;
        let pageName = ""; 

        switch (dashboard) {
            case 'main-dashboard':
                pageName = "ReportSectionc857173daa1ec4d9cfb4";
                embeddedReport = <EmbedReport reportNumber={1} pageName={pageName}/>
                break;
            case 'vehicle-geo':
                pageName = "ReportSection6ee02bd568d797d00dc9";
                embeddedReport = <EmbedReport reportNumber={1} pageName={pageName}/>
                break;
            case 'safety-events':
                pageName = "ReportSection03cf3b0476036f7c1eb5";
                embeddedReport = <EmbedReport reportNumber={1} pageName={pageName}/>
                break;
            case 'macro-dashboard':
                pageName = "ReportSectionc857173daa1ec4d9cfb4";
                embeddedReport = <EmbedReport reportNumber={2} pageName={pageName}/>
                break;
            case 'macro-vehicle-geo':
                pageName = "ReportSectionc857173daa1ec4d9cfb4";
                embeddedReport = <EmbedReport reportNumber={2} pageName={pageName}/>
                break;
            case 'macro-safety-events':
                pageName = "ReportSectionc857173daa1ec4d9cfb4";
                embeddedReport = <EmbedReport reportNumber={2} pageName={pageName}/>
                break;
            case 'trip-insights':
                    return <p>Nothing to Display</p>
            default:
                return <p>Nothing to Display</p>;
/*             case 'daily-insights':
                return <p>Nothing to Display</p>
            case 'vehicle-insights':
                return <p>Nothing to Display</p> */
        }
        return embeddedReport;
    }

    return (
            <div className="iframe-wrap">
                {renderSwitch(data)}
            </div>
    );
}
export default Dashboards