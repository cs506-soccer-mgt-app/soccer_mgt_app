import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(public http: HttpClient) {

    // // Get All Players
    // this.http.get('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/players').subscribe((data) => {
    //   console.log(data);
    // });

    // // Get Player by Player Id
    // this.http.get('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/players/2').subscribe((data) => {
    //   console.log(data);
    // });

    // // Post Player
    // this.http.post('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/players', 
    // {"user_id":"1",
    //   "team_id":"1"}).subscribe((data) => {
    //   console.log(data)
    // });

   }
}
