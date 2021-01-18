export class CommandeRequestModel {
    public id : number; 
    public n : string; 
    public client: String;
    public typologie: String;
    public charge: Number;
    public debutDemande: Date;
    public finDemande: Date;
    public statut: String;
    public dateDeFaisabilite: String;
}