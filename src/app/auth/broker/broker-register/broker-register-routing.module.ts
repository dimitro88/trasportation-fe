import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrokerRegisterComponent } from './broker-register.component';


const routes: Routes = [{
  path: '',
  component: BrokerRegisterComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrokerRegisterRoutingModule { }
