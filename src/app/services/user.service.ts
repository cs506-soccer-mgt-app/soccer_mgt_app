import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  getTeamsForUser(id: string) {
    return this.http.get(`https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/users/${id}/teams`);
  }

  // TODO: REPLACE WITH REAL HTTP CALL
  getGamesForUser(id: string) {
    // return this.http.get(`https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/users/${id}/games`);
    return [
      { user_id: '3b4e98ee-6c71-496d-b801-6014fdf8d698', player_id: 9, payment: '0', team_id: 6, name: 'GOAT', primary_color: 'Gold', alternate_color: 'Black', manager_id: '24666164-bfec-4dd3-8a41-3f777d3d23c4', session_id: 4, game_id: 2, date: '2019-06-18', time: '19:48:16', opponent: 'WOAT', score: null, location: 'Home' },
      { user_id: '3b4e98ee-6c71-496d-b801-6014fdf8d698', player_id: 9, payment: '0', team_id: 6, name: 'GOAT', primary_color: 'Gold', alternate_color: 'Black', manager_id: '24666164-bfec-4dd3-8a41-3f777d3d23c4', session_id: 4, game_id: 3, date: '2019-08-19', time: '21:49:04', opponent: 'Summer', score: null, location: 'Hawaii' },
      { user_id: '3b4e98ee-6c71-496d-b801-6014fdf8d698', player_id: 9, payment: '0', team_id: 6, name: 'GOAT', primary_color: 'Gold', alternate_color: 'Black', manager_id: '24666164-bfec-4dd3-8a41-3f777d3d23c4', session_id: 4, game_id: 4, date: '2020-12-13', time: '00:40:13', opponent: 'Test', score: null, location: 'Practice Field' },
      { user_id: '3b4e98ee-6c71-496d-b801-6014fdf8d698', player_id: 9, payment: '0', team_id: 6, name: 'GOAT', primary_color: 'Gold', alternate_color: 'Black', manager_id: '24666164-bfec-4dd3-8a41-3f777d3d23c4', session_id: 4, game_id: 5, date: '2021-02-17', time: '09:59:50', opponent: 'WOAT', score: null, location: 'Barcelona' }
    ];
  }

}
