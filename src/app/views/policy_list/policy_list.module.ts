import { NgModule } from '@angular/core';


import { PolicylistComponent } from './policylist.component';
import { Policy_listRoutingModule } from './policy_list-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {NgxPaginationModule} from "ngx-pagination"

@NgModule({
  imports: [
    Policy_listRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgxPaginationModule
  ],
  declarations: [ PolicylistComponent ]
})
export class Policy_listModule { }
