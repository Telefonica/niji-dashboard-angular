import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumServicesComponent } from './premium-services.component';

describe('PremiumServicesComponent', () => {
  let component: PremiumServicesComponent;
  let fixture: ComponentFixture<PremiumServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
