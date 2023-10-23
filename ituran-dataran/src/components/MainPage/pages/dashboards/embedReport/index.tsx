import React from "react";
import { PowerBIEmbed } from 'powerbi-client-react';
import { models, Report } from 'powerbi-client';
import './style.css'
import AppSettings from "../../../../../AppSettings";

declare global {
    interface Window {
      report: Report;
    }
}

type Props = {
    reportNumber: number,
    pageName : string,
}

function EmbedReport(props : Props) : JSX.Element {
    const config1 = {
        groupId: '15b80ff2-fce2-4516-89cc-c2d334bba9f7', //auxiliar field for Access Token request
        reportId: 'fd698f7f-3094-46cd-87f0-e09eddc9b660', //auxiliar field for Access Token request
        tokenType: models.TokenType.Embed, 
    }

    const config2 = {
        groupId: '15b80ff2-fce2-4516-89cc-c2d334bba9f7', //auxiliar field for Access Token request
        reportId: '6ed8dbb1-2b00-4e7b-bdd6-814cb3634e42', //auxiliar field for Access Token request
        tokenType: models.TokenType.Embed, 
    }

    const embedConfig1 = {
        type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
        id: config1.reportId,
        embedUrl: 'https://app.powerbi.com/reportEmbed',
        accessToken: AppSettings.accessToken, // this last only 1 hour
        tokenType:  models.TokenType.Embed, 
        settings: {
            panes: {
                pageNavigation: { visible : false},
                filters: {
                    expanded: false,
                    visible: false
                }
            },
        }
    }

    const embedConfig2 = {
        type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
        id: config2.reportId,
        embedUrl: 'https://app.powerbi.com/reportEmbed',
        accessToken: AppSettings.accessToken, // this last only 1 hour
        tokenType:  models.TokenType.Embed, 
        settings: {
            panes: {
                pageNavigation: { visible : false},
                filters: {
                    expanded: false,
                    visible: false
                }
            },
        }
    }

    function getConfigs(){
        switch(props.reportNumber){
            case 1: 
                return embedConfig1;
            case 2: 
                return embedConfig2;
            default:
                return embedConfig1;
        }
    } 

    function onLoaded(page : string){
        window.report.setPage(page);
        console.log('Report loaded ' + page);
    }

    async function onRendered(pageName: string){
        const page = await window.report.getActivePage()
        if (page.name !== pageName) {
            window.report.setPage(pageName);
            window.report.reload();
            console.log('Report rendered ' + page.name);
        }
        else {
            console.log('Report rendered');
        }
    }

    const reportComponent1 =  <PowerBIEmbed
        embedConfig = { getConfigs() }

        eventHandlers = { new Map([
            ['loaded', function () { onLoaded(props.pageName) }],
            ['rendered', function () { onRendered(props.pageName) }],
            ['error', function (event) { console.log(event?.detail);}],
            ['visualClicked', () => console.log('visual clicked')],
            ['pageChanged', (event) => console.log('MERDA')],
            ])
        }

        cssClassName = { "iframe-content" }

        getEmbeddedComponent = { (embeddedReport : any) => {
            window.report = embeddedReport as Report;
            console.log(embeddedReport);
        }}
    />;

    return reportComponent1;

}
export default EmbedReport
