import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { BiographComponent } from './biograph/biograph.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CollectionsHomeComponent,
    TableComponent,
    BiographComponent,
    CompaniesComponent,
    PartnersComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class CollectionsModule { }
