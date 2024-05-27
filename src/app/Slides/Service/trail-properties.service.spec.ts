import { TestBed } from '@angular/core/testing';

import { TrailPropertiesService } from './trail-properties.service';

describe('TrailPropertiesService', () => {
  let service: TrailPropertiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrailPropertiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
