import {Detector} from "./Detector";

export class LicensePlatesDetector implements Detector {
    detectMatchingWords(words: string[]): string[] {
        const foundLicensePlates = [];
        for(let i = 0; i < words.length; i++) {
            let currentWord = words[i];    
            if(this.registersDatabase.indexOf(currentWord.substr(0, 3)) > -1) {
                let possiblePlate = currentWord;
                if ((currentWord.length === 2 || currentWord.length === 3) && words[i + 1]) {
                    possiblePlate = currentWord + ' ' + words[i + 1];
                } 
                if(this.registerRegex.test(possiblePlate)) {
                    foundLicensePlates.push(possiblePlate);
                }
            }
        }
        return foundLicensePlates;
    }

    private registerRegex = /^([A-z]( |)(([0-9]([A-z]{2}|[A-z][0-9]))|([0-9]{2}[A-z])|([A-z]([0-9][A-z]|[0-9]{2}))|([A-z]{2}[0-9])|([0-9]{3})))|(A-z]{2}( |)(([A-z][0-9]{2,3})|([A-z]{2}[0-9]{1,2})|([0-9]{2}([A-z]{1,2}|[A-z][0-9]))|([0-9]{3}(|[A-z]{1,2}))|([0-9]{4}(|[A-z]))|([0-9]{5})|([A-z][0-9]{3})|([A-z]{2}[0-9]{2})))|([A-z]{3}( |)([A-z](([0-9])(|[A-z]{2})|([0-9]{2}[A-z])|[0-9]{3})|([A-z]{2}[0-9]{2})|([0-9]([A-z](|[0-9]{2})|([A-z]{2}[0-9]{1})))|([0-9]{2}(|[A-z]{2}|[A-z][0-9]))|([0-9]{3}[A-z]{1,2})|([0-9]{4}(|[A-z]))|([0-9]{5})))$/g
 
    //Tablica obecnie funkcjonujące początki rejestracyji
    private registersDatabase = ['BAU','BBI','BGR','BHA','BI','BIA','BKL','BL','BLM','BMN','BS','BSE','BSI','BSK','BSU','BWM','BZA','CAL','CB','CBR','CBY','CCH','CG','CGD','CIN','CLI','CMG','CNA','CRA','CRY','CS','CSE','CT','CTR','CTU','CW','CWA','CWL','CZN','DB','DBA','DBL','DDZ','DGL','DGR','DJ','DJA','DJE','DKA','DKL','DL','DLB','DLE','DLU','DLW','DMI','DOA','DOL','DPL','DSR','DST','DSW','DTR','DW','DWL','DWR','DZA','DZG','DZL','EBE','EBR','EKU','EL','ELA','ELC','ELE','ELW','EOP','EP','EPA','EPD','EPI','EPJ','ERA','ERW','ES','ESI','ESK','ETM','EWE','EWI','EZD','EZG','FG','FGW','FKR','FMI','FNW','FSD','FSL','FSU','FSW','FWS','FZ','FZA','FZG','FZI','GA','GBY','GCH','GCZ','GD','GDA','GKA','GKS','GKW','GLE','GMB','GND','GPU','GS','GSL','GSP','GST','GSZ','GTC','GWE','HB','HC','HK','HM','HP','HPA','HPB','HPC','HPD','HPE','HPF','HPG','HPH','HPJ','HPK','HPM','HPN','HPP','HPS','HPT','HPU','HPW','HPZ','HS','HW','KBC','KBR','KCH','KDA','KGR','KLI','KMI','KMY','KN','KNS','KNT','KOL','KOS','KPR','KR','KRA','KSU','KT','KTA','KTT','KWA','KWI','LB','LBI','LBL','LC','LCH','LHR','LJA','LKR','LKS','LLB','LLE','LLU','LOP','LPA','LPU','LRA','LRY','LSW','LTM','LU','LUB','LWL','LZ','LZA','NBA','NBR','NDZ','NE','NEB','NEL','NGI','NGO','NIL','NKE','NLI','NMR','NNI','NNM','NO','NOE','NOG','NOL','NOS','NPI','NSZ','NWE','OB','OGL','OK','OKL','OKR','ONA','ONY','OOL','OP','OPO','OPR','OST','PCH','PCT','PGN','PGO','PGS','PJA','PK','PKA','PKE','PKL','PKN','PKO','PKR','PKS','PL','PLE','PMI','PN','PNT','PO','POB','POS','POT','POZ','PP','PPL','PRA','PSE','PSL','PSR','PSZ','PTU','PWA','PWL','PWR','PZ','PZL','RBI','RBR','RDE','RJA','RJS','RK','RKL','RKR','RLA','RLE','RLS','RLU','RMI','RNI','RP','RPR','RPZ','RRS','RSA','RSR','RST','RT','RTA','RZ','RZE','SB','SBE','SBI','SBL','SC','SCI','SCZ','SD','SG','SGL','SH','SI','SJ','SJZ','SK','SKL','SL','SLU','SM','SMI','SMY','SO','SPI','SPS','SR','SRB','SRC','SRS','ST','STA','STY','SW','SWD','SY','SZ','SZA','SZO','SZY','TBU','TJE','TK','TKA','TKI','TKN','TLW','TOP','TOS','TPI','TSA','TSK','TST','TSZ','WA','WB','WBR','WCI','WD','WE','WF','WG','WGM','WGR','WGS','WH','WI','WJ','WK','WKZ','WL','WLI','WLS','WM','WMA','WML','WN','WND','WO','WOR','WOS','WOT','WP','WPI','WPL','WPN','WPR','WPU','WPY','WPZ','WR','WRA','WS','WSC','WSE','WSI','WSK','WSZ','WT','WU','WV','WW','WWE','WWL','WWY','WX','WY','WZ','WZU','WZW','WZY','ZBI','ZCH','ZDR','ZGL','ZGR','ZGY','ZK','ZKA','ZKL','ZKO','ZLO','ZMY','ZPL','ZPY','ZS','ZSD','ZSL','ZST','ZSW','ZSZ','ZWA']
}