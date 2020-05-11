import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IBroker } from '../../../database/interfaces/IBroker';
import { DatabaseService } from '../../../database/database.service';
import { DatabaseTablesEnum } from '../../../database/enums/databaseTables.enum';
import { TransportationsService } from '../../../services/transportations.service';

@Component({
  selector: 'app-add-broker-dialog',
  templateUrl: './add-broker-dialog.component.html',
  styleUrls: ['./add-broker-dialog.component.scss']
})
export class AddBrokerDialogComponent implements OnInit {
  public brokers: IBroker[] = [];
  public selected;

  constructor(
    public dialogRef: MatDialogRef<AddBrokerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private databaseService: DatabaseService,
    private transportationsService: TransportationsService,
  ) { }

  ngOnInit(): void {
    this.brokers = this.databaseService.getAll(DatabaseTablesEnum.Brokers);
    console.log(this.brokers);
  }

  close(): void {
    this.dialogRef.close();
  }

  addBroker(): void {
    this.transportationsService.addBrokerToTransportation(this.data, this.selected);
    this.close();
  }
}
