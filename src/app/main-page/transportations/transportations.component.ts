import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { CreateTransportationDialogComponent } from './create-transportation-dialog/create-transportation-dialog.component';
import { ITransportation } from '../../database/interfaces/ITransportation';
import { TransportationsService } from '../../services/transportations.service';

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
  columnsToDisplay = ['startDateTime', 'endDateTime', 'addressToBeDelivered', 'costOfProducts'];
  expandedElement: any | null;
  public activeUser = JSON.parse(localStorage.getItem('active_user'));

  constructor(
    public dialog: MatDialog,
    private transportationsService: TransportationsService
  ) { }

  ngOnInit(): void {
    this.transportations = this.transportationsService.getTransportations(this.activeUser.id);
  }

  openDialog(): void {
    this.dialog.open(CreateTransportationDialogComponent, {
      width: '600px',
      height: '400px'
    });
  }
}
