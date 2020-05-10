import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseTablesEnum } from '../../../database/enums/databaseTables.enum';
import { AuthService } from '../../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-driver-login',
  templateUrl: './driver-login.component.html',
  styleUrls: ['./driver-login.component.scss']
})
export class DriverLoginComponent implements OnInit {
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
    }, DatabaseTablesEnum.Drivers);
  }
}
