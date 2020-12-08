export class EquipeResponseModel {
    public Members: MemberResponseModel[];
   /* // jeu de test pour afficher les données équipes
   public name : string;
    constructor(){
        this.name = "test";
    }*/
}

export class MemberResponseModel {
    public Nom: String = '';
    public Prenom: String = '';
    public Adresse: String = '';
    public CP: String = '';
    public Ville: String = '';
    public Pays: String = '';
    public Tel: String = '';
    public Mail: String = '';
    public Fonction: String = '';
  /* // constructeur de test pour afficher et débugger les équipes sans le serveur : à modifier equipe form module
   constructor(Nom,Prenom,Adresse,CP,Ville,Pays,Tel,Mail,Fonction){
        this.Nom = Nom;
        this.Prenom = Prenom;
        this.Adresse = Adresse;
        this.CP = CP;
        this.Ville = Ville;
        this.Pays = Pays;
        this.Tel = Tel;
        this.Mail = Mail;
        this.Fonction = Fonction;

    }*/
}