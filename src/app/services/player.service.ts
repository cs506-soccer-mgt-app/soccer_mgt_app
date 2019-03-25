import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(public http: HttpClient) {

    // // Get All Players
    // this.http.get('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/player').subscribe((data) => {
    //   console.log(data);
    // });

    // // Get Player by Player Id
    // this.http.get('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/player/playerid/2').subscribe((data) => {
    //   console.log(data);
    // });

    // // Get Players by Team Id
    // this.http.get('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/player/teamid/1').subscribe((data) => {
    //   console.log(data);
    // });

    // /production/player/{id}
    // /production/player/{id}/user/{id}
    // /production/player/{id}/team/{id}

    // // Get Players by User Id
    // this.http.get('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/player/userid/2').subscribe((data) => {
    //   console.log(data);
    // });

    // // Post Player
    // this.http.post('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/player', 
    // {"user_id":"1",
    //   "team_id":"1"}).subscribe((data) => {
    //   console.log(data)
    // });

   }
}
