import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransportationsRoutingModule } from './transportations-routing.module';
import { TransportationsComponent } from './transportations.component';
import { MaterialModule } from '../../shared/material/material.module';
import { CreateTransportationDialogComponent } from './create-transportation-dialog/create-transportation-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddBrokerDialogComponent } from './add-broker-dialog/add-broker-dialog.component';
import { AreYouSureDialogComponent } from './are-you-sure-dialog/are-you-sure-dialog.component';


@NgModule({
  declarations: [TransportationsComponent, CreateTransportationDialogComponent, AddBrokerDialogComponent, AreYouSureDialogComponent],
  imports: [
    CommonModule,
    TransportationsRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    CreateTransportationDialogComponent,
    AddBrokerDialogComponent,
    AreYouSureDialogComponent
  ]
})
export class TransportationsModule { }
