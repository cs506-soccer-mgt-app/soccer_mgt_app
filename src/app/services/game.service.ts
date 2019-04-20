import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(public http: HttpClient) {

  }

  getGameDetail(id: number) {
    return this.http.get('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/games/' + id);
  }

  createGame(date: string, time: string, opponent: string, score: string, location: string, team_id: number) {
    return this.http.post('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/games', {
      date: date,
      time: time,
      opponent: opponent,
      score: score,
      location: location,
      team_id: team_id
    });
  }

  updateGame(id: number, date: string, time: string, opponent: string, score: string, location: string, team_id: number) {
    return this.http.put('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/games/' + id, {
      date: date,
      time: time,
      opponent: opponent,
      score: score,
      location: location,
      team_id: team_id
    });
  }

  notifyTeamOfUpcomingGame(team_id: number, date: string, time: string, opponent: string, location: string) {
    return this.http.post('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/notifiyteam/' + team_id, {
      date: date,
      time: time,
      opponent: opponent,
      location: location
    });
  }

}
