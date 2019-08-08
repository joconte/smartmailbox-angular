import { BoiteAuLettre } from './boiteAuLettre';

export class Constants {

    static baseUrl: string = "http://smartmailbox-epsi.herokuapp.com/";
    //static baseUrl: string = "http://localhost:8080/";
    static loginUrl: string = Constants.baseUrl + "user/login";
    static putSaveUserData: string = Constants.baseUrl + "secure/user";
    static getConnectedUserData: string = Constants.baseUrl + "secure/user/me";
    static getBoiteAuLettres: string = Constants.baseUrl + "secure/BAL";
    static getAllBoiteAuLettres: string = Constants.baseUrl + "secure/BAL/all";
    static getBoiteAuLettreById: string = Constants.baseUrl + "secure/BAL/{0}";
    static getBoiteAuLettreTokenBySerialNumber: string = Constants.baseUrl + "secure/BAL/serialNumber/{0}";
    static getCourrierByIdMailBox: string = Constants.baseUrl + "secure/courrier/idMailBox/{0}";
    static postCourrier: string = Constants.baseUrl + "courrier";
    static putCourrierVu: string = Constants.baseUrl + "secure/courrier/{0}";

    static Stringformat(...args: any[]) {
        var s = arguments[0];
        for (var i = 0; i < arguments.length - 1; i++) {
            var reg = new RegExp("\\{" + i + "\\}", "gm");
            s = s.replace(reg, arguments[i + 1]);
        }
        return s;
    };

    static sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    }

    static equalsBoiteAuLettre(boiteAuLettre1: BoiteAuLettre, boiteAuLettre2: BoiteAuLettre) {
        let equals: Boolean;
        if(boiteAuLettre1.id == boiteAuLettre2.id 
            && boiteAuLettre1.numeroSerie == boiteAuLettre2.numeroSerie 
            && boiteAuLettre1.token == boiteAuLettre2.token 
            && boiteAuLettre1.description == boiteAuLettre2.description 
            && boiteAuLettre1.lastActivity == boiteAuLettre2.lastActivity 
            && boiteAuLettre1.courriersTotal == boiteAuLettre2.courriersTotal
            && boiteAuLettre1.courriersNonVu == boiteAuLettre2.courriersNonVu
            ) {
                equals = true;
            }
            else {
                equals = false;
            }
            return equals;
    }
}