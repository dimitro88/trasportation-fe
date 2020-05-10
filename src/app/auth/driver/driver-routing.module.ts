import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DriverComponent} from './driver.component';


const routes: Routes = [{
  path: '',
  component: DriverComponent,
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'login'
    },
    {
      path: 'login',
      loadChildren: () => import('./driver-login/driver-login.module').then(m => m.DriverLoginModule)
    },
    {
      path: 'register',
      loadChildren: () => import('./driver-register/driver-register.module').then(m => m.DriverRegisterModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverRoutingModule { }
