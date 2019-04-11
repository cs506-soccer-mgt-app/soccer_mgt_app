import { TestBed } from '@angular/core/testing';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [UserService]
  }));

  function setup() {
    const userService = TestBed.get(UserService);
    const httpTestingCtrl = TestBed.get(HttpTestingController);
    return { userService, httpTestingCtrl };
  }

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('should GET an array of teams data for a user with a user_id of 94a83075-bf1b-48f6-aec9-bbef72c7f4d8', () => {
    const { userService, httpTestingCtrl } = setup();
    // not including the joining key 't.team_id' in mock data
    const mockData = [
        {
          player_id: 8, user_id: '94a83075-bf1b-48f6-aec9-bbef72c7f4d8', team_id: 4, payment: '0', name: 'Wolf',
          primary_color: 'Red', alternate_color: 'Blue', manager_id: '94a83075-bf1b-48f6-aec9-bbef72c7f4d8', session_id: 1
        },
        {
          player_id: 88, user_id: '94a83075-bf1b-48f6-aec9-bbef72c7f4d8', team_id: 44, payment: '100', name: 'Wolfenstein',
          primary_color: 'Orange', alternate_color: 'White', manager_id: '94a83075-bf1b-48f6-aec9-bbef72c7f4d8', session_id: 10
        }
      ];
    userService.getTeamsForUser('94a83075-bf1b-48f6-aec9-bbef72c7f4d8')
        .subscribe(data => {
          expect(data.data).toEqual(mockData);
        });

    const req = httpTestingCtrl.expectOne('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/users/94a83075-bf1b-48f6-aec9-bbef72c7f4d8/teams');
    expect(req.request.method).toBe('GET');
    req.flush({
      data: mockData
    });
  });

  it('should GET an array length of 2 teams', () => {
    const { userService, httpTestingCtrl } = setup();
    // not including the joining key 't.team_id' in mock data
    const mockDataArray = [
      {
        player_id: 8, user_id: '94a83075-bf1b-48f6-aec9-bbef72c7f4d8', team_id: 4, payment: '0', name: 'Wolf',
        primary_color: 'Red', alternate_color: 'Blue', manager_id: '94a83075-bf1b-48f6-aec9-bbef72c7f4d8', session_id: 1
      },
      {
        player_id: 88, user_id: '94a83075-bf1b-48f6-aec9-bbef72c7f4d8', team_id: 44, payment: '100', name: 'Wolfenstein',
        primary_color: 'Orange', alternate_color: 'White', manager_id: '94a83075-bf1b-48f6-aec9-bbef72c7f4d8', session_id: 10
      }
    ];
    userService.getTeamsForUser('94a83075-bf1b-48f6-aec9-bbef72c7f4d8')
        .subscribe(data => {
          expect(data.data.length).toEqual(2);
        });

    const req = httpTestingCtrl.expectOne('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/users/94a83075-bf1b-48f6-aec9-bbef72c7f4d8/teams');
    expect(req.request.method).toBe('GET');
    req.flush({
      data: mockDataArray
    });
  });

  afterEach(() => {
    const { httpTestingCtrl } = setup();
    httpTestingCtrl.verify();
  });
});
