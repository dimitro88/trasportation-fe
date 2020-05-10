import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriverLoginComponent } from './driver-login.component';


const routes: Routes = [{
  path: '',
  component: DriverLoginComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverLoginRoutingModule { }
