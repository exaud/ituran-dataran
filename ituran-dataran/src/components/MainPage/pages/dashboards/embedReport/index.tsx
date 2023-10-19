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
    reportNumber: number,
    pageName : string,
}

function EmbedReport(props : Props) : JSX.Element {

    const config1 = {
        groupId: '15b80ff2-fce2-4516-89cc-c2d334bba9f7', //auxiliar field for Access Token request
        reportId: 'fd698f7f-3094-46cd-87f0-e09eddc9b660', //auxiliar field for Access Token request
        accessToken: "H4sIAAAAAAAEAB1WxQ7sSBL8l3f1SmZaaQ52m5npZmbG9mj_fXvmnqpURAXk33-s9DvMafHnv39azpGUHQGaV7grkSgzcpI-38m3IuWh0keYJW8D4BkD7sXbnSU4w1Z00A0sA0M9SIR9jzLeHD8YD2Y9M523QyPnj1MK5zxX7GMemOEOxMyHgDBE8ftBje2Q26zqiglyMOJOkyJQRws63bKUTIwBwY5wVPoNooF9m3KF60NZsmWkvu36kaomOW8ER5JmvA80w74R2Axt97ogTdNaDcP28Mlxv_mYToteoL9yR1we-4T6V7gWODmOizl6cu9FtSRqAPEF8yhhmcrV92vS1ZTe9IeUFHVv4ASjp4tCAfHLzuGZbyNi7bn0uNPL3E_yJIvvYlHoN2u6p1rVQ3vj-a6l0sZW-7LRbieIFuHSl5sZYGOgIPqAUjL12LhDhW05RhVv2AGe4-Y7XtyKrQrNJPuz83MAtnlsknnr8XJ53vdIrmSLGkF7eDBxBw86KUL9ebHHBZBrtryZCLCSuChlIsKoKBMC83KF9xS369FGjUGo_7CKGQYO5_oTaPCc9vmx9kNNpXIAx6qkv5H5vTDnHHfykyq7pxjUHmFuCIxoKZhXg5CGpbAjJXJghzScYYt86XnhRBuhdoVti8ldTNDoLqdNLzVCXpstvioOd4iPsgEmKkGxI90zFnCPKxMY8qOO6LvygaeaiZ1XbAGGhclGjTJnOsaOhA0GehEK711Y5vVj279kdvmVNEu0mrHujFAGaSlkI512e55CMfmmJyS-3qQI5OO2jFi-yyYdYMg2i3VzZb9-8UDTWRueIxhvlwh4M_DavaMPDLgqgxccowMiXKRKFll9XFfn8c30KCASm_MJHk3ScWjtMj0Zo2ZpPWbAMhdu81jXdJ2zbvfqfsicjekLXSE_DgAjw939jLIwllBw0Ea55IBl_rfwmfJ-PMShDzf8yTDMY4k-BGYTsvE8np47kxadxY1IhMujjOpuiK18E1ILUlkRpjMnc5cMAyKwtLewzwqE1I5LDkE9Qw7Uff-zrpmjBYiFHOUcGgd-4NB0BHc12T3uDqYQcrRuXGr7trUTUnDHFVkZOLCxVzYE8KR4l8rMql9vjSN3o19mSQePXrwAtmEEyrmhu4-6pExu-8w6CFKGOfStWGfpRuCdlIC3xkYXPePZ9ZYXbppXyAmewXZZ68WY-LrJc3v8NPZMttEUpaTdwjC1dv1EWPw2M85OJ9lpofHlRJZpFuiNfYZeg0EMBF7JnguWbpHiJ3M73hKLqKrf5vtrvaX4etUXnCcCKltbni3ABDoYCpqLlfWj9ZtGy_CP6CVP-WkE-uCnyUPwFpuAoHKISR_5zmBaIMrW08xsx8kX_Ljp_Mvdq2hYBvptMpmpyb0JKDRCvwk-HvK0lVtGl0MquTyuEXNLDleb1SiiM4Nnp9jQAuyHsgw2zA1bKdXiClywaRxfycfJjaBsUju0RALGbBSLUzqRkBQJB6nPnvZ-zOboTSgk2eV3zeTI8zV5__2cv1BZvCe5TkD2F9WE6gSZBXUq29AVYN65eYuluVlMAsV6pSQBKD6J7c3QqSTMyCuv7Q6fK1O2UxI-ChvKpEhtPy3xDRWsSgsZPsur6FCb0cko8rChpHYJB1Z5MLX562UL9Zj54aSn3sAYoASXyYrJYLEsQoRVaCVw32iu7pDramHxuff-MDuTkncggOIVdIeWMA5-invF8z1tWVB-MDE46xu8V-ZFWTBS-IbLYG5nUG24TGgV2Bo-tMT9QveJ8RTrIFxNeG-lo26kGejt_fg1Nn6XzLnubneq-4OpPev7h11rKPfwp8jqgH4ZJ6L5DHTJI7JQx2MtbK_6IkJm2MAWk3MvzhacCyukNSASCT3Bx72ymjN77vsi25p3uZpBWLm4yKG2lDdxbbOqPPLwV7rzeXx5diyUnfsrJCfGb1qIixFBRQJR1BVcjj2V4ujjmCCUkWFJZWi4plJifFau1PdIYKIt2Iwr56qnWjQ6pfO6lpH68Vw3nPq3n5G23gBOv_zidOdEhQzWYl3AOGgiQk6iIe5Vsma0dqSLou4DD97pXKBHgyEe5oEsHzlGrhWK9U17PcgC5Qu63ZDdGkhZ5DngQT_Q4v7KoL2_DX-8m5DLwU91i6OBvlQ7adWSjtWa6LTTLZpCkGWvKAnCNm2QiFeDpqdQVzZEVxS4R6UMXVc3rUka5Nu5gNox8n4vNSaYbgHDEvbaXNqCoCjbo5pqHxE_XnncecAASKKw8w_A_kRCK9fKDx0X1w_32J8yqKB0aP_pI5V-aFIrsYeXT-mxFH306nO79LCQlrezeEGzYXtTpM3KR5Q95sUxb9wC4I9-SAQPkLiidK2ZCvcGUW12A6Cy22scD0ASa7lw6QLfCWbrJuIosoUyUTtV-aiAHl6_OpC7DLjCvbaX6kEiIxwytmXXLhynSVS_lBVRmKnhEQ0tKzMnw_azF1H2GJKPvDrJMScqXRcZUfUk8T_jPz8zAAvyIeofOMIyRJrYlVv0cO89MPWJ_RnmIO_NlIBRmyZptLwHSXdvfJ1hAJCqdrfzCJnnRPPequQC01lvzIW9joJN_Hi83A9lDEwHbHRHcZ46rPp9oREH220HCxT1pZyFZCZkDaowplRidxg3NACwEE9nOAikJGdFy06v6ADGh-dzyFVdKQGspprFPQtNa8rXlupCmueLmFo2j5VU0FQw2HsIeMsExKbcvIHh5d8mHCS-TkCn_-vPf_58tu9yzGr5_Z2eqRs_pNz78wpjzA5PPdfEjh6YUcUi2PtgVwDocssC6Vk6DrHTUL7-8l4b86JQKD3itk2eXHS6LZ0zdGLfMPKBvknTnLu66R_E6klNAZR-WSd5ZvMS8pfA9FlD5cffYy68Je-V9cDXlDUfGcKyyrGl8OVvCrj24fmcYbKJEi_tL36FaGVtX_wabX-ZUTQ4B5X4I6_Un3Z5EftDlC0C9EYXO2I98ezAHlgWYo6M-PBuyReP73FM1hMVt-1xfpTfHWGbEMEWoyb5Q9IUo3gF_vZ2xP5GINOROJintIczgfCQOuPwjUKg33p21CXXG2T9XjRsNgtVbG252QhTP9jPUyEPhgZ5__Uvzd-lKTc5-LEs7sp4fq6DiLIlL463qK7xtf-dctt6So9zK39jTPNR-WDBY8-7Ws-Yf8XSqeX2pT1zE9GZQ_Tf6XS9mU18HkLA7XEk3MheSYBUsbEmKiTaeo9IKbah15ze98bUcl9i6_OIRvaboqYG0PqxBrqmd2BHQ4t55acDoppAA0d2tNEJu67jXphItV-bpeLOrM9wFR8quwlYhSiIXKyqZCOy-Q4giWv-L6dLTF7cwwrahk78wU3pwSCfaP_w73BusFDZFPtVLplbNFZF9TasOfjgXWS1DGVild64I5SiTboTCLoPvSGUkJlVbrtBZkY2NGvZXpn8hjLoVoaatNG8s07PWzDTlXsSlFW_PpoAA3DYE7KBSGmB17D6E7R4RC94VR30z2f87__Ohm6Cbg0AAA==.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLUUtUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImV4cCI6MTY5NzcyODI2MCwiYWxsb3dBY2Nlc3NPdmVyUHVibGljSW50ZXJuZXQiOnRydWV9",
        // this last only 1 hour
    }

    const embedConfig1 = {
        type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
        id: config1.reportId,
        embedUrl: 'https://app.powerbi.com/reportEmbed',
        accessToken: config1.accessToken, // this last only 1 hour
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

    const config2 = {
        groupId: '15b80ff2-fce2-4516-89cc-c2d334bba9f7', //auxiliar field for Access Token request
        reportId: '6ed8dbb1-2b00-4e7b-bdd6-814cb3634e42', //auxiliar field for Access Token request
        accessToken: "H4sIAAAAAAAEAB2Wxwr0WA5G3-XfusE5NfTCdrmcc_bOOefsYd59apq7FVz4JB2d__wxk6efkvzP338OKQHcoY9ocAnNzmr9QeKaFW7UERHdXQtfN-gRE0oMqC2go20DJ_LCCCDv7pNbDvx4Zjhngc47Wr22buR7YapvorZmZ1Bp3hendtseYj247K8mMKi5ekE7MOytV519UH3X7MTiRDfiSbGC8yNAeulRy0u3ieDEnlOf00u_b7W4YN53WsRjfLnSRmyjEBpDAl_0ebH364tE_y4-PQ6i_KkZwjoMEICIfbWLGeeghK172o2-FlecfgxV9pnAQfqokC5Kwbq46MKaok7lfNwfN4Z_Pq-bAuBOF4XpXRD1KnsV0t4JVI7CvrXL55dqkgt7ek1mYDtGGHnRTgOZSJDbdKHnHhDG8oyajkrGVf23dhIb5e6xtouS4mn8s8xmGm6HTNl2j3pAjcmjVSVCJWwSl-xC2AF3gAyblvVOIo-16r4pEJXDTlLWkNSLxqfiKm4TZFGfsYiy2xTJ80NhC4pQwFGoWrs2UNBKMGkW1-f3skrPY6KvQN3HUKEDLw4k6VjUXxKAC-xIoau4SyUI8fYIQz6irbWW0EYYNfrJMx2DWApfOrBcH8sYR8bqYbjHDSbc3HLvuhzqBJq-CyuArsaonXfg1jOr4TvDZrcZ2e5gCETQgv5jUxe_dIy8c3tGahx3OjI9c7PHowt6DkS2L3pPWwzLI55rdLZiP1pT9p7jgi-ZdYndR72D8IGbhdhTH4edzE3etvGcYqnfg6eVhGJfSLHkCmkRasDnkwhfY5m5fbh8UD3rB7xqOahSKHPgaCC-H7t-NCaOBIaRDGP8fNFDvpt0Qzkku41oGZOPQn7UjS9CszEru1aL5kYq3dYMreuWYcKqll3Ro0ThE6rDhZdlop9ttfJK3WU1xMhg8yscIfz7PH7ID6Ol-iiDXF_B6O5_ReoBkhGVkSiC9pspjNMnU5uPo5q3T5TNsMENO-LMpJ0YK2kEuOgz7m4VMX6yixNx5aDeQbLfXcH9FQXNkrDlqCycMzCC85-mJL-Tagsaqox5E6GfdFihY51wVDDupB-yIYSnOtfnUSqLggmwV0xT2PBwRfrmt-6H4W-hR5qr8Td9oCv65lH3oCNl6a8nrI3Udgsh0BVHs1TAATVAtCjnLFcgWZVfTXhpvcMn11gYcA2H5FBX1ZMh_ExPjTD303yOkkLdYLr7ZZlpjRHsaPYZ_gF6lVL488UF1rdK08PARMhRJSx1JeRkbJB3Ev5sKmp8F0dufP1eeQBhnJTLtopzzbVHRBgos3P_MN-Oe9mWctKK87cEvTURUZ63Cb6cx1jrRFMpsb8sG536Ql4LQDhp2SbQ5I58Y0E6VF5Xnn8xPs059Aw28VLRhgBU4_CyYQqx0MqkvIWlbazlmTQbN7XGaySHAa8OzfM_mwg4FK6AllZImmYJDVDVdbTQeOlH6GPNMEXXmvs9fCpIIte2avkN7POSezgUA7Y2b8YKhMnfzC6f2mb_EW6VOo29jjBvLilKPGQnLXu5m_guppEGZT1-sPEZi2SYVn-zdcJC4VuOOW6mG7Uz-lqbSBZ7OV8IVoEZW6dbSMmZ4oyd6RAgCdjqcwKP0CB6kA53A_dYgSKd9kGL46XIZ3JwFDeGPKC4iLFGDUc77CMNK5MC27v66tLp7p7ERF-Bo75TBGLALPY6MjhH9akMI54DIB2h6wDJtkK0UlNAp0hKMp0pOCG9cUlrBmCs6hvwcjBHlfDuQIkKKhk1uGLX6ZMMj56AEIKYC8kNFUsDllp2SkoIDmUOB1X0GNOA6zoYESRNqVGOYxOOEaVafJg7KRxnqOwIqUSuDDGhikJ7YJHq7FDfAHL23iW15h6aYiNjUZyfKOTdbgmTvaI6Gm9wTbk3nB0l2SO1yOYWHJA48fWR8ABv_UgZ8ISHEPYkXhqYXGvfsEn8RVOJJoCqy1kmrKBNCm6fzYyAhY3R5M4dmB7vTkPE62VfUE6xVBIXmcDj90XNKf_-Bs7lb3Ubbcb0CPAiCpYzyqmWZMyyGXkMWF1_oNtI9p1paYqsCRxRV90lYQk9cJKJTKsGJkRC4ia3bUKqJL19hBezNA6TWZUdReUjq8AHHSusBpmNYXgehQVOsbccmNkTEnCMQG0d356U9OD3c7K5E6cJZH0C8n56Fa1zep33Pb-yx5MO3740BiWQHzvKmDJy4W424lBnLD7OAgoB-ZdGELuPvgwOibeC4JNOEOO_eTwbb3xN_uyYhGi1Lm5uaog5qSHxcwpsObN-OpJa3Ru6GM5_mVBixlt-TnAz1mCpGRQyG2IiSi5lBfQsa1Kk-WuTmema23ajDozS-nZXLfT4xt2M3lRpQic_6-Y77Mk6LN8LvIoxysMWzcjAjw7L4j5kCTynb2y3DiHAEAGwxmcnZHEgG8lTq6vXfVuT-TWp3yH9bvOATp2Goxw5s8ToU1k01Mkc6PqtOdLaThGw4DLfXwV2xnxmdxby4Qc9nBFvPyXB1UFhj7EVjt5YKonbk3NwPponDJJLg5m77ObZ4DFWM_zsmSRJdC2eyumBcndmkCHgqAq1UtlJoj7CtQ5oqSDFOAe4yAgGfcU5UEfXs1365CvlcOTYkP9APHPI_SDrySNbtvKHE6am-MWdjUAzvVtWqRxZ-GE-7Beg-DbrYBokrYgwfpR23FFPugVNWtrooSPNEfl-XpamLp-n7ZwGbNerJSJDIlCGhYvzRb4q9BVg_vnz1x9ufeZ9Uornp54p3Z_qr02h5q2-JvGwkF1OgxbgIz3wqJzrNtEK3YjIAoHKZAnKw9IwYOeXGERHb6ytgu87EEVA1MN2_Xlp-mdDQ4XK2wEIxbEwkWPHAv0S4zdaVICU-EZ4ttX9DrWcYHj3fqK5vtIi8c0KHYPsVcGLERnv28As2zVOQD-cGByp02GHeyWD5OsAEQqyy6dd5p4gkaYKOAptlSf9Ry-d_KMFFH-DReB-eTHlTKlb1FUdv84XL93sfVgPbKY-ennOiVnHXVc-oyE2dCkFztO3sOkbYyisVRlcVFxtXX3q1EKU__RV4y-ALjxJ9r55MRePxfiGHhkVQ-AW1VQESdsLx2BgFDD__BvzM9fFKvm_lE9hZrm41M1kgyNjLuwVP2jr3yqnqcZkP9biVyYXTxySud4Q9JZOTiIqnvSdlDs9JbWe8x_WK_ysyCUU_etUG2wmOur6XfPDrknG8FaogbAZBAoAlpYZ3YOQn5qAY9NDr2S3NAW2k2zUtC1ZoX4tIRVUmu1iz6EHN_wwC8Pq149qulbM3U9tXi7lx1XcaZNoAFvuen8yMNLnp3yJ6AXwNtsMJsFf3Y_DMqvu9tkUZBMRluhHvUGbdoPVNF-4GMNZ4sYyf6Z87AKwuy9krYI2_AQCcz4G7qfuNL45p96-qNoTm6iaxko1zZmwkZTiKspa06eqTvZ-4Q5q0SeqERyU3QwX-vtFmRqbrrzSnRHamWkhvqhxccNPYzNcDLAJ_3_M__0f6TstoW4NAAA=.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLUUtUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImV4cCI6MTY5NzU1MzI1NCwiYWxsb3dBY2Nlc3NPdmVyUHVibGljSW50ZXJuZXQiOnRydWV9",
        // this last only 1 hour
        tokenType: models.TokenType.Embed, 
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
        embedConfig = {embedConfig1}

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
