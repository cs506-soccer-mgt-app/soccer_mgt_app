import { TestBed } from '@angular/core/testing';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { PlayerService } from './player.service';

describe('PlayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [PlayerService]
  }));

  function setup() {
    const playerService = TestBed.get(PlayerService);
    const httpTestingCtrl = TestBed.get(HttpTestingController);
    return { playerService, httpTestingCtrl };
  }

  it('should be created', () => {
    const service: PlayerService = TestBed.get(PlayerService);
    expect(service).toBeTruthy();
  });

  it('should GET specific player data when passing a player_id of 8', () => {
    const { playerService, httpTestingCtrl } = setup();
    const mockData = { player_id: 8, user_id: '94a83075-bf1b-48f6-aec9-bbef72c7f4d8', team_id: 4, payment: '0' };
    playerService.getPlayerDetails(mockData.player_id)
        .subscribe(data => {
          expect(data.data).toBe(mockData);
        });

    const req = httpTestingCtrl.expectOne('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/players/8');
    expect(req.request.method).toBe('GET');
    req.flush({
      data: mockData
    });
  });

  it('should POST a new player to the player resource', () => {
    const { playerService, httpTestingCtrl } = setup();
    const mockData = { player_id: 8, user_id: '94a83075-bf1b-48f6-aec9-bbef72c7f4d8', team_id: 4, payment: '0' };
    playerService.createPlayer(mockData.user_id, mockData.team_id, mockData.payment)
        .subscribe(data => {
          expect(data.data).toBe(mockData);
        });

    const req = httpTestingCtrl.expectOne('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/players');
    expect(req.request.method).toBe('POST');
    req.flush({
      data: mockData
    });
  });

  it('should PUT a player to the player resource with new player data', () => {
    const { playerService, httpTestingCtrl } = setup();
    const mockData = { player_id: 8, user_id: '94a83075-bf1b-48f6-aec9-bbef72c7f4d8', team_id: 4, payment: '100' };
    playerService.updatePlayer(mockData.player_id, mockData.user_id, mockData.team_id, mockData.payment)
        .subscribe(data => {
          expect(data.data).toBe(mockData);
        });

    const req = httpTestingCtrl.expectOne('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/players/' + mockData.player_id);
    expect(req.request.method).toBe('PUT');
    req.flush({
      data: mockData
    });
  });

  afterEach(() => {
    const { httpTestingCtrl } = setup();
    httpTestingCtrl.verify();
  });
});
