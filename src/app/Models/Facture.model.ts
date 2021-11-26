export class Facture {
  constructor(public id: number, public ref: string,
              public designation: string, public date: Date,
              public reference: string, public modePaiement: string, public nomClient: string,
              public addrClient: string, public netAPayer: number,
              public prixUnitaire: number, public qte: number,
              public prixHT: number) {}
}
