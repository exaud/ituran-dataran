import React from "react";
import { PowerBIEmbed } from 'powerbi-client-react';
import { models, Report } from 'powerbi-client';
import './style.css'

declare global {
    interface Window {
      report: Report;
    }
}

type Props = {
    reportId : string,
}

function EmbedReport(props : Props) : JSX.Element {
    
    const config = {
        groupId: '15b80ff2-fce2-4516-89cc-c2d334bba9f7', //auxiliar field for Access Token request
        reportId: 'fd698f7f-3094-46cd-87f0-e09eddc9b660', //auxiliar field for Access Token request
        embedUrl: 'https://app.powerbi.com/reportEmbed',
        accessToken: "H4sIAAAAAAAEACWXxa7FCnZE_-VNHclMkXpgZmbPjpmZW_n33HTmNSqtXVr73__Yv3eYf8U___1P-Gt-b7oFtTF1lH3Y1fYKtUO8CqpfLeAXwmYk6pGI0Eb7CDhIErxGX8nnrzucjA65mWbwTQLeWGVoQQQkrMZVxZZPtohmGEmOlQa14LWywJ59aukh62ihQtrEgI213ldCdm4KulAcoI9qAB94STO9eElsUD7lBwlO5QUeU8lOdhKYsomzRcuFws0YtoWTUlMnwKrob4KWdCE-2kqIBy2PCPwsp2dk1JXZDoSh-2DeGk3fzhlMo9wtXxhkyYXHt5v8Epumk0l5iYodIquxy_NQAKuXSA7WnIjQVps4LgeY5fIbPGvgDqHpN8Zroy6bE6TVMQsFU_e-N_npQ_7mdQy3CDiLm5O_EjPbED4k1qCJRLNvxWZoGKJ8g_V6kL_y2o67IV2LQSMD45BTrtVTyIrGuPbDezN6O3Dp4eSYdoyrDCytuhsYO1ko0e4Dd3-_oJGhQbOkS1vwqw0LdKJpkcXoyQdMC4hCIDuSRVs5gM55OlFB3YXKrpQaXZswytqWqi2pWxZ_wyojdctLbq7m7BhgAm-EacnutePLgIesVvqJVfx5CeVylH0EVFsF5m3x8LfB4A1VUdDHyF1qL6ZIOBq-Nsy1bO5xuq344Kmkp9BepyRSCA1wg7njxECaqhNZqdzwM5xUXmxLH5UzqNQDl_JzzxpA3ulcU1GHs1ucz-tys1ieKC1RAUm1BPcRMgBvaGVKjZJkZiGOm3zNWZ6fGGrwj8ukI91f9k_I7CwsfeFQXW2SeFzZEqr8Q6q1EtF6RmFdFL7C0r4qtTw9LFxtjFNo3XhSamdyGxGZL6Xuei4RC7tUYluSB3yvqnrs6bWSOIYlXBIzgZ-YRXyeG9MJpNiTMgKOvFhdmtpZb8oRDpYlxnJUiW0_lr1ex9G3zWYoW8THQ-b4XaHhSZzirmQ4b21yWn3GHxzppn2nb9txnvEaFkNtQaauU-awbL1TiOJU6KYVwC_AmfgySQEWbwYyF2dANGYdAeUgylT19OUG5LKFUFWdefju1Q6516dovXnHRYzpQZ8prt9Qog8fUbawxYFCOQX9wylhU-SH7oykZqHMr77bC5gX4lVUkcuep2RMrBqkloP0DA_yYzAsw6Qe4-aUZV9IBaEEQ3mGgubvqXP7BvijhpPyE0udyHZwaHlWDh0aVRtHzY0FNLQv2XH4wZfYm-vHb-RMww-zLpjKmSccPacNz-sUr5J12MyjsdUtTCo571qq5N4NvWGNnPIYfWmrTODgx7uwNdDqaLRbzP66PJt1X2MpTbfVYp_H3DkltmLi0HHKPNKKrvi14YmpVxy6cU93YFG_o9EvvJywQoVzEP4w2qsGBnN_URSnNZuAkkaYXnu75mjxoIvg44mD7kHlF6amN3sWQFWySY3G1OuWwcTbV3TUVpHf3ENyOD1ssStHo28CKx_R168qmqTnuyX66e1RgfCporvZkMoakJwTohIzsbmkwwsPFw1fpu-4rmted_kWp18gVbuwOzmoFKUkgKFdHEV-zDVnkXG3AEOFebKZpVCmvVyxOipaPnBdzz454YGM19w5sImdOrUNa_5tb4RDg6g2FANooi0XdTVmLWHL900X_6GBL5DhUATb_IQHLVXkfhYAOQMK-WoVf49Jmral8R0UD1a_756fNQbIkV1Zm-pzxiEJmUEqK4CCQ1btBAv6H6dEe39TJtOnCsk7zOdBZMDcTz-kFyDgA-IKE6fpSjtpJZjmXODN2wyTjWZqtGVfeqnoBQc9k-6QUl24JoS7hG0wOTHcX81KAt0wemC9M2eFurK-aHhgbPkibiqf3JhD68WnLR7gPb_60iPBZPosCvC9CMswVxw0xvNUa6DZpWV4SvpKKMU21c4W3TOuo8JTazUVC0I4kC-9vRIuagM408Xl3uwr8uWtwmojJCaDrntW8M8hObH9aBwQaGbPr0NDcdGmAOGhcYgyX5Yijl9kWncreObvUe-RUTThi53Y6p3rzQLMBWQNNc3fa3CZqajGS22UM9AWMGWx_xo-qLLXqY6a14UwU0_4MEEHj7RPmxK75nghPf-NbYvojTp2gjkImJJWKUskNdnRvlVbjVqxIDPDpG1neeAW_CBFM2LaiBtB-Q_xYc8pODvBASPFwNefaywmtFMGICrgM_HDxqQfaiHWgmokrjF-Tm2wA7SAtyLr6q-q3xNsD9HMDENhC4hF28qfhuPwnqeQ6l0TSHGn8fsMcsMsAvhiNXNc7hLKcm0pfMSBGIBKdbywtACD0xXvws9kEgpM2e6Q3ekP46HIGSZw-ovfWPNCQGoJ0SRvz5uOBNuIiePx-IHPyhZIkr3NzYX3Vm4pz4vt8abTpKY6UEPt5-NH2Sq9cXVibxRbiw_qfBXXYUAUBEtBY6NrOFBfrn2rvH4EAJSfYZAbCTjP_ymQO2idvr-Qj94ZDyM0DcNLFSnNvQbIKlg_I588UvA_5EdiSU4gTYKd7IcpUrR-cwLhA-BRZFOgzrGdPbVwPE51b5ii30KpXp8U1L4URtSW-cLUR74S3tr93WiRPhqnZsZSPNElkHaPoM3Uz6K8qxM_FGqYN0s0Yv5TqwwaOetqVCv13HjQTbPp9mt6-HTxGd9imKSLOOyJcKCvs7vftHZNDgASGMsdhTRVbVYw7wQmaNb-fcLcTLkuzB71N-24c8RkrwmDxinsuSuQsll1dTHGv_75r3-47V2OWSvfP_UcCdqnGe6xf4enGvm22-v_6Z3QDWY5L-PR6UxVVfm-G55JfNiSiQQXK56V3ZWPGiFriolShlSy0sPCar-zJlBaVHiJl9TApD_gpz4utYBePcTS8txkxzqJIjAoq0ZgRxxT1u28s9dBgeTgifkhlMWaaQT4PKjUDYWGDJohZNTr31rKrd-ty--Ta8GttmzcnV2Sk3jpS-Uwtz85kOdCOKpT-qJyHX2dNMQfjljyq6SHSdU8LJV8kZVn9HQXglu-jWpxSiO-dyfGPKA19FnJweS6ypad9KldT-n4RmwGEUTf7hFMSGoOKY9dS5zbqmzXTy4JhsRrZeUkJJTJqB16k2J2y2f-9Z-a36UpNyX8axkbq0S1u3ZUWU9HbmWVrNb-_5TX1tPvOLfyL2YQ7gAO6rZCZ5EgmzqH8Oem00ovIP8Eyo6TVCJKE1U_KAEn7CXMNZo3ZaX4OJ-ijXnlroUmWtVIIuMFM6sHOEVL5Otwc5U3LqY2_v7Q0sATAMsgWAf7fbMY1tJ2YsjTCPsA6c63aBTucRa3QEU3xdugfx_Br_WyeIGLjd_-aHTYQNChdyyF9INTfrWEuwiiQm8BGrunn5dMKBKMQGUx2vE3yUgnIMnOOP3gj1NpKzI_TPH7MQavWrE0GjW4L9J7SJXWRPZn0h4mqEXwpbjJZTSi0xSZFAqcALxRJ1wo58-nob8uSe77OSrYeFUJOmLE4dRkp_4jAstNsv7Lr7870x31_qv5f_4Xf07YFG4NAAA=.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLUUtUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImV4cCI6MTY5NzA0MTI2MiwiYWxsb3dBY2Nlc3NPdmVyUHVibGljSW50ZXJuZXQiOnRydWV9",
        // this last only 1 hour
        tokenType: models.TokenType.Embed, 
    }

    return (
            <PowerBIEmbed
                embedConfig = {{
                    type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
                    id: props.reportId,
                    embedUrl: config.embedUrl,
                    accessToken: config.accessToken, // this last only 1 hour
                    tokenType: config.tokenType,
                    settings: {
                        panes: {
                            pageNavigation: { visible : false},
                            filters: {
                            expanded: false,
                            visible: false
                            }
                        },
                    }
                }}

                eventHandlers = {
                    new Map([
                    ['loaded', function () { console.log('Report loaded'); }],
                    ['rendered', function () { console.log('Report rendered'); }],
                    ['error', function (event) { console.log(event?.detail);}],
                    ['visualClicked', () => console.log('visual clicked')],
                    ['pageChanged', (event) => console.log(event)],
                    ])
                }

                cssClassName = { "iframe-content" }

                getEmbeddedComponent = { (embeddedReport : any) => {
                    window.report = embeddedReport as Report;
                    console.log(embeddedReport);
                }}
            />
    );
}
export default EmbedReport
