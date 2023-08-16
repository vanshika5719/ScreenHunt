import { TestBed } from '@angular/core/testing';

import { ScreenhuntService } from './screenhunt.service';

describe('ScreenhuntService', () => {
  let service: ScreenhuntService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenhuntService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
