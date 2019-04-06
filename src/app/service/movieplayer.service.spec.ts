import { TestBed } from '@angular/core/testing';

import { MovieplayerService } from './movieplayer.service';

describe('MovieplayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieplayerService = TestBed.get(MovieplayerService);
    expect(service).toBeTruthy();
  });
});
