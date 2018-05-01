
export class User {

    userName : string;
    nome : string;
    cognome : string; 
    eta : number;
    email: string;

    constructor(userName : string,nome : string,cognome : string,eta : number,email : string)
    {
        this.userName = userName;
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.email = email;
    }

}