import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressPopupPage } from './address-popup.page';

describe('AddressPopupPage', () => {
  let component: AddressPopupPage;
  let fixture: ComponentFixture<AddressPopupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressPopupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressPopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
