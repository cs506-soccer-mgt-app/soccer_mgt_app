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

  afterEach(() => {
    const { httpTestingCtrl } = setup();
    httpTestingCtrl.verify();
  });
});
