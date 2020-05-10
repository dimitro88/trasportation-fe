import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriverRegisterComponent } from './driver-register.component';


const routes: Routes = [{
  path: '',
  component: DriverRegisterComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverRegisterRoutingModule { }
