import { TestBed } from '@angular/core/testing';

import { MetricsApiService } from './metrics.service';

describe('MetricsService', () => {
  let service: MetricsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetricsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
