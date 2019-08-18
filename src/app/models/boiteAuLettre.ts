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

    
}