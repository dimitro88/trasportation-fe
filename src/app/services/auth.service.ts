import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database/database.service';
import { DatabaseTablesEnum } from '../database/enums/databaseTables.enum';
import { ILoginBody } from '../shared/interfaces/ILoginBody';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly ACCESS_TOKEN: string = 'access_token';
  readonly ACTIVE_USER: string = 'active_user';

  constructor(
    private router: Router,
    private database: DatabaseService
  ) { }

  logout(): void {
    localStorage.removeItem(this.ACCESS_TOKEN);
    this.router.navigate(['auth/customer/login']);
  }

  isAuthenticated(): boolean {
    return !!JSON.parse(localStorage.getItem(this.ACCESS_TOKEN));
  }

  login(data: ILoginBody, table: DatabaseTablesEnum): void {
    const user = this.findUserAndCheckPasswordsMatch(data);
    if (user) {
      this.database.updateEntity(table, user.id, { accessToken: '123' });
      localStorage.setItem(this.ACCESS_TOKEN, JSON.stringify('123'));
      localStorage.setItem(this.ACTIVE_USER, JSON.stringify(user));
    }
  }

  register(data: any, table: DatabaseTablesEnum, redirectUrl: string): void {
    if (!this.ifUserExists(data.login)) {
      this.database.saveEntity(table, data);
      this.router.navigate([redirectUrl]);
    }
  }

  ifUserExists(login: string): boolean {
    const customer = this.database.findByProperty(DatabaseTablesEnum.Customers, 'login', login);
    const broker = this.database.findByProperty(DatabaseTablesEnum.Brokers, 'login', login);
    const driver = this.database.findByProperty(DatabaseTablesEnum.Drivers, 'login', login);
    if (customer || broker || driver) {
      console.log('user already exists');
      return true;
    }
    return false;
  }

  findUserAndCheckPasswordsMatch(loginBody: ILoginBody): any {
    const customer = this.database.findByProperty(DatabaseTablesEnum.Customers, 'login', loginBody.login);
    const broker = this.database.findByProperty(DatabaseTablesEnum.Brokers, 'login', loginBody.login);
    const driver = this.database.findByProperty(DatabaseTablesEnum.Drivers, 'login', loginBody.login);
    if (!customer && !broker && !driver) {
      console.log('user doesn`t exist');
      return false;
    }

    if (customer && customer.password === loginBody.password) {
      return customer;
    }

    if (driver && driver.password === loginBody.password) {
      return driver;
    }

    if (broker && broker.password === loginBody.password) {
      return broker;
    }

    console.log('bad password');
    return false;
  }
}
