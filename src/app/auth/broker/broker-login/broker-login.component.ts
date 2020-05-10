import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseTablesEnum } from '../../../database/enums/databaseTables.enum';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-broker-login',
  templateUrl: './broker-login.component.html',
  styleUrls: ['./broker-login.component.scss']
})
export class BrokerLoginComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup({
    login: new FormControl('', Validators.compose([Validators.required])),
    password: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(16)
    ]))
  });

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  redirectTo(url: string): void {
    this.router.navigate([url]);
  }

  login(): void {
    this.authService.login({
      login: this.loginForm.value.login,
      password: this.loginForm.value.password
    }, DatabaseTablesEnum.Brokers);
  }
}
