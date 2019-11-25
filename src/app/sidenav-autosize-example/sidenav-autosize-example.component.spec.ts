import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavAutosizeExampleComponent } from './sidenav-autosize-example.component';

describe('SidenavAutosizeExampleComponent', () => {
  let component: SidenavAutosizeExampleComponent;
  let fixture: ComponentFixture<SidenavAutosizeExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavAutosizeExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavAutosizeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
