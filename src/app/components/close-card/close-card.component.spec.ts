import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseCardComponent } from './close-card.component';

describe('CloseCardComponent', () => {
  let component: CloseCardComponent;
  let fixture: ComponentFixture<CloseCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
