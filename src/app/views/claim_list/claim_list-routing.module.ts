import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Claim_listComponent } from './claim_list.component';


const routes: Routes = [
  {
    path: '',
    component: Claim_listComponent,
    data: {
      title: 'claim_list'
    },
    
    }
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Claim_listRoutingModule {}