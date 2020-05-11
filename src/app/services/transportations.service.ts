import { Injectable } from '@angular/core';
import { ITransportation } from '../database/interfaces/ITransportation';
import { DatabaseService } from '../database/database.service';
import { DatabaseTablesEnum } from '../database/enums/databaseTables.enum';
import { NotifierService } from 'angular-notifier';
import { TransportationStatusesEnum } from '../database/enums/transportationStatuses.enum';
import { UserTypeEnum } from '../database/enums/UserType.enum';

@Injectable({
  providedIn: 'root'
})
export class TransportationsService {

  constructor(
    private databaseService: DatabaseService,
    private notifier: NotifierService
  ) { }

  create(body: ITransportation) {
    const savedTransportation = this.databaseService.saveEntity(DatabaseTablesEnum.Transportations, body);
    this.notifier.notify('success', 'Transportation was successfully created');
    return savedTransportation;
  }

  getTransportations(id: string, userType: UserTypeEnum): ITransportation[] {
    let transportations: ITransportation[];
    if (userType === UserTypeEnum.Customer) {
      const allTransportations: ITransportation[] = this.databaseService.getAll(DatabaseTablesEnum.Transportations);
      transportations = allTransportations ? allTransportations.filter(el => el.customerId === id) : [];
    } else if (userType === UserTypeEnum.Broker) {
      const allTransportations: ITransportation[] = this.databaseService.getAll(DatabaseTablesEnum.Transportations);
      transportations = allTransportations ? allTransportations.filter(el => el.brokerId === id) : [];
    } else if (userType === UserTypeEnum.Driver) {
      const allTransportations: ITransportation[] = this.databaseService.getAll(DatabaseTablesEnum.Transportations);
      transportations = allTransportations ? allTransportations.filter(el => el.driverId === id) : [];
    }
    return transportations;
  }

  addBrokerToTransportation(transportationId: string, brokerId: string): void {
    const transportation: ITransportation = this.databaseService.getById(DatabaseTablesEnum.Transportations, transportationId);
    transportation.brokerId = brokerId;
    transportation.status = TransportationStatusesEnum.Pending;
    this.databaseService.updateElementById(DatabaseTablesEnum.Transportations, transportationId, transportation);
  }

  brokerAcceptTransportation(transportationId: string): void {
    const transportation: ITransportation = this.databaseService.getById(DatabaseTablesEnum.Transportations, transportationId);
    transportation.status = TransportationStatusesEnum.Active;
    this.databaseService.updateElementById(DatabaseTablesEnum.Transportations, transportationId, transportation);
  }
}
