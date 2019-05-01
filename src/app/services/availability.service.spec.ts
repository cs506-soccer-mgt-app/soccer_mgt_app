import { TestBed } from '@angular/core/testing';

import { AvailabilityService } from './availability.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('AvailabilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [AvailabilityService]
  }));

  function setup() {
    const availabilityService = TestBed.get(AvailabilityService);
    const httpTestingCtrl = TestBed.get(HttpTestingController);
    return { availabilityService, httpTestingCtrl };
  }

  afterEach(() => {
    const { httpTestingCtrl } = setup();
    httpTestingCtrl.verify();
  });

  it('should be created', () => {
    const service: AvailabilityService = TestBed.get(AvailabilityService);
    expect(service).toBeTruthy();
  });

  it('should GET specific availability data when passing a game_id and player_id', () => {
    const { availabilityService, httpTestingCtrl } = setup();
    const mockData = { availability_id: 1, game_id: 1, player_id: 1, availability_type: 'IN' };
    availabilityService.getAvailabilityByGameAndPlayer(mockData.game_id, mockData.player_id)
        .subscribe(data => {
          expect(data.data).toEqual(mockData);
        });

    const req = httpTestingCtrl.expectOne(`https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/games/${mockData.game_id}/players/${mockData.player_id}/availabilities`);
    expect(req.request.method).toBe('GET');
    req.flush({
      data: mockData
    });
  });

  it('should POST a new availability to the availability resource', () => {
    const { availabilityService, httpTestingCtrl } = setup();
    const mockData = { availability_id: 1, game_id: 1, player_id: 1, availability_type: 'IN' };
    availabilityService.createAvailability(mockData.game_id, mockData.player_id, mockData.availability_type)
        .subscribe(data => {
          expect(data.data).toBe(mockData);
        });

    const req = httpTestingCtrl.expectOne('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/availabilities');
    expect(req.request.method).toBe('POST');
    req.flush({
      data: mockData
    });
  });

  it('should PUT an availability to the availability resource with new availability data', () => {
    const { availabilityService, httpTestingCtrl } = setup();
    const mockData = { availability_id: 1, game_id: 1, player_id: 1, availability_type: 'OUT' };
    availabilityService.updateAvailability(mockData.game_id, mockData.player_id, mockData.availability_type)
        .subscribe(data => {
          expect(data.data).toBe(mockData);
        });

    const req = httpTestingCtrl.expectOne(`https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/availabilities/${mockData.availability_id}`);
    expect(req.request.method).toBe('PUT');
    req.flush({
      data: mockData
    });
  });
});
