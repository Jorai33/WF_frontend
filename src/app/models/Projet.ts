export interface Projet {
  _id? : string,
  nom : string,
  etatProjet: string,
  montantDemande: number,
  image: string,
  besoinsClient: string,
  siren: number
  nomEntreprise: string,
  adresseEntreprise: string,
  codePostalEntreprise: string,
  villeEntreprise: string,
  nomDirigeant: string,
  prenomDirigeant: string,
  adresse : string,
  codePostal: string,
  ville: string,
  email : string,
  telephone: number,
  document: string
}