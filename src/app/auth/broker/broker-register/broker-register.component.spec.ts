import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerRegisterComponent } from './broker-register.component';

describe('BrokerRegisterComponent', () => {
  let component: BrokerRegisterComponent;
  let fixture: ComponentFixture<BrokerRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokerRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
