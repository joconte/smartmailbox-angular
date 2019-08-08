import { BoiteAuLettre } from './boiteAuLettre';

export class Utilisateur {
    userId: number;
	firstName: string;
	lastName: string;
	email: string;
	created: Date;
	role: Role;
	boiteAuLettres: string;
}
export enum Role
{
    Client,
    Admin
}