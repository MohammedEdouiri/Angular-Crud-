import { Livre } from "../Models/livre";

export class LivreProxy {
    private livre:Livre;
    constructor()
    {
        this.livre=new Livre();
    }


getLivre():Livre
{
    return this.livre;
}


        public get libelle()
        {
            return this.livre.libelle
        }
        public get code()
        {
            return this.livre.code
        }
        public get auteur()
        {
            return this.livre.auteur
        }
        public set libelle(libelle:string)
        {
            this.livre.libelle = libelle;
        }
        public set auteur(auteur:string)
        {
            this.livre.auteur =auteur;
        }
        public setCode()
        {
            this.livre.code =Livre.cmp+"_"+this.livre.auteur.substring(0,3);
        }
}
