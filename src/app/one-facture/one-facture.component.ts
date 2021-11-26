import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FactureService} from '../services/facture.service';
import {Facture} from '../Models/Facture.model';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import * as  writtenNumber from 'written-number';
import html2PDF from 'jspdf-html2canvas';

@Component({
  selector: 'app-one-facture',
  templateUrl: './one-facture.component.html',
  styleUrls: ['./one-facture.component.css']
})
export class OneFactureComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private factureService: FactureService) { }

  factures: any[][] = [];
  facture: Facture;
  montatTTC: any;
  montat: any;
  id = 0;
  chainesLettres = '';


  ngOnInit(): void {
    // console.log(this.element);
    registerLocaleData(localeFr, 'fr');
    this.factures = this.factureService.factures;
    this.id = this.route.snapshot.params.id;
    this.facture = new Facture(this.factures[this.id][0], this.factures[this.id][1],
      this.factures[this.id][2], this.factures[this.id][3], this.factures[this.id][4], this.factures[this.id][5],
      this.factures[this.id][6], this.factures[this.id][7], this.factures[this.id][8], this.factures[this.id][10],
      this.factures[this.id][11], this.factures[this.id][12]);
    this.chainesLettres = writtenNumber(this.facture.netAPayer, {lang: 'fr'});
    this.montatTTC = this.facture.qte * this.facture.prixUnitaire;
    this.montat = this.facture.netAPayer - this.facture.prixHT;
    // console.log(this.facture.nomClient);
  }
  onSave(){
    const page = document.getElementById('facture');
    html2PDF(page, {
      html2canvas: {
        scrollX: -window.scrollX,
        scrollY: -window.scrollY,
        windowWidth: document.documentElement.offsetWidth,
        windowHeight: document.documentElement.offsetHeight,
      },
      jsPDF: {
        format: 'a4',
      },
      imageType: 'image/jpeg',
      output: './pdf/generate.pdf'
    },

    );
  }

}
