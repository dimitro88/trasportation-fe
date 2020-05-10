import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrokerRoutingModule } from './broker-routing.module';
import { BrokerComponent } from './broker.component';


@NgModule({
  declarations: [BrokerComponent],
  imports: [
    CommonModule,
    BrokerRoutingModule
  ]
})
export class BrokerModule { }
