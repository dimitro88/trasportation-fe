import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTransportationDialogComponent } from './create-transportation-dialog.component';

describe('CreateTransportationDialogComponent', () => {
  let component: CreateTransportationDialogComponent;
  let fixture: ComponentFixture<CreateTransportationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTransportationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTransportationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
