import { TestBed } from '@angular/core/testing';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { TeamService } from './team.service';

describe('TeamService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [TeamService]
  }));

  function setup() {
    const teamService = TestBed.get(TeamService);
    const httpTestingCtrl = TestBed.get(HttpTestingController);
    return { teamService, httpTestingCtrl };
  }

  it('should be created', () => {
    const service: TeamService = TestBed.get(TeamService);
    expect(service).toBeTruthy();
  });

  it('should GET an array of teams', () => {
    const { teamService, httpTestingCtrl } = setup();
    const mockDataArray = [
      { team_id: 1, name: 'GOAT 1', primary_color: 'Red', alternate_color: 'White', manager_id: 1, session_id: 3 },
      { team_id: 2, name: 'GOAT 2', primary_color: 'Blue', alternate_color: 'White', manager_id: 1, session_id: 3 },
      { team_id: 3, name: 'GOAT 3', primary_color: 'Green', alternate_color: 'White', manager_id: 1, session_id: 3 }
    ];
    teamService.getTeams()
        .subscribe(data => {
          expect(data.data).toEqual(mockDataArray);
        });

    const req = httpTestingCtrl.expectOne('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/teams');
    expect(req.request.method).toBe('GET');
    req.flush({
      data: mockDataArray
    });
  });

  it('should GET an array length of 3 teams', () => {
    const { teamService, httpTestingCtrl } = setup();
    const mockDataArray = [
      { team_id: 1, name: 'GOAT 1', primary_color: 'Red', alternate_color: 'White', manager_id: 1, session_id: 3 },
      { team_id: 2, name: 'GOAT 2', primary_color: 'Blue', alternate_color: 'White', manager_id: 1, session_id: 3 },
      { team_id: 3, name: 'GOAT 3', primary_color: 'Green', alternate_color: 'White', manager_id: 1, session_id: 3 }
    ];
    teamService.getTeams()
        .subscribe(data => {
          expect(data.data.length).toEqual(3);
        });

    const req = httpTestingCtrl.expectOne('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/teams');
    expect(req.request.method).toBe('GET');
    req.flush({
      data: mockDataArray
    });
  });

  it('should GET specific team data when passing a team_id of 1', () => {
    const { teamService, httpTestingCtrl } = setup();
    const mockData = { team_id: 1, name: 'GOAT', primary_color: 'Red', alternate_color: 'White', manager_id: 1, session_id: 3 };
    teamService.getTeamDetail(mockData.team_id)
        .subscribe(data => {
          expect(data.data).toEqual(mockData);
        });

    const req = httpTestingCtrl.expectOne('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/teams/1');
    expect(req.request.method).toBe('GET');
    req.flush({
      data: mockData
    });
  });

  it('should POST a new team to the team resource', () => {
    const { teamService, httpTestingCtrl } = setup();
    const mockData = { team_id: 999, name: '999 GOAT', primary_color: 'Blue', alternate_color: 'White', manager_id: 1, session_id: 3 };
    teamService.createTeam(mockData.name, mockData.primary_color, mockData.session_id, mockData.alternate_color, mockData.manager_id)
        .subscribe(data => {
          expect(data.data).toBe(mockData);
        });

    const req = httpTestingCtrl.expectOne('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/teams');
    expect(req.request.method).toBe('POST');
    req.flush({
      data: mockData
    });
  });

  it('should PUT a team to the team resource with new team data', () => {
    const { teamService, httpTestingCtrl } = setup();
    const mockData = { team_id: 999, name: '999 GOAT 999', primary_color: 'Black', alternate_color: 'White', manager_id: 1, session_id: 3 };
    teamService.updateTeam(mockData.team_id, mockData.name, mockData.primary_color, mockData.session_id, mockData.alternate_color, mockData.manager_id)
        .subscribe(data => {
          expect(data.data).toBe(mockData);
        });

    const req = httpTestingCtrl.expectOne('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/teams/999');
    expect(req.request.method).toBe('PUT');
    req.flush({
      data: mockData
    });
  });

  it('should GET an array of games for a specific team when passing a team_id of 1', () => {
    const { teamService, httpTestingCtrl } = setup();
    const mockTeam = { team_id: 1, name: 'GOAT', primary_color: 'Red', alternate_color: 'White', manager_id: 1, session_id: 3 };
    const mockGames = [
      { game_id: 1, date: '2019-03-20', time: '10:00', opponent: 'Team 9', score: '', team_id: 1 },
      { game_id: 2, date: '2019-03-27', time: '11:00', opponent: 'Team 8', score: '', team_id: 1 },
      { game_id: 3, date: '2019-04-03', time: '2:00', opponent: 'Team 7', score: '', team_id: 1 },
      { game_id: 4, date: '2019-04-10', time: '3:00', opponent: 'Team 6', score: '', team_id: 1 }
    ];
    teamService.getGamesForTeam(mockTeam.team_id)
        .subscribe(data => {
          expect(data.data).toEqual(mockGames);
        });

    const req = httpTestingCtrl.expectOne(`https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/teams/${mockTeam.team_id}/games`);
    expect(req.request.method).toBe('GET');
    req.flush({
      data: mockGames
    });
  });

  it('should GET an array of 4 games for a specific team when passing a team_id of 1', () => {
    const { teamService, httpTestingCtrl } = setup();
    const mockTeam = { team_id: 1, name: 'GOAT', primary_color: 'Red', alternate_color: 'White', manager_id: 1, session_id: 3 };
    const mockGames = [
      { game_id: 1, date: '2019-03-20', time: '10:00', opponent: 'Team 9', score: '', team_id: 1 },
      { game_id: 2, date: '2019-03-27', time: '11:00', opponent: 'Team 8', score: '', team_id: 1 },
      { game_id: 3, date: '2019-04-03', time: '2:00', opponent: 'Team 7', score: '', team_id: 1 },
      { game_id: 4, date: '2019-04-10', time: '3:00', opponent: 'Team 6', score: '', team_id: 1 }
    ];
    teamService.getGamesForTeam(mockTeam.team_id)
        .subscribe(data => {
          expect(data.data.length).toEqual(4);
        });

    const req = httpTestingCtrl.expectOne(`https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/teams/${mockTeam.team_id}/games`);
    expect(req.request.method).toBe('GET');
    req.flush({
      data: mockGames
    });
  });

  it('should GET an array of players for a specific team when passing a team_id of 39', () => {
    const { teamService, httpTestingCtrl } = setup();
    const mockTeam = { team_id: 39, name: 'GOAT', primary_color: 'Red', alternate_color: 'White', manager_id: '162d4c24-a3b9-40ef-a6eb-4683a68404bb', session_id: 3 };
    const mockPlayers = [
      { player_id: 40, user_id: '162d4c24-a3b9-40ef-a6eb-4683a68404bb', team_id: 39, payment: '50' },
      { player_id: 38, user_id: '17e3ab3b-0ac4-41a5-8b4e-5092bdbb2f35', team_id: 39, payment: '50' },
      { player_id: 37, user_id: '6ac1591d-405f-4708-b3e0-06be274e2c2c', team_id: 39, payment: '' }
    ];
    teamService.getPlayersForTeam(mockTeam.team_id)
        .subscribe(data => {
          expect(data.data).toEqual(mockPlayers);
        });

    const req = httpTestingCtrl.expectOne(`https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/teams/${mockTeam.team_id}/players`);
    expect(req.request.method).toBe('GET');
    req.flush({
      data: mockPlayers
    });
  });

  afterEach(() => {
    const { httpTestingCtrl } = setup();
    httpTestingCtrl.verify();
  });
});
