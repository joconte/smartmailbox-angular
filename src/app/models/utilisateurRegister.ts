import { Utilisateur } from './utilisateur';

export class UtilisateurRegister {
    firstName: string;
    lastName: string;
    email: string;
    password: string;

    constructor(utilisateur?: Utilisateur) {
        if(utilisateur!=null) {
            this.firstName = utilisateur.firstName;
            this.lastName = utilisateur.lastName;
            this.email = utilisateur.email;
        }
    }

    
}
