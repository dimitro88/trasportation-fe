import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrokerRegisterRoutingModule } from './broker-register-routing.module';
import { BrokerRegisterComponent } from './broker-register.component';
import { MaterialModule } from '../../../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BrokerRegisterComponent],
  imports: [
    CommonModule,
    BrokerRegisterRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class BrokerRegisterModule { }
