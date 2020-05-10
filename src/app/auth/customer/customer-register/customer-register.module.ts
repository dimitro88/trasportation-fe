import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRegisterRoutingModule } from './customer-register-routing.module';
import { CustomerRegisterComponent } from './customer-register.component';
import { MaterialModule } from '../../../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CustomerRegisterComponent],
  imports: [
    CommonModule,
    CustomerRegisterRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class CustomerRegisterModule { }
