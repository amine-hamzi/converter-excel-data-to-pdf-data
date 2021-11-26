import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneFactureComponent } from './one-facture.component';

describe('OneFactureComponent', () => {
  let component: OneFactureComponent;
  let fixture: ComponentFixture<OneFactureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneFactureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
