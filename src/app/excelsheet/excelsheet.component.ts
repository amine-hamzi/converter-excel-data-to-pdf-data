import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import {FactureService} from '../services/facture.service';
import {Facture} from '../Models/Facture.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-excelsheet',
  templateUrl: './excelsheet.component.html',
  styleUrls: ['./excelsheet.component.css']
})
export class ExcelsheetComponent implements OnInit {

  data: [][];
  constructor(private factureService: FactureService, private router: Router) { }

  ngOnInit(): void {
  }
  onFileChange(evt: any) {
    const target: DataTransfer =  (evt.target) as DataTransfer;
    if (target.files.length !== 1) { throw new Error('Cannot use multiple files'); }

    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const bstr: string = e.target.result;

      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' , cellDates: true});

      const wsname: string = wb.SheetNames[0];

      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      // console.log(ws);

      this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));
      this.data.splice(0, 1);
      // console.log(this.data);
      // console.log(this.data);
      // const x = this.data.slice(1);
      // console.log(x);
    };
    reader.readAsBinaryString(target.files[0]);

  }

  onImporte() {
    this.factureService.addFactures(this.data.slice());
    // this.factureService.factures = this.data;
    // console.log(this.factureService.factures);
    // console.log(this.factureService.factures.length);
    this.router.navigate(['listeFactures']);
  }
}
