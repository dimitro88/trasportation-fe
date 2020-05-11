import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserTypeEnum } from '../../../database/enums/UserType.enum';
import { DatabaseTablesEnum } from '../../../database/enums/databaseTables.enum';
import { AuthService } from '../../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IDriverBody } from '../../../database/interfaces/IDriver';

@Component({
  selector: 'app-driver-register',
  templateUrl: './driver-register.component.html',
  styleUrls: ['./driver-register.component.scss']
})
export class DriverRegisterComponent implements OnInit {
  public registerForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.compose([Validators.required])),
    lastName: new FormControl('', Validators.compose([Validators.required])),
    login: new FormControl('', Validators.compose([Validators.required])),
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
    ])),
    password: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(16)
    ])),
    confirmPassword: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(16)
    ]))
  });

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
  }

  redirectTo(url: string): void {
    this.router.navigate([url]);
  }

  register(): void {
    const body: IDriverBody = {
      email: this.registerForm.value.email,
      login: this.registerForm.value.login,
      personalInfo: {
        lastName: this.registerForm.value.lastName,
        firstName: this.registerForm.value.firstName
      },
      password: this.registerForm.value.password
    };
    this.authService.register(Object.assign({}, body, {type: UserTypeEnum.Driver}), DatabaseTablesEnum.Drivers, 'auth/driver/login');
  }
}
