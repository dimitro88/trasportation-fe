import {Injectable} from '@angular/core';
import {DatabaseTablesEnum} from './enums/databaseTables.enum';
import {v4 as uuidv4} from 'uuid';

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
    return JSON.parse(JSON.stringify(data));
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

  public updateElementById(tableName: DatabaseTablesEnum, id: string, value: any): void {
    const table = this.getAll(tableName);
    const index: number = table.findIndex(ell => ell.id === id);

    if (index === -1) {
      console.log(`can't update by provided id ${id} in table ${tableName}`);
    }
    console.log('before', table);
    table[index] = {
      ...table[index],
      ...value
    }
    console.log('after', table);
    localStorage.setItem(tableName, JSON.stringify(table));
  }

  public updateActiveUser(value: any): void {
    const activeUser = this.getAll(DatabaseTablesEnum.ActiveUser);
    localStorage.setItem(DatabaseTablesEnum.ActiveUser, JSON.stringify({
      ...activeUser,
      ...value
    }));
  }
}
