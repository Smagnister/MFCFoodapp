import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrocardComponent } from './introcard.component';

describe('IntrocardComponent', () => {
  let component: IntrocardComponent;
  let fixture: ComponentFixture<IntrocardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrocardComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
