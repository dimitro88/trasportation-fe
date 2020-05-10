import { Injectable } from '@angular/core';
import { DatabaseTablesEnum } from './enums/databaseTables.enum';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  private static generateId(): string {
    return uuidv4();
  }

  public saveEntity(table: DatabaseTablesEnum, data: any): any {
    data.id = DatabaseService.generateId();
    const existedTable = JSON.parse(localStorage.getItem(table));
    if (!existedTable) {
      const newTable = [data];
      localStorage.setItem(table, JSON.stringify(newTable));
    } else {
      existedTable.push(data);
      localStorage.setItem(table, JSON.stringify(existedTable));
    }
  }

  public removeEntity(table: DatabaseTablesEnum, data: any): any {
    const existedTable = JSON.parse(localStorage.getItem(table));
    if (!existedTable) {
      const newTable = [data];
      localStorage.setItem(table, JSON.stringify(newTable));
    } else {
      existedTable.push(data);
      localStorage.setItem(table, JSON.stringify(existedTable));
    }
  }

  public getAll(table: DatabaseTablesEnum): any {
    return JSON.parse(localStorage.getItem(table));
  }

  public getById(table: DatabaseTablesEnum, id: string): any {
    const existedTable = JSON.parse(localStorage.getItem(table));
    return existedTable.find(el => el.id === id);
  }

  public findByProperty(table: DatabaseTablesEnum, property: string, value: any): any {
    const existedTable = JSON.parse(localStorage.getItem(table));
    if (existedTable) {
      return existedTable.find(el => el[property] === value);
    }
  }

  public updateEntity(table: DatabaseTablesEnum, id: string, data: any): any {
    const element = this.getById(table, id);
    return Object.assign({}, element, data);
  }
}
