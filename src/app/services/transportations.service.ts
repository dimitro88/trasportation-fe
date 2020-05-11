import { Injectable } from '@angular/core';
import { ITransportation } from '../database/interfaces/ITransportation';
import { DatabaseService } from '../database/database.service';
import { DatabaseTablesEnum } from '../database/enums/databaseTables.enum';

@Injectable({
  providedIn: 'root'
})
export class TransportationsService {

  constructor(private databaseService: DatabaseService) { }

  create(body: ITransportation) {
    this.databaseService.saveEntity(DatabaseTablesEnum.Transportations, body);
  }

  getTransportations(id: string): ITransportation[] {
    const transportations: ITransportation[] = this.databaseService.getAll(DatabaseTablesEnum.Transportations);
    if (transportations) {
      return transportations.filter(el => el.customerId === id);
    } else {
      return [];
    }
  }
}
