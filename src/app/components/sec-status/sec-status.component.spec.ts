import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecStatusComponent } from './sec-status.component';

describe('SecStatusComponent', () => {
  let component: SecStatusComponent;
  let fixture: ComponentFixture<SecStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
