import { NgModule } from '@angular/core';



import { ClaimRoutingModule } from './claim-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ClaimComponent } from './claim.component';
import { RegisterComponent } from '../register/register.component';

@NgModule({
  imports: [
    ClaimRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    
  ],
  declarations: [ ClaimComponent ],
  // schemas: [NO_ERRORS_SCHEMA]
})
export class ClaimModule { }
