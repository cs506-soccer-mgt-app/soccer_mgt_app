import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(public http: HttpClient) {

    // // Put Game (also known as modifying an already craeted games attributes)
    // this.http.put('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/games/1', 
    // {"date":"Wolf2.0",
    //   "time":"Red2.0", 
    //   "opponent": "4",
    //   "score":"Purple2.0", 
    //   "team_id":"1"}).subscribe((data) => {
    //   console.log(data)
    // });

  }

  getGameDetail(id: number) {
    return this.http.get('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/games/' + id);
  }

  createGame(date: string, time: string, opponent: string, score: string, team_id: number) {
    return this.http.post('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/games', {
      date: date,
      time: time,
      opponent: opponent,
      score: score,
      team_id: team_id
    });
  }

  updateGame(id: number, date: string, time: string, opponent: string, score: string, team_id: number) {
    return this.http.put('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/games/' + id, {
      date: date,
      time: time,
      opponent: opponent,
      score: score,
      team_id: team_id
    });
  }
}
