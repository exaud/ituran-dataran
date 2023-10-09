import React from 'react';
import PageContainer from '../../pageContainer';
import { useParams } from 'react-router-dom';
import './style.css'



function Dashboards() {
    let { data } = useParams();

    function renderSwitch(dashboard : any) {
        switch (dashboard) {
            case 'main-dashboard':
                return <iframe className="iframe-content" title="Ituran Dataran Reports Clean" height="2000" src="https://app.powerbi.com/view?r=eyJrIjoiYWU4YTYyODEtMWVjZC00NDVjLTllM2MtOTQ4ZGZlZTZlM2RhIiwidCI6IjgxYjZjZTg5LWM3YjktNDM2ZC1hN2MzLWQ5N2ZmN2NkM2ZjMiIsImMiOjl9&pageName=ReportSectionc857173daa1ec4d9cfb4"></iframe>
            case 'vehicle-geo-insights':
                return <iframe className="iframe-content" title="Ituran Dataran Reports Clean" height="2000" src="https://app.powerbi.com/view?r=eyJrIjoiYWU4YTYyODEtMWVjZC00NDVjLTllM2MtOTQ4ZGZlZTZlM2RhIiwidCI6IjgxYjZjZTg5LWM3YjktNDM2ZC1hN2MzLWQ5N2ZmN2NkM2ZjMiIsImMiOjl9&pageName=ReportSection6ee02bd568d797d00dc9"></iframe>
            case 'daily-insights':
                return <p>Nothing to Display</p>
            case 'vehicle-insights':
                return <p>Nothing to Display</p>
            case 'safety-events':
                return <iframe className="iframe-content" title="Ituran Dataran Reports Clean" height="2000" src="https://app.powerbi.com/view?r=eyJrIjoiYWU4YTYyODEtMWVjZC00NDVjLTllM2MtOTQ4ZGZlZTZlM2RhIiwidCI6IjgxYjZjZTg5LWM3YjktNDM2ZC1hN2MzLWQ5N2ZmN2NkM2ZjMiIsImMiOjl9&pageName=ReportSection03cf3b0476036f7c1eb5"></iframe>
        }
    }

    return (
        <PageContainer>
            <div className="iframe-wrap">
                {renderSwitch(data)}
            </div>
        </PageContainer>
    );
}
export default Dashboards
