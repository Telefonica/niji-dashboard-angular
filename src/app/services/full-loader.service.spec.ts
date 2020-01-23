import { TestBed } from '@angular/core/testing';

import { FullLoaderService } from './full-loader.service';

describe('FullLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FullLoaderService = TestBed.get(FullLoaderService);
    expect(service).toBeTruthy();
  });
});
