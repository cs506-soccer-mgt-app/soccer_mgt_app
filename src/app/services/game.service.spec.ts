import { TestBed } from '@angular/core/testing';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { GameService } from './game.service';

describe('GameService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GameService]
  }));

  function setup() {
      const gameService = TestBed.get(GameService);
      const httpTestingCtrl = TestBed.get(HttpTestingController);
      return { gameService, httpTestingCtrl };
  }

  it('should be created', () => {
    const service: GameService = TestBed.get(GameService);
    expect(service).toBeTruthy();
  });

  it('should GET specific game data when passing a game_id of 1', () => {
     const { gameService, httpTestingCtrl } = setup();
     const mockData = { game_id: 1, date: '2019-03-20', time: '10:00:00', opponent: 'Team 9', score: '', team_id: 1 };
     gameService.getGameDetail(mockData.game_id)
         .subscribe(data => {
             expect(data.data).toEqual(mockData);
         });

     const req = httpTestingCtrl.expectOne('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/games/1');
     expect(req.request.method).toBe('GET');
     req.flush({
        data: mockData
     });
  });

  it('should POST a new game to the game resource', () => {
      const { gameService, httpTestingCtrl } = setup();
      const mockData = { game_id: 999, date: '2019-03-20', time: '10:00:00', opponent: 'Team 9', score: '', team_id: 1 };
      gameService.createGame(mockData.date, mockData.time, mockData.opponent, mockData.score, mockData.team_id)
          .subscribe(data => {
              expect(data.data).toBe(mockData);
          });

      const req = httpTestingCtrl.expectOne('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/games');
      expect(req.request.method).toBe('POST');
      req.flush({
          data: mockData
      });
  });

    it('should PUT a game to the game resource with new game data', () => {
        const { gameService, httpTestingCtrl } = setup();
        const mockData = { game_id: 999, date: '2019-03-20', time: '10:00:00', opponent: 'Team 9', score: '', team_id: 1 };
        gameService.updateGame(mockData.game_id, mockData.date, mockData.time, mockData.opponent, mockData.score, mockData.team_id)
            .subscribe(data => {
                expect(data.data).toBe(mockData);
            });

        const req = httpTestingCtrl.expectOne('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/games/999');
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
