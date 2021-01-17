export class DevisRequestModel {
    public id: Number;
    public n: String;
    public prospect: String;
    public typologie: String;
    public charge: Number;
    public debutDemande: Date;
    public finDemande: Date;
    public statut: String;
    public chance: Number;
    public dateDeFaisabilite: String = '';
}