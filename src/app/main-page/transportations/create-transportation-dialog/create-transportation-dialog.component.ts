import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TransportationsService } from '../../../services/transportations.service';
import { TransportationStatusesEnum } from '../../../database/enums/transportationStatuses.enum';

@Component({
  selector: 'app-create-transportation-dialog',
  templateUrl: './create-transportation-dialog.component.html',
  styleUrls: ['./create-transportation-dialog.component.scss']
})
export class CreateTransportationDialogComponent implements OnInit {
  public transportationForm: FormGroup = new FormGroup({
    startDateTime: new FormControl('', Validators.compose([Validators.required])),
    endDateTime: new FormControl('', Validators.compose([Validators.required])),
    customerPhone: new FormControl('', Validators.compose([Validators.required])),
    addressToBeDelivered: new FormControl('', Validators.compose([Validators.required])),
    costOfProducts: new FormControl('', Validators.compose([Validators.required])),
    weight: new FormControl('', Validators.compose([Validators.required])),
  });
  public customer = JSON.parse(localStorage.getItem('active_user'));

  constructor(
    public dialogRef: MatDialogRef<CreateTransportationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private transportationsService: TransportationsService
  ) { }

  ngOnInit(): void {
  }

  close(param?: any): void {
    this.dialogRef.close(param ? param : null);
  }

  createTransportation(): void {
    const body = Object.assign({}, this.transportationForm.value, { customerId: this.customer.id, status: TransportationStatusesEnum.Draft });
    const savedItem = this.transportationsService.create(body);
    this.close(savedItem);
  }
}
