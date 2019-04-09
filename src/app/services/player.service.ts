import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(public http: HttpClient) { }

  getPlayerDetails(id: number) {
      return this.http.get('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/players/' + id);
  }

  createPlayer(user_id: string, team_id: number, payment: string) {
      return this.http.post('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/players', {
          user_id: user_id,
          team_id: team_id,
          payment: payment
      });
  }

  updatePlayer(id: number, user_id: string, team_id: number, payment: string) {
      return this.http.put('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/players/' + id, {
          user_id: user_id,
          team_id: team_id,
          payment: payment
      });
  }

}
