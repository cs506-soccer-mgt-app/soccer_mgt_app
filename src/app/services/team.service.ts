import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(public http: HttpClient) {

    // // Get All Teams
    // this.http.get('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/teams').subscribe((data) => {
    //   console.log(data);
    // });

    // // Get Team by Team Id
    // this.http.get('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/teams/2').subscribe((data) => {
    //   console.log(data);
    // });

    // // Post Team (also known as creating a team)
    // this.http.post('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/teams', 
    // {"name":"Wolf",
    //   "primary_color":"Red", 
    //   "session_id": "4",
    //   "alternate_color":"Purple", 
    //   "manager_id":"1"}).subscribe((data) => {
    //   console.log(data)
    // });

    // // Put Team (also known as modifying an already craeted teams attributes)
    // this.http.put('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/teams/1', 
    // {"name":"Wolf2.0",
    //   "primary_color":"Red2.0", 
    //   "session_id": "4",
    //   "alternate_color":"Purple2.0", 
    //   "manager_id":"1"}).subscribe((data) => {
    //   console.log(data)
    // });

   }

   getTeamDetail(id: number) {
      return this.http.get('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/teams/' + id);
   }
}
