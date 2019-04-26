import { TestBed } from '@angular/core/testing';

import { AvailabilityService } from './availability.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {GameService} from './game.service';

describe('AvailabilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [GameService]
  }));

  it('should be created', () => {
    const service: AvailabilityService = TestBed.get(AvailabilityService);
    expect(service).toBeTruthy();
  });
});
