import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {

  constructor(public http: HttpClient) { }

  createAvailability(game_id: number, player_id: number, availability_type: string) {
    return this.http.post('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/availabilities', {
      game_id: game_id,
      player_id: player_id,
      availability_type: availability_type
    });
  }

  updateAvailability(id: number, game_id: number, player_id: number, availability_type: string) {
    return this.http.put('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/availabilities/' + id, {
      game_id: game_id,
      player_id: player_id,
      availability_type: availability_type
    });
  }

  getAvailabilityByGameAndPlayer(game_id: number, player_id: number) {
    return this.http.get(`https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/games/${game_id}/players/${player_id}/availabilities`);
  }
}
