import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityDevicesComponent } from './security-devices.component';

describe('SecurityDevicesComponent', () => {
  let component: SecurityDevicesComponent;
  let fixture: ComponentFixture<SecurityDevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityDevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
