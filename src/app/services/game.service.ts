import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(public http: HttpClient) { 

    // // Get All Games
    // this.http.get('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/games').subscribe((data) => {
    //   console.log(data);
    // });

    // // Get Game by Game Id
    // this.http.get('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/games/2').subscribe((data) => {
    //   console.log(data);
    // });

    // // Post Game (also known as creating a game)
    // this.http.post('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/games', 
    // {"date":"Wolf",
    //   "time":"Red", 
    //   "opponent": "4",
    //   "score":"Purple", 
    //   "team_id":"1"}).subscribe((data) => {
    //   console.log(data)
    // });

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
}
