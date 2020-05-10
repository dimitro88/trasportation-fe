import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransportationsComponent } from './transportations.component';


const routes: Routes = [{
  path: '',
  component: TransportationsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportationsRoutingModule { }
