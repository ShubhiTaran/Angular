import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';



export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },


  
  
  
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      // {
      //   path: 'claimform',
      //   component: ClaimformComponent,
      // },
    
      {
        path: 'profile',
        loadChildren: './views/profile/profile.module#ProfileModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'policies',
        loadChildren: './views/policies/policies.module#PoliciesModule'
      },
      {
        path: 'policy_list',
        loadChildren: './views/policy_list/policy_list.module#Policy_listModule'
      },
      {
        path: 'claim_list',
        loadChildren: './views/claim_list/claim_list.module#Claim_listModule'
      },
      {
        path: 'claim',
        loadChildren: './views/claim/claim.module#ClaimModule'
      },

    
      
     
     
     
      
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
