import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoliciesComponent } from './policies.component';

const routes: Routes = [
  {
    path: '',
    component: PoliciesComponent,
    data: {
      title: 'policies'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliciesRoutingModule {}