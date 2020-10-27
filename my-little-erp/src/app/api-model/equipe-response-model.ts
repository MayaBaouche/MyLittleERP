export class EquipeResponseModel {
    public Members: MemberModel[];
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
}