import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreatsListComponent } from './threats-list.component';

describe('ThreatsListComponent', () => {
  let component: ThreatsListComponent;
  let fixture: ComponentFixture<ThreatsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreatsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreatsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
