import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileInfo: any;

  constructor() { }

  ngOnInit(): void {
    this.profileInfo = JSON.parse(localStorage.getItem('active_user'));
  }

}
