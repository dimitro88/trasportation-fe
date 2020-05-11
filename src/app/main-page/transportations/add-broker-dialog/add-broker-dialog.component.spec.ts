import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBrokerDialogComponent } from './add-broker-dialog.component';

describe('AddBrokerDialogComponent', () => {
  let component: AddBrokerDialogComponent;
  let fixture: ComponentFixture<AddBrokerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBrokerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBrokerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
