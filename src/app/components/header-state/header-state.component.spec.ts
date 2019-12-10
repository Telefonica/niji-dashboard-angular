import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderStateComponent } from './header-state.component';

describe('HeaderStateComponent', () => {
  let component: HeaderStateComponent;
  let fixture: ComponentFixture<HeaderStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
