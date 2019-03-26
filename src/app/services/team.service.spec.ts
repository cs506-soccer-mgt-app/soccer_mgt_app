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

  it('should return specific team data when passing a team_id of 1', () => {
    const { teamService, httpTestingCtrl } = setup();
    const mockData = { team_id: 1, name: 'GOAT', primary_color: 'Red', alternate_color: 'White', manager_id: 1, session_id: 3 };
    teamService.getTeamDetail(mockData.team_id).subscribe(data => {
      expect(data.data).toEqual(mockData);
    });

    const req = httpTestingCtrl.expectOne('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/team/1');
    expect(req.request.method).toBe('GET');
    req.flush({
      data: mockData
    });
  });

  afterEach(() => {
    const { httpTestingCtrl } = setup();
    httpTestingCtrl.verify();
  });
});
