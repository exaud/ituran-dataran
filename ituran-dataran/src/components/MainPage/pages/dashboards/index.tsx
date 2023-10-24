import React from 'react';
import { useParams } from 'react-router-dom';
import './style.css'


function Dashboards() : JSX.Element {
    let { data } = useParams();

    function renderSwitch(dashboard : any) {
        switch (dashboard) {
            case 'main-dashboard':
                return <iframe className="iframe-content" title="Ituran Dataran Reports Clean" height="2000" src="https://app.powerbi.com/view?r=eyJrIjoiYWU4YTYyODEtMWVjZC00NDVjLTllM2MtOTQ4ZGZlZTZlM2RhIiwidCI6IjgxYjZjZTg5LWM3YjktNDM2ZC1hN2MzLWQ5N2ZmN2NkM2ZjMiIsImMiOjl9&pageName=ReportSectionc857173daa1ec4d9cfb4"></iframe>
            case 'macro-dashboard':
                return <iframe className="iframe-content" title="Ituran Dataran Reports Clean" height="2000" src="https://app.powerbi.com/view?r=eyJrIjoiNGZkYTMwMjUtODBjNi00YzliLWEyNTYtMmM4ZTE3NTQ2OWNhIiwidCI6IjgxYjZjZTg5LWM3YjktNDM2ZC1hN2MzLWQ5N2ZmN2NkM2ZjMiIsImMiOjl9&pageName=ReportSectionc857173daa1ec4d9cfb4"></iframe>
            case 'vehicle-geo':
                return <iframe className="iframe-content" title="Ituran Dataran Reports Clean" height="2000" src="https://app.powerbi.com/view?r=eyJrIjoiYWU4YTYyODEtMWVjZC00NDVjLTllM2MtOTQ4ZGZlZTZlM2RhIiwidCI6IjgxYjZjZTg5LWM3YjktNDM2ZC1hN2MzLWQ5N2ZmN2NkM2ZjMiIsImMiOjl9&pageName=ReportSection6ee02bd568d797d00dc9"></iframe>
            case 'macro-geo':
                return <iframe className="iframe-content" title="Ituran Dataran Reports Clean" height="2000" src="https://app.powerbi.com/view?r=eyJrIjoiNGZkYTMwMjUtODBjNi00YzliLWEyNTYtMmM4ZTE3NTQ2OWNhIiwidCI6IjgxYjZjZTg5LWM3YjktNDM2ZC1hN2MzLWQ5N2ZmN2NkM2ZjMiIsImMiOjl9&pageName=ReportSection6ee02bd568d797d00dc9"></iframe>
            case 'safety-events':
                return <iframe className="iframe-content" title="Ituran Dataran Reports Clean" height="2000" src="https://app.powerbi.com/view?r=eyJrIjoiYWU4YTYyODEtMWVjZC00NDVjLTllM2MtOTQ4ZGZlZTZlM2RhIiwidCI6IjgxYjZjZTg5LWM3YjktNDM2ZC1hN2MzLWQ5N2ZmN2NkM2ZjMiIsImMiOjl9&pageName=ReportSection03cf3b0476036f7c1eb5"></iframe>
            case 'macro-safety':
                return <iframe className="iframe-content" title="Ituran Dataran Reports Clean" height="2000" src="https://app.powerbi.com/view?r=eyJrIjoiNGZkYTMwMjUtODBjNi00YzliLWEyNTYtMmM4ZTE3NTQ2OWNhIiwidCI6IjgxYjZjZTg5LWM3YjktNDM2ZC1hN2MzLWQ5N2ZmN2NkM2ZjMiIsImMiOjl9&pageName=ReportSection03cf3b0476036f7c1eb5"></iframe>
            case 'trip-insights':
                return <iframe className="iframe-content" title="Ituran Dataran Reports Clean" height="2000" src="https://app.powerbi.com/view?r=eyJrIjoiNGZkYTMwMjUtODBjNi00YzliLWEyNTYtMmM4ZTE3NTQ2OWNhIiwidCI6IjgxYjZjZTg5LWM3YjktNDM2ZC1hN2MzLWQ5N2ZmN2NkM2ZjMiIsImMiOjl9&pageName=ReportSection8810b5e2c6545020f7ad"></iframe>
/*             case 'daily-insights':
                return <p>Nothing to Display</p>
            case 'vehicle-insights':
                return <p>Nothing to Display</p> */
        }
    }

    return (
            <div className="iframe-wrap">
                {renderSwitch(data)}
            </div>
    );
}
export default Dashboards
