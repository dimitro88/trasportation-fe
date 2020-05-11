import {AfterViewInit, Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {DatabaseService} from "../../database/database.service";
import {DatabaseTablesEnum} from "../../database/enums/databaseTables.enum";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements AfterViewInit {
  profileInfo: any = {};
  constructor(
    private databeseService: DatabaseService
  ) { }

  public ngOnInit(): void {
    this.profileInfo = JSON.parse(localStorage.getItem('active_user'));
  }

  public ngAfterViewInit() {
    this.initForm();
  }

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

  public changePassword(): void {
    const profileInfo = this.profileInfo

    this.databeseService.updateElementById(
      `${profileInfo.type}s` as DatabaseTablesEnum,
      profileInfo.id,
      { password: this.passwordChangeForm.value.password }
    );

    this.databeseService.updateActiveUser({ password: this.passwordChangeForm.value.password });
  }

  public save(): void {
    const profileInfo = this.profileInfo

    this.databeseService.updateElementById(
      `${profileInfo.type}s` as DatabaseTablesEnum,
      profileInfo.id,
      this.profileEditForm.value
    );

    this.databeseService.updateActiveUser(this.profileEditForm.value);
  }

  private initForm() {
    this.profileInfo.password = undefined;
    this.profileInfo.confirmPassword = undefined;
    this.profileEditForm.setValue(this.profileInfo);
  }
}
