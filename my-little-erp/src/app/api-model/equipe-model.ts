export class EquipeModel {
    public Members: MemberModel[];
}

export class MemberModel {
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