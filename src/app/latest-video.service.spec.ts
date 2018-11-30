import { TestBed } from '@angular/core/testing';

import { LatestVideoService } from './latest-video.service';

describe('LatestVideoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LatestVideoService = TestBed.get(LatestVideoService);
    expect(service).toBeTruthy();
  });
});
