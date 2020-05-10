import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './auth.component';


const routes: Routes = [{
  path: '',
  component: AuthComponent,
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'customer'
    },
    {
      path: 'customer',
      loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
    },
    {
      path: 'driver',
      loadChildren: () => import('./driver/driver.module').then(m => m.DriverModule)
    },
    {
      path: 'broker',
      loadChildren: () => import('./broker/broker.module').then(m => m.BrokerModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
