import { TestBed } from '@angular/core/testing';

import { CommonAjaxService } from './common-ajax.service';

describe('CommonAjaxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonAjaxService = TestBed.get(CommonAjaxService);
    expect(service).toBeTruthy();
  });
});
