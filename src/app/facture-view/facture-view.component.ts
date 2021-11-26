import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FactureService} from '../services/facture.service';
import {Facture} from '../Models/Facture.model';
import * as converter from 'number-to-words';
import * as  writtenNumber from 'written-number';
import { Pipe, PipeTransform } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

@Component({
  selector: 'app-facture-view',
  templateUrl: './facture-view.component.html',
  styleUrls: ['./facture-view.component.css']
})

export class FactureViewComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private factureService: FactureService) { }
  @Input() element: any[];
  facture: Facture;

  montatTTC: any;
  montat: any;
  // id = 0;
  chainesLettres = '';


  ngOnInit(): void {
    // console.log(this.element);
    this.facture = new Facture(this.element[0], this.element[1],
      this.element[2], this.element[3], this.element[4], this.element[5],
      this.element[6], this.element[7], this.element[8], this.element[10],
      this.element[11], this.element[12]);
    registerLocaleData(localeFr, 'fr');
    // this.factures = this.factureService.factures;
    // this.id = this.route.snapshot.params.id;
    this.chainesLettres = writtenNumber(this.facture.netAPayer, {lang: 'fr'});
    this.montatTTC = this.facture.qte * this.facture.prixUnitaire;
    this.montat = this.facture.netAPayer - this.facture.prixHT;
    // console.log(this.facture.nomClient);
  }
}








