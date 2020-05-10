import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrokerLoginComponent } from './broker-login.component';


const routes: Routes = [{
  path: '',
  component: BrokerLoginComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrokerLoginRoutingModule { }
