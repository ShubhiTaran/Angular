import { NgModule } from '@angular/core';


import { PoliciesComponent } from './policies.component';
import { PoliciesRoutingModule } from './policies-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    PoliciesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [ PoliciesComponent ]
})
export class PoliciesModule { }
