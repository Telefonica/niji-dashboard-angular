import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceProtectionMcafeeComponent } from './device-protection-mcafee.component';

describe('DeviceProtectionMcafeeComponent', () => {
  let component: DeviceProtectionMcafeeComponent;
  let fixture: ComponentFixture<DeviceProtectionMcafeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceProtectionMcafeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceProtectionMcafeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
