import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(public http: HttpClient) {

    // // Get All Teams
    // this.http.get('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/team').subscribe((data) => {
    //   console.log(data);
    // });


    // // Get Team by Team Id
    // this.http.get('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/team/teamid/2').subscribe((data) => {
    //   console.log(data);
    // });

    // /production/team/2


    // // Post Team
    // this.http.post('https://1d59ipr7q8.execute-api.us-east-2.amazonaws.com/production/team', 
    // {"name":"Wolf",
    //   "primary_color":"Red", 
    //   "session_id": "4",
    //   "alternate_color":"Purple", 
    //   "manager_id":"1"}).subscribe((data) => {
    //   console.log(data)
    // });

   }
}
