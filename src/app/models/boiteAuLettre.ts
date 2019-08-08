import { Courrier } from './courrier';

export class BoiteAuLettre {

    id: number;

    numeroSerie: string;

    token: string;

    description: string;

    lastActivity: Date;

    courriersTotal: number;

    courriersNonVu: number;

    courriers: string;

    opened: boolean;

    equals(boiteAuLettre: BoiteAuLettre) {
        let equals: Boolean;
        if(this.id == boiteAuLettre.id 
            && this.numeroSerie == boiteAuLettre.numeroSerie 
            && this.token == boiteAuLettre.token 
            && this.description == boiteAuLettre.description 
            && this.lastActivity == boiteAuLettre.lastActivity 
            && this.courriersTotal == boiteAuLettre.courriersTotal
            && this.courriersNonVu == boiteAuLettre.courriersNonVu
            ) {
                equals = true;
            }
            else {
                equals = false;
            }
            return equals;
    }
}