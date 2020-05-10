import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from './customer.component';


const routes: Routes = [{
  path: '',
  component: CustomerComponent,
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'login'
    },
    {
      path: 'login',
      loadChildren: () => import('./customer-login/customer-login.module').then(m => m.CustomerLoginModule)
    },
    {
      path: 'register',
      loadChildren: () => import('./customer-register/customer-register.module').then(m => m.CustomerRegisterModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
