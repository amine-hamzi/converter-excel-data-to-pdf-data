import { Component, OnInit } from '@angular/core';
import {FactureService} from '../services/facture.service';
import html2PDF from 'jspdf-html2canvas';
@Component({
  selector: 'app-all-factures',
  templateUrl: './all-factures.component.html',
  styleUrls: ['./all-factures.component.css']
})
export class AllFacturesComponent implements OnInit {

  factures: [][] = [];
  constructor(private factureService: FactureService ) { }

  ngOnInit(): void {
    this.factures = this.factureService.factures;
    // console.log(this.factures);
  }
  onSave(){
    const pages = document.getElementsByClassName('facture');
    html2PDF(pages, {
        html2canvas: {
          scrollX: -window.scrollX,
          scrollY: -window.scrollY,
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
