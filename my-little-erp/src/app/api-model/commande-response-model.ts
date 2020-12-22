export class CommandeResponseModel {
    public id: Number;
    public n: String = '';
    public client: String;
    public typologie: String;
    public charge: Number;
    public debutDemande: Date;
    public finDemande: Date;
    public statut: String;
    public dateDeFaisabilite: String;
}