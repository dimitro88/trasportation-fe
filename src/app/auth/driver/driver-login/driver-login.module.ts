import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverLoginRoutingModule } from './driver-login-routing.module';
import { DriverLoginComponent } from './driver-login.component';
import { MaterialModule } from '../../../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DriverLoginComponent],
  imports: [
    CommonModule,
    DriverLoginRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class DriverLoginModule { }
