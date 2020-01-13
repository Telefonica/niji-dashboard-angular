import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitelistFormComponent } from './whitelist-form.component';

describe('WhitelistFormComponent', () => {
  let component: WhitelistFormComponent;
  let fixture: ComponentFixture<WhitelistFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhitelistFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhitelistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
