import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransportationsRoutingModule } from './transportations-routing.module';
import { TransportationsComponent } from './transportations.component';
import { MaterialModule } from '../../shared/material/material.module';
import { CreateTransportationDialogComponent } from './create-transportation-dialog/create-transportation-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TransportationsComponent, CreateTransportationDialogComponent],
  imports: [
    CommonModule,
    TransportationsRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    CreateTransportationDialogComponent
  ]
})
export class TransportationsModule { }
