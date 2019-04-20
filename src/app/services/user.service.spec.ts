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

  it('should GET an array of games data for a user with a user_id of 3b4e98ee-6c71-496d-b801-6014fdf8d698', () => {
    const { userService, httpTestingCtrl } = setup();
    const mockData = [
        {
          user_id: '3b4e98ee-6c71-496d-b801-6014fdf8d698', player_id: 9, payment: '0', team_id: 6, name: 'GOAT', primary_color: 'Gold',
          alternate_color: 'Black', manager_id: '24666164-bfec-4dd3-8a41-3f777d3d23c4', session_id: 4, game_id: 2, date: '2019-06-18',
          time: '19:48:16', opponent: 'WOAT', score: null, location: 'Home'
        },
        {
          user_id: '3b4e98ee-6c71-496d-b801-6014fdf8d698', player_id: 9, payment: '0', team_id: 6, name: 'GOAT', primary_color: 'Gold',
          alternate_color: 'Black', manager_id: '24666164-bfec-4dd3-8a41-3f777d3d23c4', session_id: 4, game_id: 3, date: '2019-08-19',
          time: '21:49:04', opponent: 'Summer', score: null, location: 'Hawaii'
        },
        {
          user_id: '3b4e98ee-6c71-496d-b801-6014fdf8d698', player_id: 9, payment: '0', team_id: 6, name: 'GOAT', primary_color: 'Gold',
          alternate_color: 'Black', manager_id: '24666164-bfec-4dd3-8a41-3f777d3d23c4', session_id: 4, game_id: 4, date: '2020-12-13',
          time: '00:40:13', opponent: 'Test', score: null, location: 'Practice Field'
        },
        {
          user_id: '3b4e98ee-6c71-496d-b801-6014fdf8d698', player_id: 9, payment: '0', team_id: 6, name: 'GOAT', primary_color: 'Gold',
          alternate_color: 'Black', manager_id: '24666164-bfec-4dd3-8a41-3f777d3d23c4', session_id: 4, game_id: 5, date: '2021-02-17',
          time: '09:59:50', opponent: 'WOAT', score: null, location: 'Barcelona'
        },
        {
          user_id: '3b4e98ee-6c71-496d-b801-6014fdf8d698', player_id: 10, payment: '0', team_id: 8, name: 'Messis', primary_color: 'Red',
          alternate_color: 'Blue', manager_id: '3b4e98ee-6c71-496d-b801-6014fdf8d698', session_id: 3, game_id: 11, date: '2019-04-20',
          time: '12:00:59', opponent: 'YOU', score: null, location: 'Reddan'
        }
    ];
    userService.getGamesForUser('3b4e98ee-6c71-496d-b801-6014fdf8d698')
        .subscribe(data => {
          expect(data.data).toEqual(mockData);
        });

    const req = httpTestingCtrl.expectOne('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/users/3b4e98ee-6c71-496d-b801-6014fdf8d698/games');
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
