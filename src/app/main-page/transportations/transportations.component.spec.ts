import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationsComponent } from './transportations.component';

describe('TransportationsComponent', () => {
  let component: TransportationsComponent;
  let fixture: ComponentFixture<TransportationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
