import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrokerLoginRoutingModule } from './broker-login-routing.module';
import { BrokerLoginComponent } from './broker-login.component';
import { MaterialModule } from '../../../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BrokerLoginComponent],
  imports: [
    CommonModule,
    BrokerLoginRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class BrokerLoginModule { }
