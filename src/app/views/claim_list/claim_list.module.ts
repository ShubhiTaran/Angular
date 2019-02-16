import { NgModule } from '@angular/core';


import { Claim_listComponent } from './claim_list.component';
import {Claim_listRoutingModule } from './claim_list-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {NgxPaginationModule} from "ngx-pagination"
;
@NgModule({
  imports: [
    Claim_listRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgxPaginationModule
  ],
  declarations: [ Claim_listComponent ]
})
export class Claim_listModule { }
