import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../../database/database.service';
import { DatabaseTablesEnum } from '../../database/enums/databaseTables.enum';
import { IBroker } from '../../database/interfaces/IBroker';
import { IDriver } from '../../database/interfaces/IDriver';
import { ICustomer } from '../../database/interfaces/ICustomer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public passwordChangeForm: FormGroup = new FormGroup({
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

  public profileEditForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.compose([Validators.required])),
    lastName: new FormControl('', Validators.compose([Validators.required])),
    login: new FormControl('', Validators.compose([Validators.required])),
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
    ]))
  });

  profileInfo: IBroker | IDriver | ICustomer;

  constructor(
    private databeseService: DatabaseService
  ) {
  }

  public ngOnInit(): void {
    this.profileInfo = JSON.parse(localStorage.getItem('active_user'));
    this.initFormFields();
  }

  public initFormFields(): void {
    this.profileEditForm.get('email').setValue(this.profileInfo.email);
    this.profileEditForm.get('login').setValue(this.profileInfo.login);
    this.profileEditForm.get('firstName').setValue(this.profileInfo.personalInfo.firstName);
    this.profileEditForm.get('lastName').setValue(this.profileInfo.personalInfo.lastName);
  }

  public changePassword(): void {
    const profileInfo = this.profileInfo;

    this.databeseService.updateElementById(
      `${profileInfo.type}s` as DatabaseTablesEnum,
      profileInfo.id,
      {password: this.passwordChangeForm.value.password}
    );

    this.databeseService.updateActiveUser({password: this.passwordChangeForm.value.password});
  }

  public save(): void {
    const profileInfo = this.profileInfo;

    this.databeseService.updateElementById(
      `${profileInfo.type}s` as DatabaseTablesEnum,
      profileInfo.id,
      this.profileEditForm.value
    );

    this.databeseService.updateActiveUser(this.profileEditForm.value);
  }
}
