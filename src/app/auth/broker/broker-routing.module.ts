import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrokerComponent} from './broker.component';


const routes: Routes = [{
  path: '',
  component: BrokerComponent,
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'login'
    },
    {
      path: 'login',
      loadChildren: () => import('./broker-login/broker-login.module').then(m => m.BrokerLoginModule)
    },
    {
      path: 'register',
      loadChildren: () => import('./broker-register/broker-register.module').then(m => m.BrokerRegisterModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrokerRoutingModule { }
