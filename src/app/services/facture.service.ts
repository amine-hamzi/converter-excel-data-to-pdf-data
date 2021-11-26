import {Facture} from '../Models/Facture.model';

export class FactureService{
  factures: [][] = [];

  addFactures(factures: [][]){
    this.factures = factures;
  }


}
