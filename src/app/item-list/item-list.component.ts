import { Component, OnInit } from '@angular/core';
import {FactureService} from '../services/facture.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  compteur = 0;
  factures: [][] = [];
  constructor(private factureService: FactureService, private router: Router) { }

  ngOnInit(): void {
    this.factures = this.factureService.factures ;
  }
}
