import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { CreateTransportationDialogComponent } from './create-transportation-dialog/create-transportation-dialog.component';
import { ITransportation } from '../../database/interfaces/ITransportation';
import { TransportationsService } from '../../services/transportations.service';
import { AddBrokerDialogComponent } from './add-broker-dialog/add-broker-dialog.component';
import { UserTypeEnum } from '../../database/enums/UserType.enum';
import { AreYouSureDialogComponent } from './are-you-sure-dialog/are-you-sure-dialog.component';
import { TransportationStatusesEnum } from '../../database/enums/transportationStatuses.enum';

@Component({
  selector: 'app-transportations',
  templateUrl: './transportations.component.html',
  styleUrls: ['./transportations.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TransportationsComponent implements OnInit {
  transportations: ITransportation[] = [];
  columnsToDisplay = ['startDateTime', 'endDateTime', 'addressToBeDelivered', 'costOfProducts', 'status'];
  expandedElement: any | null;
  public activeUser = JSON.parse(localStorage.getItem('active_user'));
  public type: UserTypeEnum;
  public UserTypeEnum = UserTypeEnum;
  public TransportationStatusesEnum = TransportationStatusesEnum;

  constructor(
    public dialog: MatDialog,
    private transportationsService: TransportationsService
  ) { }

  ngOnInit(): void {
    this.type = this.activeUser.type;
    this.getTransportations();
    console.log(this.transportations);
  }

  getTransportations() {
    this.transportations = this.transportationsService.getTransportations(this.activeUser.id, this.type);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateTransportationDialogComponent, {
      width: '600px',
      height: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.transportations = [...this.transportations, result];
      }
    });
  }

  addBroker(transportationId: string): void {
    this.dialog.open(AddBrokerDialogComponent, {
      width: '400px',
      height: '250px',
      data: transportationId
    });
  }

  receiveTransportation(transportationId: string): void {
    const dialogRef = this.dialog.open(AreYouSureDialogComponent, {
      width: '350px',
      height: '170px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.transportationsService.brokerAcceptTransportation(transportationId);
        this.getTransportations();
      }
    });
  }
}
