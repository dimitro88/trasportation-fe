import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { MaterialModule } from '../../shared/material/material.module';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CustomerComponent, CustomerLoginComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
