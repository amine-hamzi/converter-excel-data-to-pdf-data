import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExcelsheetComponent } from './excelsheet/excelsheet.component';
import {FactureService} from './services/facture.service';
import { FactureViewComponent } from './facture-view/facture-view.component';
import { ItemListComponent } from './item-list/item-list.component';
import {RouterModule, Routes} from '@angular/router';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AllFacturesComponent } from './all-factures/all-factures.component';
import { OneFactureComponent } from './one-facture/one-facture.component';

const appRoutes: Routes = [

  {path: 'allFactures', component: AllFacturesComponent},
  {path: '', component: ExcelsheetComponent},
  {path: 'listeFactures', component: ItemListComponent},
  {path: 'listeFactures/:id', component: OneFactureComponent},
  {path: 'acceuil', component: ExcelsheetComponent},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**' ,  redirectTo: '/not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    ExcelsheetComponent,
    FactureViewComponent,
    ItemListComponent,
    FourOhFourComponent,
    AllFacturesComponent,
    OneFactureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FactureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
