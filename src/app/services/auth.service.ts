import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database/database.service';
import { DatabaseTablesEnum } from '../database/enums/databaseTables.enum';
import { ILoginBody } from '../shared/interfaces/ILoginBody';
import {MatSnackBar} from '@angular/material/snack-bar';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly ACCESS_TOKEN: string = 'access_token';
  readonly ACTIVE_USER: string = 'active_user';

  constructor(
    private router: Router,
    private database: DatabaseService,
    private snackBar: MatSnackBar,
    private notifier: NotifierService
  ) { }

  public logout(): void {
    localStorage.removeItem(this.ACCESS_TOKEN);
    localStorage.removeItem(this.ACTIVE_USER);
    this.router.navigate(['auth/customer/login']);
  }

  public isAuthenticated(): boolean {
    return !!JSON.parse(localStorage.getItem(this.ACCESS_TOKEN));
  }

  public login(data: ILoginBody, table: DatabaseTablesEnum): void {
    const user = this.findUserAndCheckPasswordsMatch(data);
    if (user) {
      this.database.updateElementById(table, user.id, { accessToken: '123' });
      localStorage.setItem(this.ACCESS_TOKEN, JSON.stringify('123'));
      localStorage.setItem(this.ACTIVE_USER, JSON.stringify(user));
      this.router.navigate(['main-page']);
    }
  }

  public register(data: any, table: DatabaseTablesEnum, redirectUrl: string): void {
    if (!this.ifUserExists(data.login)) {
      this.database.saveEntity(table, data);
      this.router.navigate([redirectUrl]);
    }
  }

  public ifUserExists(login: string): boolean {
    const customer = this.database.findByProperty(DatabaseTablesEnum.Customers, 'login', login);
    const broker = this.database.findByProperty(DatabaseTablesEnum.Brokers, 'login', login);
    const driver = this.database.findByProperty(DatabaseTablesEnum.Drivers, 'login', login);
    if (customer || broker || driver) {
      this.notifier.notify('error', 'User already exists');
      return true;
    }
    return false;
  }

  public findUserAndCheckPasswordsMatch(loginBody: ILoginBody): any {
    const customer = this.database.findByProperty(DatabaseTablesEnum.Customers, 'login', loginBody.login);
    const broker = this.database.findByProperty(DatabaseTablesEnum.Brokers, 'login', loginBody.login);
    const driver = this.database.findByProperty(DatabaseTablesEnum.Drivers, 'login', loginBody.login);
    if (!customer && !broker && !driver) {
      this.notifier.notify('error', 'The user does\'t exist');
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

    this.notifier.notify('error', 'Wrong password');
    return false;
  }
}
