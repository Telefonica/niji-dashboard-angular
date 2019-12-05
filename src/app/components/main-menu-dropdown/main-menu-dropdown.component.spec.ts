import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuDropdownComponent } from './main-menu-dropdown.component';

describe('MainMenuDropdownComponent', () => {
  let component: MainMenuDropdownComponent;
  let fixture: ComponentFixture<MainMenuDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMenuDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenuDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
