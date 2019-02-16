import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolicylistComponent } from './policylist.component';


const routes: Routes = [
 
      {
        path: '',
        component: PolicylistComponent,
        data: {
          title: 'policy_list'
        }
      },
     
      
    ]



  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Policy_listRoutingModule {}