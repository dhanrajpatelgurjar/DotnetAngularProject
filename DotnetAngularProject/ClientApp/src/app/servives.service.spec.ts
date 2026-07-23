import { TestBed } from '@angular/core/testing';

import ServivesService from './servives.service';

describe('ServivesService', () => {
  let service: ServivesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServivesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
