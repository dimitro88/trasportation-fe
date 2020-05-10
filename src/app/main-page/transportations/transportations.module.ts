import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransportationsRoutingModule } from './transportations-routing.module';
import { TransportationsComponent } from './transportations.component';


@NgModule({
  declarations: [TransportationsComponent],
  imports: [
    CommonModule,
    TransportationsRoutingModule
  ]
})
export class TransportationsModule { }
