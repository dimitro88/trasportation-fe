import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverRegisterRoutingModule } from './driver-register-routing.module';
import { DriverRegisterComponent } from './driver-register.component';
import { MaterialModule } from '../../../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DriverRegisterComponent],
  imports: [
    CommonModule,
    DriverRegisterRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class DriverRegisterModule { }
